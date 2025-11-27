"use client";
import { useChat } from "@ai-sdk/react";
import { useState, useEffect, useRef } from "react";
import { DefaultChatTransport } from "ai";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { AVAILABLE_MODELS, getModelConfig } from "../lib/models";

export default function Page() {
  const [selectedModel, setSelectedModel] = useState(
    AVAILABLE_MODELS[0]?.id || "google/gemini-2.0-flash-exp"
  );
  const selectedModelRef = useRef(selectedModel);
  selectedModelRef.current = selectedModel;
  const currentModelConfig = getModelConfig(selectedModel);
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: `${process.env.NEXT_PUBLIC_API_URL}/chat`,
      body: () => ({ model: selectedModelRef.current }),
    }),
  });
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput("");
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Chat
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden max-w-4xl mx-auto w-full px-4 py-6 flex flex-col gap-4">
        {/* Model Selector */}
        <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
          <CardContent className="pt-6">
            <Label
              className="block text-sm font-medium text-gray-300 mb-2"
              htmlFor="model-select"
            >
              Model
            </Label>
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger
                id="model-select"
                className="w-full bg-gray-950 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500/20"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                {AVAILABLE_MODELS.map((model) => (
                  <SelectItem
                    key={model.id}
                    value={model.id}
                    className="text-white hover:bg-gray-800 focus:bg-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{model.avatar.emoji}</span>
                      <div className="flex flex-col">
                        <span className="font-medium">{model.name}</span>
                        <span className="text-xs text-gray-400">
                          {model.description}
                        </span>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Messages Area */}
        <Card className="flex-1 overflow-hidden bg-gray-900/30 backdrop-blur-sm border-gray-800">
          <ScrollArea className="h-full p-4">
            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-[calc(100vh-400px)] text-center">
                  <div className="text-6xl mb-4">💬</div>
                  <h2 className="text-xl font-semibold text-gray-300 mb-2">
                    Start a Conversation
                  </h2>
                  <p className="text-gray-500">
                    Type a message below to begin chatting with AI
                  </p>
                </div>
              )}
              {messages.map((message) => (
                <div
                  key={message.id}
                  id={message.id}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                >
                  {message.role !== "user" && (
                    <Avatar
                      className={`h-8 w-8 mt-1 ring-2 ring-opacity-20 ${currentModelConfig ? `ring-${currentModelConfig.avatar.gradient.split("-")[1]}-500` : "ring-purple-500"}`}
                    >
                      <AvatarFallback
                        className={`bg-gradient-to-br ${currentModelConfig?.avatar.gradient || "from-purple-500 to-pink-500"} text-white text-xs flex items-center justify-center`}
                      >
                        {currentModelConfig?.avatar.emoji ||
                          currentModelConfig?.avatar.fallback ||
                          "AI"}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] rounded-xl px-5 py-3 shadow-lg ${
                      message.role === "user"
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white"
                        : "bg-gray-800/80 backdrop-blur-sm text-gray-100 border border-gray-700"
                    }`}
                  >
                    <div className="text-xs font-semibold mb-2 opacity-70">
                      {message.role === "user" ? "You" : "Assistant"}
                    </div>
                    <div className="space-y-3">
                      {message.parts.map((part, index) => {
                        if (part.type === "text") {
                          return (
                            <div
                              key={index}
                              className="whitespace-pre-wrap leading-relaxed"
                            >
                              {part.text}
                            </div>
                          );
                        }
                        if (
                          part.type === "tool-getWeather" &&
                          part.state === "output-available"
                        ) {
                          // return <WeatherCard key={index} data={part.output as any} />;
                        }
                        return null;
                      })}
                    </div>
                  </div>
                  {message.role === "user" && (
                    <Avatar className="h-8 w-8 mt-1 ring-2 ring-blue-500/20">
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-700 text-white text-xs">
                        U
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {status !== "ready" && (
                <div className="flex gap-3 justify-start animate-in fade-in duration-300">
                  <Avatar
                    className={`h-8 w-8 mt-1 ring-2 ring-opacity-20 ${currentModelConfig ? `ring-${currentModelConfig.avatar.gradient.split("-")[1]}-500` : "ring-purple-500"}`}
                  >
                    <AvatarFallback
                      className={`bg-gradient-to-br ${currentModelConfig?.avatar.gradient || "from-purple-500 to-pink-500"} text-white text-xs flex items-center justify-center`}
                    >
                      {currentModelConfig?.avatar.emoji ||
                        currentModelConfig?.avatar.fallback ||
                        "AI"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl px-5 py-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </Card>

        {/* Input Form */}
        <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={status !== "ready"}
                className="flex-1 bg-gray-950 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
              />
              <Button
                type="submit"
                disabled={status !== "ready" || !input.trim()}
                className="px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
