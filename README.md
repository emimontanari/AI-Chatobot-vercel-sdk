# AI Vercel SDK - Monorepo Full Stack

Monorepo moderno que combina Next.js con NestJS, configurado con Turborepo, pnpm workspaces y shadcn/ui para desarrollo full stack escalable.

## 📋 Estructura del Proyecto

```
AI-vercel-sdk/
├── apps/
│   ├── web/              # App Frontend (Next.js 15)
│   └── backend/          # App Backend (NestJS)
├── packages/
│   ├── ui/               # Componentes UI compartidos (shadcn/ui)
│   ├── eslint-config/    # Configuración ESLint compartida
│   └── typescript-config/ # Configuración TypeScript compartida
├── turbo.json           # Configuración de Turborepo
└── pnpm-workspace.yaml  # Configuración de pnpm workspaces
```

## 🚀 Stack Tecnológico

### Frontend (apps/web)
- **Framework**: Next.js 15.4.5 con App Router
- **UI**: React 19.1.1
- **Estilos**: Tailwind CSS 4.1.11
- **Componentes**: shadcn/ui + Radix UI
- **Temas**: next-themes para modo oscuro/claro
- **Build**: Turbopack para desarrollo rápido
- **TypeScript**: 5.9.2

### Backend (apps/backend)
- **Framework**: NestJS 11
- **Runtime**: Node.js >=20
- **Testing**: Jest 30
- **Puerto**: 3001 (configurable via PORT env)

### Packages Compartidos
- **@workspace/ui**: Componentes UI reutilizables con shadcn/ui, Radix UI y Tailwind
- **@workspace/eslint-config**: Configuración de linting compartida
- **@workspace/typescript-config**: Configuración de TypeScript compartida

### Herramientas de Desarrollo
- **Monorepo**: Turborepo 2.5.5
- **Package Manager**: pnpm 10.4.1
- **Linting**: ESLint 9
- **Formatting**: Prettier 3.6.2

## 📦 Requisitos Previos

- Node.js >= 20
- pnpm 10.4.1 o superior

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd AI-vercel-sdk

# Instalar dependencias
pnpm install
```

## 🏃 Comandos Disponibles

### Desarrollo

```bash
# Iniciar todas las apps en modo desarrollo
pnpm dev

# Iniciar solo el frontend
pnpm dev --filter=web

# Iniciar solo el backend
pnpm dev --filter=backend
```

### Build

```bash
# Build de todas las apps
pnpm build

# Build de una app específica
pnpm build --filter=web
pnpm build --filter=backend
```

### Linting

```bash
# Ejecutar linter en todo el monorepo
pnpm lint

# Formatear código
pnpm format
```

### Testing (Backend)

```bash
cd apps/backend

# Tests unitarios
pnpm test

# Tests en modo watch
pnpm test:watch

# Tests con coverage
pnpm test:cov

# Tests e2e
pnpm test:e2e
```

## 🎨 Trabajando con Componentes UI

### Inicializar shadcn/ui

```bash
pnpm dlx shadcn@latest init
```

### Agregar Componentes

Para agregar nuevos componentes de shadcn/ui al proyecto:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

Esto agregará los componentes en `packages/ui/src/components/`.

### Usar Componentes

Los componentes se importan desde el workspace `@workspace/ui`:

```tsx
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return <Button>Click me</Button>
}
```

## 🌐 URLs de Desarrollo

Cuando ejecutes `pnpm dev`, las aplicaciones estarán disponibles en:

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001

## 📁 Estructura de Apps

### Web (apps/web)
```
web/
├── app/                 # App Router de Next.js
│   ├── page.tsx        # Página principal
│   └── layout.tsx      # Layout raíz
├── components/         # Componentes específicos de la app
├── hooks/              # Custom hooks
├── lib/                # Utilidades
└── package.json
```

### Backend (apps/backend)
```
backend/
├── src/
│   ├── app.module.ts      # Módulo principal
│   ├── app.controller.ts  # Controlador principal
│   ├── app.service.ts     # Servicio principal
│   └── main.ts            # Entry point
├── test/                  # Tests e2e
└── package.json
```

### UI Package (packages/ui)
```
ui/
├── src/
│   ├── components/     # Componentes UI (shadcn/ui)
│   ├── hooks/          # Hooks compartidos
│   ├── lib/            # Utilidades (cn, etc.)
│   └── styles/         # Estilos globales
└── package.json
```

## 🔧 Configuración

### Tailwind CSS

La configuración de Tailwind está lista para usar componentes del package `ui`. Los archivos `tailwind.config.ts` y `globals.css` están configurados correctamente.

### TypeScript

El proyecto usa configuraciones TypeScript compartidas desde `@workspace/typescript-config` con soporte para paths aliases y strict mode.

### ESLint

Configuración de ESLint compartida desde `@workspace/eslint-config` con reglas para Next.js, React y NestJS.

## 🚢 Producción

### Build para Producción

```bash
# Build de todas las apps
pnpm build

# Iniciar frontend en producción
cd apps/web
pnpm start

# Iniciar backend en producción
cd apps/backend
pnpm start:prod
```

## 🤝 Contribuir

1. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
2. Haz commit de tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
3. Push a la rama (`git push origin feature/nueva-funcionalidad`)
4. Abre un Pull Request

## 📝 Notas Adicionales

- El monorepo usa **pnpm workspaces** para gestionar dependencias compartidas
- **Turborepo** optimiza los builds y caching de tareas
- Los componentes UI siguen el patrón de **shadcn/ui** para máxima customización
- El backend usa **NestJS** con arquitectura modular y escalable

## 📄 Licencia

UNLICENSED - Proyecto privado
