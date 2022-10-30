Proyecto Ecommerce
Tecnologías

    [ReactJS] - FrontEnd
    [FireBase] - BackEnd

Librerías

    [react-router-dom] - Navegacion
    [firebase] - BackEnd con datos de los items a comprar.

Estructura
Carpeta 	Descripcion
components 	Ubicacion de todos los componentes de la aplicacion, los mas importantes
context 	se crea el cartcontext
Router 	Navegacion de la app
Services 	Se configura el firebase como base de datos bakend
hooks 	Custom Hooks
Instalación

1-Clonar Repositorio

 git clone Link del Repositorio

2-Instalar dependencias

 npm install

3-Configuración de firebase

 copiar las credenciales del proyecto firebase en la raiz del proyecto con extension .env

4-Si no tiene acesso a las credenciales, construir su propio proyecto en firebase

 La estructura del proyecto Es:
 
 1 Tabla products con las siguientes propiedades:
    Id autogenerado,
    category: text,
    descripcion: text,
    img: text,
    name:text,
    price:number,
    stock:number

5 - Ejecutar el proyecto

 npm start