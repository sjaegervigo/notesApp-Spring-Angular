NotesApp - Spring Boot & Angular
Una aplicación web completa (Full-Stack) diseñada para la gestión de notas personales. Este proyecto demuestra la integración de un backend basado en microservicios/REST con un frontend moderno y reactivo.

🚀 Características
CRUD Completo: Crear, leer, actualizar y eliminar notas.

Interfaz Responsiva: Diseño adaptado a diferentes dispositivos gracias a Bootstrap.

API REST: Comunicación fluida entre el cliente y el servidor mediante JSON.

Persistencia de Datos: Gestión eficiente de la base de datos mediante Spring Data JPA.

🛠️ Tecnologías Utilizadas
Backend
Java 17+

Spring Boot: Framework principal.

Spring Data JPA: Para la capa de persistencia.

H2 Database / MySQL: (Dependiendo de tu configuración de application.properties).

Maven: Gestor de dependencias.

Frontend
Angular: Framework para la interfaz de usuario.

TypeScript: Lenguaje de programación.

Bootstrap: Para el diseño y estilos CSS.

Node.js & NPM: Entorno de ejecución y gestión de paquetes.

📋 Requisitos Previos
Antes de empezar, asegúrate de tener instalado:

JDK 17 o superior.

Node.js (versión 16 o superior).

Angular CLI (npm install -g @angular/cli).

Maven.

🔧 Instalación y Configuración
1. Clonar el repositorio
Bash

git clone https://github.com/sjaegervigo/notesApp-Spring-Angular.git
cd notesApp-Spring-Angular
2. Configurar el Backend
Navega a la carpeta del backend (donde esté el archivo pom.xml).

Ejecuta el comando para descargar dependencias y arrancar la aplicación:

Bash

mvn spring-boot:run
El servidor estará disponible en: http://localhost:8080

3. Configurar el Frontend
Abre una nueva terminal y navega a la carpeta del frontend.

Instala las dependencias:

Bash

npm install
Inicia el servidor de desarrollo:

Bash

ng serve
La aplicación será accesible en: http://localhost:4200

📁 Estructura del Proyecto
/backend: Contiene la lógica de negocio, controladores REST y modelos de datos.

/frontend: Contiene los componentes de Angular, servicios y estilos.
