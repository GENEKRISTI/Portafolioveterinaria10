PROYECTO E-COMMERCE VETERINARIA

URL DE REPOSITORIOt https://genekristi.github.io/Portafolioveterinaria10/

URL GITHUB PAGES: GENEKRISTI/Portafolio-veterinaria
 
  URL DE VERCEL: portafolioveterinaria10.vercel.app

  
DOCUMENTACIÓN DEL PROYECTO — CLÍNICA VETERINARIA GENESIS
Desarrollo y publicación del sitio web
Título del proyecto: Clínica Veterinaria GENESIS  
Tipo de proyecto: sitio web estático  
Autora/identificación visual:Genesis  
Tecnologías:HTML5, CSS3, JavaScript, Bootstrap, Font Awesome

 1. Introducción
Este proyecto consiste en desarrollar una página web para una clínica veterinaria ficticia llamada Genesis. Su propósito es presentar servicios, mostrar un equipo de profesionales, compartir opiniones de clientes y facilitar el contacto con visitantes.

La identidad visual utiliza tonos morados, lavanda y dorados, junto con ornamentos florales y tipografías clásicas que evocan una estética vintage y victoriana. La página se adapta a diferentes tamaños de pantalla.

2. Objetivos
- Aplicar los fundamentos del desarrollo web.
- Separar la estructura, el diseño y el comportamiento en archivos independientes.
- Crear una interfaz clara, atractiva y adaptable.
- Incorporar interacciones básicas con JavaScript.
- Aprender a publicar un sitio estático mediante GitHub Pages y Vercel.
3. Fundamentos del desarrollo web
El desarrollo web es el proceso de crear sitios y aplicaciones que pueden consultarse mediante un navegador. En una página web, distintas tecnologías trabajan juntas:

 HTML – estructura
HTML significa *HyperText Markup Language*. Define el contenido y la organización de la página mediante elementos como encabezados, párrafos, imágenes, enlaces, formularios y secciones. En Genesis, `index.html` contiene toda la estructura visible.

CSS – presentación
CSS significa *Cascading Style Sheets*. Controla colores, tamaños, espacios, tipografías, distribución y adaptación a pantallas. En Genesis, `style.css` define la paleta morada, los detalles victorianos, las tarjetas, las animaciones y las reglas responsive.

JavaScript – interacción
JavaScript permite que una página responda a las acciones de las personas. En este proyecto controla el carrusel de testimonios, valida el formulario, prepara un correo y actualiza el año del footer.

 Bootstrap – herramientas de interfaz
Bootstrap es un framework CSS que facilita la creación de interfaces adaptables. Se utiliza mediante CDN para la cuadrícula, el menú móvil y la ventana modal.

Font Awesome – iconos
Font Awesome ofrece una biblioteca de iconos. En Genesis se utiliza para representar servicios, contacto y redes sociales.

Nota histórica: HTML apareció en los primeros años de la Web (1991); CSS se propuso en 1994 y se estandarizó después; JavaScript fue creado en 1995. Bootstrap se publicó en 2011 y Font Awesome en 2012. Esta secuencia ayuda a ubicar su evolución, aunque cada tecnología cumple una función diferente.
4. Organización de archivos
El proyecto se compone de cinco archivos principales:
| Archivo | Función |
|---|---|
| index.html | Contenido y estructura de la página |
| style.css | Apariencia, colores y diseño adaptable |
|script.js| Carrusel, validación e interacciones |
| README.md| Resumen, instalación y publicación |
| DOCUMENTACION.md| Manual explicativo del proyecto |

Los archivos deben estar dentro de la misma carpeta para que las rutas style.css y script.js funcionen correctamente.

 5. Desarrollo paso a paso
 Paso 1. Crear la estructura HTML
En index.html se define el idioma, los metadatos, el título y los enlaces a las hojas de estilo externas. El cuerpo se divide en secciones semánticas:
1. Navegación: enlaces a las áreas principales.
2. Inicio: presentación de Genesis.
3. Introducción: propósito de la clínica.
4. Servicios: consulta general, cirugías y peluquería.
5. Equipo: tres perfiles ilustrativos.
6. Testimonios: espacio para diez opiniones.
7. Contacto: información demostrativa y formulario.
8. Footer: redes sociales, ubicación general y horario ilustrativo.
Bootstrap y Font Awesome se incorporan mediante CDN. Esto permite utilizar sus recursos sin descargar sus archivos al proyecto




<img width="600" height="338" alt="image" src="https://github.com/user-attachments/assets/57a982aa-862e-4c45-9aa9-851bde98bec5" />

Paso 2. Aplicar los estilos CSS
En style.css se crean variables para mantener una paleta consistente. Por ejemplo:
css
:root {
  --plum: #39234f;
  --deep-plum: #281638;
  --purple: #684b7e;
  --lavender: #eee6f2;
  --gold: #c5a46d;
}
Después se diseñan la portada, las tarjetas, los perfiles, el carrusel y el formulario. Las imágenes utilizan `object-fit: cover` para conservar una presentación ordenada.
Las media queries modifican la distribución en pantallas pequeñas. Por ejemplo, el carrusel muestra cuatro tarjetas en pantallas grandes, tres en tabletas, dos en pantallas medianas pequeñas y una en móviles.


<img width="569" height="320" alt="image" src="https://github.com/user-attachments/assets/a1cb7775-05f3-4a67-9aa4-c51cbb47a4ef" />



 Paso 3. Programar las funciones JavaScript
