🧙‍♀️ Enciclopedia Mágica
Aplicación web desarrollada con React JS, que permite explorar personajes, hechizos y libros del universo de Harry Potter. Utiliza React Router DOM para navegación entre páginas, Context API para manejar la búsqueda global, y consume datos en tiempo real desde una API externa pública.

El diseño de la interfaz está realizado con Tailwind CSS, logrando una experiencia moderna, responsiva y accesible.

🧩 Tecnologías Utilizadas
React JS – Para crear la interfaz dinámica y modular.

React Router DOM – Navegación entre rutas sin recarga.

Context API – Para manejar el estado global de búsqueda.

API externa – Toda la información proviene de harry-potter-api.onrender.com.

Tailwind CSS – Para un diseño rápido, limpio y responsivo.

🌐 API Externa
Esta aplicación consume datos de la siguiente API externa:

🔸 https://harry-potter-api.onrender.com/personajes
Devuelve un array de personajes con atributos como nombre, casa, imagen, etc.

🔸 https://harry-potter-api.onrender.com/hechizos
Devuelve una lista de hechizos con su nombre y efecto.

🔸 https://harry-potter-api.onrender.com/libros
Devuelve un listado de libros con título, autor, portada e información adicional.

📁 Estructura de Carpetas (resumen)
pgsql
Copiar
Editar
src/
├── App.jsx
├── assets/
│   ├── components/
│   │   ├── Home/
│   │   ├── Personajes/
│   │   ├── Hechizos/
│   │   ├── Libros/
│   │   ├── Resultados.jsx
│   │   └── Context/
│   │       └── CartContext.jsx
│   ├── Navbar/
├── index.css  <-- incluye Tailwind

🚀 Cómo ejecutar el proyecto
1. Clonar el repositorio

git clone https://github.com/Naty-Arevalo/app-Harry-Potter.git

2. Instalar dependencias
npm install
3. Iniciar servidor de desarrollo
npm run dev

🧭 Navegación
/ – Página principal

/personajes – Lista de personajes desde API

/hechizos – Lista de hechizos desde API

/libros – Lista de libros desde API

/resultados – Resultados filtrados desde búsqueda

🔍 Sistema de Búsqueda Global
Se utiliza un SearchProvider basado en React Context que permite compartir el término de búsqueda entre todas las vistas. Al buscar desde cualquier sección, los resultados aparecen en la ruta /resultados, filtrados dinámicamente.


