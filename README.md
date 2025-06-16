Aplicación web interactiva inspirada en el universo de Harry Potter, que permite explorar personajes, libros y hechizos. Desarrollada con React y React Router, utiliza un contexto global para manejar la búsqueda de información en distintas secciones.

🧩 Tecnologías Utilizadas
React JS – Biblioteca principal para construir la interfaz de usuario.

React Router DOM – Para navegación entre rutas sin recarga.

Context API – Para compartir el estado de búsqueda entre componentes.

Tailwind – Estilos personalizados.

Vite – Para un entorno de desarrollo rápido.

📁 Estructura de Carpetas
css
Copiar
Editar
src/
├── App.jsx
├── assets/
│   ├── components/
│   │   ├── Home/
│   │   ├── Libros/
│   │   ├── Personajes/
│   │   ├── Hechizos/
│   │   ├── Resultados.jsx
│   │   └── Context/
│   │       └── CartContext.jsx
│   └── Navbar/
│       └── Navbar.jsx
└── App.css

🚀 Cómo ejecutar el proyecto
1. Clonar el repositorio

git clone https://github.com/Naty-Arevalo/app-Harry-Potter.git
(cd nombre-del-repo)


2. Instalar dependencias
npm install

3. Iniciar servidor de desarrollo
npm run dev


🧭 Navegación
/ – Página principal
/personajes – Muestra los personajes del universo
/libros – Lista de libros
/hechizos – Hechizos mágicos
/resultados – Página con resultados filtrados según la búsqueda

🌐 Estado global
Se utiliza un Provider (SearchProvider) para compartir el término de búsqueda entre las diferentes secciones y mostrar resultados relevantes.