En script.js se encuentra la lógica de interacción:
- Se define una lista de diez testimonios de demostración.
- Se generan sus tarjetas dentro del carrusel.
- Los botones anterior y siguiente desplazan las tarjetas.
- El número de tarjetas visibles se adapta al ancho de pantalla.
- El formulario comprueba nombre, correo y mensaje.
- Si los datos son válidos, se construye un enlace mailto: para abrir la aplicación de correo.
- Se muestra una ventana modal informativa.
- El año del footer se actualiza automáticamente.
Importante sobre el formulario: el navegador no puede confirmar de manera fiable que una aplicación externa de correo se abrió ni que el mensaje se envió. El modal indica que se preparó el correo, no que se recibió. Para recibir formularios directamente se necesita conectar un servicio de formularios o desarrollar un backend.




<img width="577" height="324" alt="image" src="https://github.com/user-attachments/assets/fbb65812-b2f0-4566-bd29-40457d18498c" />




6. Cómo abrir el proyecto en Visual Studio Code
1. Instala Visual Studio Code desde [https://code.visualstudio.com/](https://code.visualstudio.com/).
2. Crea una carpeta llamada GENESIS_Veterinaria.
3. Abre Visual Studio Code.
4. Selecciona File → Open Folder y elige la carpeta.
5. Crea los archivos index.html, style.css, script.js, README.md y DOCUMENTACION.md.
6. Copia el contenido correspondiente en cada archivo y guarda los cambios.
7. Abre index.html en el navegador para comprobar la página.

Uso de Live Server (opcional)
1. En Visual Studio Code, abre la sección Extensions.
2. Busca Live Server.
3. Instala la extensión de Ritwick Dey.
4. Abre `index.html`.
5. Haz clic derecho y selecciona Open with Live Server.
6. Se abrirá el sitio en el navegador. Al guardar cambios, el navegador se actualizará


<img width="459" height="258" alt="image" src="https://github.com/user-attachments/assets/69fd15a9-27f1-4d54-936e-ee72b522b7ad" />


<img width="539" height="303" alt="image" src="https://github.com/user-attachments/assets/af86e74a-c680-4440-9803-668dab93631f" />



7. Publicación en GitHub
GitHub permite alojar repositorios de código y mantener un historial de cambios.
1. Visita [https://github.com/](https://github.com/) y crea una cuenta.
2. Confirma el correo y accede.
3. Pulsa New repository.
4. Escribe genesis-veterinaria como nombre.
5. Selecciona la visibilidad que corresponda a las instrucciones académicas.
6. Pulsa Create repository.
7. En el repositorio, selecciona Add file → Upload files.
8. Arrastra los cinco archivos del proyecto a la página.
9. Pulsa Commit changes para guardar

    <img width="520" height="292" alt="image" src="https://github.com/user-attachments/assets/3d28add0-8811-48bf-84df-d2f52ad893c3" />


<img width="527" height="296" alt="image" src="https://github.com/user-attachments/assets/a800347a-cddc-413a-8809-10d378b540ce" />


Activar GitHub Pages
1. Dentro del repositorio, entra en Settings.
2. Busca Pages en el menú lateral.
3. En Build and deployment, selecciona Deploy from a branch.
4. Selecciona main como rama y / (root)como carpeta.
5. Pulsa Save.
6. Espera la publicación. GitHub mostrará el enlace del sitio en esa misma sección.

La dirección suele tener esta forma:
https://TU-USUARIO.github.io/portafolio-veterinaria/
El nombre de usuario y el nombre del repositorio deben sustituirse por los reales


<img width="664" height="373" alt="image" src="https://github.com/user-attachments/assets/a34ce66a-f578-4f55-82ed-0b319cc7833a" />


8. Publicación en Vercel
Vercel permite desplegar proyectos web y conectarlos con repositorios de GitHub.
1. Entra en [https://vercel.com/](https://vercel.com/).
2. Crea una cuenta o selecciona Continue with GitHub.
3. Autoriza el acceso solicitado.
4. En el panel, pulsa Add New → Project.
5. Busca el repositorio genesis-veterinaria y selecciona Import.
6. Como es una página estática, utiliza la configuración Other y no agregues comando de compilación.
7. Pulsa Deploy.



<img width="628" height="353" alt="image" src="https://github.com/user-attachments/assets/7840cf28-c277-41cf-9898-12c71653b8dc" />



<img width="580" height="326" alt="image" src="https://github.com/user-attachments/assets/cb254ac4-2b50-4fab-856f-324145ba41a7" />

8. Espera a que finalice el proceso.
9. Vercel mostrará un enlace público con el que podrás abrir y compartir el sitio.
Cuando el repositorio está conectado, los cambios que se suban a la rama configurada pueden iniciar nuevos despliegues automáticamente.


11. Conclusión
La creación de Genesis permitió comprender cómo se combinan HTML, CSS y JavaScript para desarrollar una página web funcional. También permitió practicar el uso de herramientas como Bootstrap y Font Awesome, que facilitan la construcción de interfaces modernas.
La experiencia demuestra que aprender desarrollo web no consiste solamente en escribir código, sino también en organizar ideas, resolver problemas, probar resultados y mejorar continuamente. La inteligencia artificial puede servir como apoyo durante ese proceso, pero es importante revisar, comprender y probar lo que se genera.

Este proyecto representa una oportunidad para seguir desarrollando habilidades digitales y aprovechar los recursos disponibles para aprender nuevas tecnologías. Con práctica y curiosidad, es posible transformar una idea en un proyecto que otras personas puedan visitar desde cualquier lugar.



<img width="463" height="318" alt="image" src="https://github.com/user-attachments/assets/ee1510b2-667f-445c-8d0e-fba96ab2da2f" />


