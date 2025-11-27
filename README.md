# AI Chat Platform - Full-Stack Monorepo

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-11.0.1-red)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)](https://www.typescriptlang.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.5.5-EF4444)](https://turbo.build/)
[![pnpm](https://img.shields.io/badge/pnpm-10.4.1-orange)](https://pnpm.io/)

Una plataforma de chat impulsada por IA construida con Next.js 15, NestJS y Google Gemini, diseñada como un monorepo moderno con Turborepo.

[Características](#características-actuales) •
[Instalación](#instalación) •
[Roadmap](#roadmap) •
[Arquitectura](#arquitectura)

</div>

---

## 📋 Tabla de Contenidos

- [Análisis del Proyecto](#-análisis-del-proyecto)
- [Estado Actual](#-estado-actual)
- [Ideas de Mejora](#-ideas-de-mejora-y-nuevas-features)
- [Mejoras Técnicas](#-mejoras-técnicas)
- [Roadmap](#-roadmap-sugerido)
- [Instalación](#-instalación)
- [Arquitectura](#-arquitectura)
- [Stack Tecnológico](#-stack-tecnológico)

---

## 🔍 Análisis del Proyecto

### Descripción General

Este proyecto es una **plataforma de chat con inteligencia artificial** que permite a los usuarios interactuar con diferentes modelos de Google Gemini a través de una interfaz web moderna y responsive. El sistema está diseñado como un monorepo full-stack que combina:

- **Frontend**: Next.js 15 con React 19, Tailwind CSS y shadcn/ui
- **Backend**: NestJS 11 con integración de Google Generative AI
- **Librería UI**: Componentes compartidos basados en Radix UI
- **Sistema de Tools**: Framework extensible para que la IA ejecute herramientas

### Propósito

Proporcionar una plataforma escalable y mantenible para:
1. Interacciones conversacionales con modelos de IA avanzados
2. Ejecución de herramientas y funciones específicas mediante IA
3. Experimentación con diferentes modelos de lenguaje
4. Base para aplicaciones empresariales de IA

### Estructura del Código

```
AI-vercel-sdk/
├── apps/
│   ├── web/                    # Frontend Next.js 15
│   │   ├── app/               # App Router (páginas)
│   │   ├── components/        # Componentes React
│   │   ├── lib/              # Configuraciones y utilidades
│   │   └── hooks/            # React hooks personalizados
│   │
│   └── backend/              # Backend NestJS
│       ├── src/
│       │   ├── chat/         # Módulo de chat (controller, service, tools)
│       │   ├── app.module.ts # Módulo raíz
│       │   └── main.ts       # Entry point
│       └── test/             # Tests E2E
│
├── packages/
│   ├── ui/                   # Librería de componentes UI compartidos
│   ├── eslint-config/        # Configuraciones ESLint compartidas
│   └── typescript-config/    # Configuraciones TypeScript compartidas
│
└── turbo.json               # Configuración Turborepo
```

### Arquitectura y Patrones

#### Backend (NestJS)
- **Patrón Modular**: Organización en módulos (ChatModule, ConfigModule)
- **Dependency Injection**: Uso completo del sistema DI de NestJS
- **Service Layer**: Separación de lógica de negocio (ChatService, ToolsService)
- **Streaming**: Respuestas en tiempo real usando Express Response streams
- **Tool Pattern**: Sistema extensible de herramientas con validación Zod

#### Frontend (Next.js)
- **App Router**: Arquitectura moderna de Next.js 15
- **Component Composition**: Componentes reutilizables y modulares
- **Hooks Pattern**: useChat de @ai-sdk/react para gestión de estado
- **Theming**: Soporte dark/light mode con next-themes
- **Atomic Design**: Librería UI con componentes atómicos (Button, Input, Card, etc.)

#### Monorepo
- **Turborepo**: Orquestación de builds con caché inteligente
- **pnpm Workspaces**: Gestión eficiente de dependencias compartidas
- **Shared Configs**: Configuraciones centralizadas de TypeScript y ESLint
- **Package Exports**: Exposición controlada de componentes UI

### Funcionalidades Implementadas

1. **Chat en Tiempo Real**
   - Streaming de respuestas de IA
   - Soporte para múltiples modelos Gemini
   - Interfaz conversacional con historial

2. **Selector de Modelos**
   - Dropdown con 4 modelos de Google Gemini
   - Avatares personalizados por modelo
   - Descripciones y características de cada modelo

3. **Sistema de Herramientas**
   - Framework para ejecutar funciones mediante IA
   - Tool "getWeather" implementado (demo)
   - Validación de inputs con Zod schemas

4. **UI/UX**
   - Diseño dark mode con gradientes
   - Animaciones y transiciones suaves
   - Auto-scroll a últimos mensajes
   - Estados de carga visuales
   - Responsive design

5. **Infraestructura**
   - Configuración de CORS
   - Variables de entorno
   - Builds optimizados con Turbo
   - Hot reload en desarrollo

---

## 📊 Estado Actual

### ✅ Features Existentes

| Feature | Estado | Descripción |
|---------|--------|-------------|
| Chat streaming | ✅ Completo | Respuestas en tiempo real de IA |
| Multi-modelo | ✅ Completo | Soporte para 4 modelos Gemini |
| UI Components | ✅ Completo | 7 componentes shadcn/ui |
| Tool Framework | ⚠️ Parcial | Framework listo, solo 1 tool demo |
| Dark Mode | ✅ Completo | Tema oscuro/claro |
| API REST | ✅ Completo | Endpoint /chat funcional |
| Monorepo | ✅ Completo | Turborepo configurado |
| TypeScript | ✅ Completo | 100% tipado |

### 💪 Puntos Fuertes

1. **Stack Moderno**: Versiones más recientes de frameworks (Next.js 15, React 19, NestJS 11)
2. **Arquitectura Escalable**: Monorepo bien estructurado con separación clara de responsabilidades
3. **Type Safety**: TypeScript estricto en todo el proyecto
4. **UI Profesional**: Componentes de alta calidad basados en Radix UI
5. **AI Integration**: Implementación correcta del Vercel AI SDK con streaming
6. **Developer Experience**: Hot reload, Turbo cache, pnpm workspaces
7. **Accesibilidad**: Componentes accesibles desde la base (Radix UI)
8. **Mantenibilidad**: Código organizado y patrones consistentes

### ⚠️ Áreas de Oportunidad

#### Funcionalidad
- [ ] No hay persistencia de conversaciones (se pierden al recargar)
- [ ] Tool output no se renderiza en UI (código comentado)
- [ ] Solo 1 herramienta demo (getWeather con datos mock)
- [ ] No hay autenticación de usuarios
- [ ] No hay gestión de historial de chats

#### Seguridad
- [ ] API keys en .env (debería usar secrets manager)
- [ ] Sin validación de inputs en backend
- [ ] Sin rate limiting
- [ ] CORS hardcodeado, no dinámico
- [ ] Sin logging de seguridad

#### Testing
- [ ] Cero tests unitarios
- [ ] Sin tests E2E implementados
- [ ] Sin tests de integración
- [ ] Sin coverage reports

#### DevOps
- [ ] Sin Docker configuration
- [ ] Sin CI/CD pipeline
- [ ] Sin deployment scripts
- [ ] Sin monitoring/observability

#### Performance
- [ ] Sin estrategia de caché
- [ ] Sin optimización para conversaciones largas
- [ ] Sin paginación de mensajes

---

## 💡 Ideas de Mejora y Nuevas Features

### 🚀 Features Prioritarias (Corto Plazo - 1-2 semanas)

#### 1. Persistencia de Conversaciones
**Valor**: Crítico - Los usuarios pierden todo al recargar
- Implementar base de datos (Supabase/PostgreSQL)
- Guardar conversaciones con timestamps
- Cargar historial al iniciar sesión
- **Esfuerzo**: 3-5 días

#### 2. Renderizado de Tool Outputs
**Valor**: Alto - Funcionalidad existente pero invisible
- Crear componente `WeatherCard`
- Sistema genérico para renderizar outputs de tools
- Diseño visual atractivo para cada tipo de tool
- **Esfuerzo**: 2-3 días

#### 3. Error Handling & UI States
**Valor**: Alto - Mejora significativa de UX
- Error boundaries en React
- Mensajes de error amigables
- Retry logic para fallos de API
- Toast notifications para feedback
- **Esfuerzo**: 2-3 días

#### 4. Input Validation & Security
**Valor**: Crítico - Seguridad básica
- Validación Zod en todos los endpoints
- Sanitización de inputs
- Rate limiting básico (10 req/min)
- Headers de seguridad (helmet)
- **Esfuerzo**: 3-4 días

#### 5. Environment Variables Validation
**Valor**: Medio - Previene errores de configuración
- Crear `.env.example`
- Validación al startup con Zod
- Errores claros si faltan variables
- **Esfuerzo**: 1 día

### 🎯 Features Avanzadas (Mediano Plazo - 1-2 meses)

#### 6. Autenticación de Usuarios
**Tecnología**: Clerk / NextAuth.js
- Login con Google/GitHub
- Gestión de sesiones
- Protección de rutas
- Perfiles de usuario

#### 7. Gestión de Conversaciones
- Lista de chats en sidebar
- Búsqueda en conversaciones
- Filtros por fecha/modelo
- Exportar conversaciones (PDF/JSON)

#### 8. Marketplace de Tools
- Sistema de plugins para tools
- Librería de tools predefinidos (web search, imágenes, código)
- Activar/desactivar tools por usuario

#### 9. Multimodal Support
- Upload de imágenes para análisis
- Generación de imágenes
- Análisis de documentos (PDF)
- Text-to-speech y speech-to-text

#### 10. Analytics & Insights
- Dashboard de uso
- Métricas de conversaciones
- Costos por modelo

### 🔮 Features Innovadoras (Largo Plazo - 3-6 meses)

#### 11. AI Agents System
- Agentes autónomos especializados
- Workflows de múltiples pasos
- Memoria de largo plazo

#### 12. Knowledge Base & RAG
**Tecnología**: Vector database (Pinecone/Chroma)
- Upload de documentos corporativos
- Búsqueda semántica
- Citations de fuentes

#### 13. Voice & Video Interface
- Conversaciones por voz en tiempo real
- Avatar AI con sincronización labial
- Múltiples idiomas

#### 14. Mobile Apps
**Tecnología**: React Native / Expo
- Apps nativas iOS/Android
- Push notifications
- Offline mode

---

## 🛠 Mejoras Técnicas

### Refactorización Sugerida

#### Backend - DTOs con Validación

```typescript
// apps/backend/src/chat/dto/chat-request.dto.ts
import { IsArray, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ChatRequestDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Object)
  messages: UIMessage[];

  @IsString()
  model: string;
}
```

#### Backend - Logging Service

```typescript
// apps/backend/src/common/logger/logger.service.ts
@Injectable()
export class LoggerService {
  private logger = new Logger(LoggerService.name);

  logRequest(controller: string, method: string, data: any) {
    this.logger.log(`[${controller}] ${method}`, JSON.stringify(data));
  }

  logError(error: Error, context: string) {
    this.logger.error(`[${context}] ${error.message}`, error.stack);
  }
}
```

#### Frontend - Error Handling Hook

```typescript
// apps/web/hooks/use-toast-error.ts
export function useToastError() {
  const { toast } = useToast();

  return useCallback((error: Error | string) => {
    toast({
      title: "Error",
      description: typeof error === 'string' ? error : error.message,
      variant: "destructive",
    });
  }, [toast]);
}
```

### Optimizaciones de Performance

#### 1. React.memo para Componentes Pesados

```typescript
export const MessageBubble = React.memo(({ message }: Props) => {
  // ... renderizado
}, (prev, next) => prev.message.id === next.message.id);
```

#### 2. Virtualización para Listas Largas

```typescript
import { useVirtualizer } from '@tanstack/react-virtual';

const virtualizer = useVirtualizer({
  count: messages.length,
  getScrollElement: () => scrollAreaRef.current,
  estimateSize: () => 100,
});
```

#### 3. Code Splitting por Rutas

```typescript
const ConversationDetail = dynamic(() => import('@/components/conversation-detail'), {
  loading: () => <Skeleton />,
  ssr: false,
});
```

### Testing

```typescript
// apps/backend/src/chat/chat.service.spec.ts
describe('ChatService', () => {
  let service: ChatService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ChatService, ToolsService],
    }).compile();

    service = module.get<ChatService>(ChatService);
  });

  it('should stream chat responses', async () => {
    // ... test implementation
  });
});
```

---

## 📅 Roadmap Sugerido

### Sprint 1: Fundamentos y Seguridad (Semana 1-2)
**Objetivo**: Hacer la app production-ready en aspectos básicos

| Tarea | Prioridad | Esfuerzo |
|-------|-----------|----------|
| Input validation con Zod | 🔴 Alta | 2 días |
| Error boundaries + toast notifications | 🔴 Alta | 2 días |
| Rate limiting básico | 🔴 Alta | 1 día |
| Logging service | 🟡 Media | 2 días |
| .env.example + validation | 🟡 Media | 1 día |
| Tests unitarios críticos | 🟡 Media | 3 días |

**Entregable**: App estable con manejo de errores y seguridad básica

---

### Sprint 2: Persistencia y UX (Semana 3-4)
**Objetivo**: Permitir guardar conversaciones

| Tarea | Prioridad | Esfuerzo |
|-------|-----------|----------|
| Setup PostgreSQL + TypeORM | 🔴 Alta | 2 días |
| Modelos de DB (Conversation, Message) | 🔴 Alta | 1 día |
| CRUD de conversaciones | 🔴 Alta | 3 días |
| UI de lista de conversaciones | 🔴 Alta | 2 días |
| Renderizar tool outputs | 🟡 Media | 2 días |

**Entregable**: Conversaciones guardadas y recuperables

---

### Sprint 3: Autenticación (Semana 5-6)
**Objetivo**: Sistema multiusuario

| Tarea | Prioridad | Esfuerzo |
|-------|-----------|----------|
| Integrar Clerk/NextAuth | 🔴 Alta | 3 días |
| Middleware de autenticación | 🔴 Alta | 2 días |
| Asociar conversaciones a usuarios | 🔴 Alta | 2 días |
| UI de perfil de usuario | 🟡 Media | 2 días |

**Entregable**: Sistema multiusuario funcional

---

### Sprint 4: Tools Marketplace (Semana 7-9)
**Objetivo**: Expandir capacidades con herramientas reales

| Tarea | Prioridad | Esfuerzo |
|-------|-----------|----------|
| Integrar web search (Tavily) | 🔴 Alta | 3 días |
| Tool de generación de imágenes | 🔴 Alta | 3 días |
| Sistema de activación de tools | 🟡 Media | 2 días |
| UI de configuración de tools | 🟡 Media | 3 días |

**Entregable**: 3-5 herramientas productivas

---

### Estimación Total

| Fase | Duración | Esfuerzo |
|------|----------|----------|
| Sprint 1 (Fundamentos) | 2 semanas | 10 días |
| Sprint 2 (Persistencia) | 2 semanas | 11 días |
| Sprint 3 (Autenticación) | 2 semanas | 10 días |
| Sprint 4 (Tools) | 3 semanas | 16 días |
| **TOTAL** | **~9 semanas** | **47 días** |

> **Nota**: Con un equipo de 2-3 desarrolladores, se puede ejecutar en 2-3 meses.

---

## 🚀 Instalación

### Prerequisitos

- Node.js >= 20
- pnpm >= 10.4.1
- Google Generative AI API Key ([obtener aquí](https://makersuite.google.com/app/apikey))

### Setup

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd AI-vercel-sdk
```

2. **Instalar dependencias**
```bash
pnpm install
```

3. **Configurar variables de entorno**

**Backend** (`apps/backend/.env`):
```env
GOOGLE_GENERATIVE_AI_API_KEY=tu_api_key_aqui
FRONTEND_URL=http://localhost:3000
PORT=3001
```

**Frontend** (`apps/web/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. **Iniciar en modo desarrollo**
```bash
pnpm dev
```

Esto iniciará:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### Comandos Disponibles

```bash
# Desarrollo (todos los apps)
pnpm dev

# Build de producción
pnpm build

# Linting
pnpm lint

# Formateo de código
pnpm format

# Tests
pnpm test
```

---

## 🏗 Arquitectura

### Flujo de Datos

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend (Next.js)                  │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │
│  │   Chat UI    │  │  useChat()   │  │ Model Selector  │  │
│  └──────┬───────┘  └──────┬───────┘  └────────┬────────┘  │
│         │                  │                    │            │
│         └──────────────────┴────────────────────┘            │
│                            │                                 │
│                    DefaultChatTransport                      │
│                            │                                 │
└────────────────────────────┼─────────────────────────────────┘
                             │ POST /chat
                             │ { messages, model }
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                      Backend (NestJS)                       │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              ChatController                          │   │
│  └────────────────────┬─────────────────────────────────┘   │
│                       ▼                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              ChatService                             │   │
│  └────────────┬────────────────────────────┬────────────┘   │
│               │                            │                │
│               ▼                            ▼                │
│  ┌─────────────────────┐     ┌──────────────────────┐      │
│  │   ToolsService      │     │   Google Gemini API  │      │
│  └─────────────────────┘     └──────────┬───────────┘      │
│                                          │                  │
└──────────────────────────────────────────┼──────────────────┘
                                           │
                                  Streaming Response
                                           │
                                           ▼
                                   Frontend recibe
                                   y renderiza en UI
```

---

## 📦 Stack Tecnológico

### Core Technologies

| Categoría | Tecnología | Versión | Propósito |
|-----------|-----------|---------|-----------|
| **Monorepo** | Turborepo | 2.5.5 | Build orchestration |
| | pnpm | 10.4.1 | Package manager |
| **Frontend** | Next.js | 15.4.5 | React framework |
| | React | 19.1.1 | UI library |
| | TypeScript | 5.9.2 | Type safety |
| | Tailwind CSS | 4.1.11 | Styling |
| **Backend** | NestJS | 11.0.1 | Server framework |
| | TypeScript | 5.7.3 | Type safety |
| **AI/ML** | Vercel AI SDK | 5.0.102 | AI integration |
| | @ai-sdk/google | 2.0.44 | Google Gemini |
| **UI Components** | shadcn/ui | Latest | Component library |
| | Radix UI | 1.x | Headless components |
| **Validation** | Zod | 3.25.76 | Schema validation |

### Modelos de IA Soportados

| Modelo | Capacidades | Contexto | Mejor para |
|--------|-------------|----------|------------|
| **Gemini 2.0 Flash** | Experimental | 1M tokens | Nuevas features |
| **Gemini 1.5 Pro** | Más capaz | 2M tokens | Tareas complejas |
| **Gemini 1.5 Flash** | Rápido | 1M tokens | Uso general |
| **Gemini 1.5 Flash 8B** | Ligero | 1M tokens | Respuestas rápidas |

---

## 📄 Licencia

MIT

---

## 🤝 Contribuir

Contributions are welcome! Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

---

<div align="center">

**Construido con ❤️ usando Next.js, NestJS y Google Gemini**

[⬆ Volver arriba](#ai-chat-platform---full-stack-monorepo)

</div>
