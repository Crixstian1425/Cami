# Página de Recuerdos

Una experiencia web íntima y elegante, hecha con cariño. Frontend únicamente, sin backend.

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del proyecto

```
src/
├── app/
│   ├── page.tsx              # Pantalla de bienvenida (/)
│   └── (site)/               # Páginas del sitio
│       ├── layout.tsx        # Nav + footer compartidos
│       ├── inicio/page.tsx   # /inicio
│       ├── galeria/page.tsx  # /galeria
│       ├── carta/page.tsx    # /carta
│       └── playlist/page.tsx # /playlist
├── components/
│   ├── Navigation/
│   ├── WelcomeScreen/
│   ├── sections/
│   ├── layout/
│   └── ui/
├── data/
│   ├── gallery.ts
│   ├── playlist.ts
│   └── navigation.ts
└── hooks/
```

## Qué personalizar

### 1. Galería (`src/data/gallery.ts`)

Reemplaza los placeholders con tus fotos y video:

```typescript
{
  id: "1",
  type: "video", // o "image"
  title: "Tu título",
  description: "Tu descripción",
  src: "/videos/mi-video.mp4", // o "/images/foto.jpg"
  size: "lg", // "sm" | "md" | "lg"
}
```

### 2. Carta (`src/components/sections/CartaSection.tsx`)

Edita el texto dentro del componente. Busca el comentario `REEMPLAZA ESTE TEXTO CON TU CARTA`.

### 3. Playlist (`src/data/playlist.ts`)

Actualiza título, artista, descripción y portada de cada canción.

### 4. Texto de bienvenida (`src/components/sections/InicioSection.tsx`)

Personaliza el mensaje de la sección Inicio.

### 5. Colores y tipografías (`src/app/globals.css`)

Variables CSS al inicio del archivo para ajustar la paleta.

## Tecnologías

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Build para producción

```bash
npm run build
npm start
```

Para desplegar en Vercel, Netlify u otro hosting estático, conecta el repositorio y listo.
