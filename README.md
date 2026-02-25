# Job Application Portal

Frontend para postulación a posiciones laborales. Permite visualizar vacantes disponibles y enviar aplicaciones vinculando el repositorio de GitHub del candidato.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **ESLint** (linting)

## Requisitos

- Node.js 18+
- npm o pnpm

## Instalación

```bash
git clone https://github.com/galoss88/app-test.git
cd app-test
npm install
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm run preview` | Sirve el build localmente |
| `npm run lint` | Ejecuta ESLint |

## Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables (Card, Button, Input, Loading, etc.)
├── pages/          # Vistas y páginas
│   └── positions/  # Listado y cards de posiciones
├── hooks/          # Custom hooks (useGetPositions, useApplyPosition)
├── services/       # Llamadas a la API
├── types/          # Definiciones TypeScript
└── config/         # Constantes y configuración
```

## Funcionalidad

- Listado de posiciones disponibles desde la API
- Formulario por posición para ingresar la URL del repositorio de GitHub
- Envío de postulación asociando candidato, posición y repo
- Estados de carga, error y éxito con feedback visual
