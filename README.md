# NotesApp - Spring Boot & Angular

Una aplicación web Full-Stack diseñada para la gestión de notas personales. Este proyecto integra un backend robusto basado en una API REST con Spring Boot y un frontend moderno y reactivo desarrollado en Angular.

## 🚀 Características

* **Operaciones CRUD:** Creación, lectura, actualización y eliminación de notas en tiempo real.
* **Interfaz Responsiva:** Diseño adaptable a móviles y escritorio utilizando Bootstrap.
* **Consumo de API REST:** Comunicación asíncrona entre el cliente y el servidor.
* **Persistencia de Datos:** Gestión de base de datos mediante Spring Data JPA.

## 🛠️ Tecnologías Utilizadas

### Backend
* **Java 17**
* **Spring Boot:** Framework base para el backend.
* **Spring Data JPA:** Para la interacción con la base de datos.
* **H2 / MySQL:** Persistencia de datos.
* **Maven:** Gestión de dependencias y construcción del proyecto.

### Frontend
* **Angular:** Framework para el desarrollo de la interfaz.
* **TypeScript:** Superconjunto de JavaScript para un código más robusto.
* **Bootstrap:** Framework de estilos CSS.
* **NPM:** Gestor de paquetes.

## 📋 Requisitos Previos

Asegúrate de tener instalados los siguientes componentes:
* **Java Development Kit (JDK) 17** o superior.
* **Node.js** (versión LTS recomendada).
* **Angular CLI** (`npm install -g @angular/cli`).
* **Maven** (opcional, si usas el wrapper `./mvnw` no es necesario).

## 🔧 Instalación y Configuración

## 🚀 Cómo ejecutar la aplicación

**Importante:** Asegúrate de tener instalados y en ejecución Docker y Docker Compose.

1. **Clona el repositorio**

```bash
git clone [https://github.com/sjaegervigo/notesApp-Spring-Angular.git](https://github.com/sjaegervigo/notesApp-Spring-Angular.git)
cd notesApp-Spring-Angular
```
2. **Otorga permisos de ejecución al script (solo una vez)**

```bash
chmod +x run.sh
```
3. **Inicia la aplicación**

```bash
./run.sh
```

El script se encargará de:

* Construir e iniciar el backend, el frontend y la base de datos.
* Crear el esquema de la base de datos necesario automáticamente.
  

📁 Estructura del Repositorio

* /backend: Código fuente de la API, modelos, repositorios y servicios de Spring Boot.

* /frontend: Componentes, servicios de Angular y archivos de configuración de estilos.

Desarrollado por sjaegervigo
