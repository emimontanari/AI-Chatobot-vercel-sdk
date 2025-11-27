export interface ModelConfig {
  id: string;
  name: string;
  provider: string;
  description: string;
  avatar: {
    emoji?: string;
    gradient: string;
    fallback: string;
  };
}

export const AVAILABLE_MODELS: ModelConfig[] = [
  {
    id: "google/gemini-2.0-flash-exp",
    name: "Gemini 2.0 Flash",
    provider: "Google",
    description: "Latest experimental model with enhanced capabilities",
    avatar: {
      emoji: "⚡",
      gradient: "from-blue-500 to-cyan-500",
      fallback: "G2",
    },
  },
  {
    id: "google/gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    provider: "Google",
    description: "Most capable model for complex tasks",
    avatar: {
      emoji: "🚀",
      gradient: "from-purple-500 to-pink-500",
      fallback: "GP",
    },
  },
  {
    id: "google/gemini-1.5-flash",
    name: "Gemini 1.5 Flash",
    provider: "Google",
    description: "Fast and efficient for most tasks",
    avatar: {
      emoji: "⚡",
      gradient: "from-orange-500 to-red-500",
      fallback: "GF",
    },
  },
  {
    id: "google/gemini-1.5-flash-8b",
    name: "Gemini 1.5 Flash 8B",
    provider: "Google",
    description: "Lightweight and fast model",
    avatar: {
      emoji: "💨",
      gradient: "from-green-500 to-emerald-500",
      fallback: "G8",
    },
  },
];

export function getModelConfig(modelId: string): ModelConfig | undefined {
  return AVAILABLE_MODELS.find((model) => model.id === modelId);
}
