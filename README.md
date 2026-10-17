# Portafolio personal y API de productos

Este repositorio contiene dos aplicaciones:

- **Portafolio web:** sitio personal con información profesional, proyectos, estudios, certificados y formas de contacto.

## Tecnologías
- React 19 y React DOM
- Tailwind CSS 4
- GSAP y ScrollTrigger para animaciones

### API

- Node.js y Express
- PostgreSQL mediante `pg`
- `dotenv` para la configuración local
- `cors` para permitir solicitudes entre orígenes

## Requisitos

- Node.js y npm
- PostgreSQL, si se desea ejecutar la API

## Instalación y ejecución

### Portafolio web

Desde la carpeta raíz del repositorio:

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador. La aplicación se recarga al guardar cambios.



## Contenido del portafolio

- **Inicio:** presentación y áreas de interés profesional.
- **Sobre mí:** perfil, objetivos y una animación de fuego en canvas.
- **Proyectos:** tarjetas con enlaces a repositorios de GitHub.
- **Estudios y certificados:** trayectoria académica y carrusel de certificados.
- **Contacto:** correo, GitHub, LinkedIn y enlace para descargar el CV. Para que la descarga funcione

## Comandos disponibles

Ejecuta estos comandos desde la raíz del repositorio:

```bash
npm start      # Inicia el portafolio en modo desarrollo
npm test       # Ejecuta las pruebas de Create React App
npm run build  # Genera la versión de producción en build/
```

El servidor tiene su propio comando `npm start`, que se ejecuta desde la carpeta `server`.

## Estructura del proyecto

```text
.
├── public/       # HTML e imágenes públicas del portafolio
├── src/          # Componentes, estilos y contenido de React
├── server/       # API Express, conexión a PostgreSQL y configuración de ejemplo
├── build/        # Salida generada por npm run build
└── package.json  # Dependencias y comandos del portafolio
```
