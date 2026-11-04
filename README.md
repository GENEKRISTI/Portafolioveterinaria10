# Clínica Veterinaria GENESIS

Sitio web académico para una clínica veterinaria. El nombre «GENESIS» aparece como identificador junto a «Clínica Veterinaria», con una estética morada vintage de inspiración victoriana.

## Vista general

- Diseño adaptable a computadoras, tabletas y celulares.
- Navegación fija con enlaces a las secciones.
- Portada, introducción y servicios.
- Perfiles del equipo veterinario.
- Carrusel de diez opiniones de demostración (hasta cuatro tarjetas visibles).
- Formulario con validación y preparación de correo mediante `mailto:`.
- Enlaces demostrativos a WhatsApp y redes sociales.
- Pie de página con información general.

## Tecnologías

- HTML5: estructura semántica.
- CSS3: diseño, variables, animaciones y adaptación responsive.
- JavaScript: carrusel, validación del formulario y año automático.
- Bootstrap 5.3: cuadrícula, navegación móvil y modal.
- Font Awesome 6: iconos.
- Google Fonts: tipografías Cormorant Garamond y Montserrat.

## Estructura del proyecto

```text
GENESIS_Veterinaria/
├── index.html
├── style.css
├── script.js
├── README.md
└── DOCUMENTACION.md
```

## Ejecutar localmente

1. Descarga o clona el repositorio.
2. Abre la carpeta en Visual Studio Code.
3. Abre `index.html` directamente en el navegador, o instala la extensión **Live Server**.
4. Si utilizas Live Server, haz clic derecho sobre `index.html` y selecciona **Open with Live Server**.

La página utiliza recursos externos (Bootstrap, Font Awesome, Google Fonts e imágenes), por lo que es necesaria una conexión a Internet para cargarlos.

## Personalización antes de publicar

Este proyecto es una demostración académica. Antes de utilizarlo como página real:

- Sustituye el teléfono ficticio `+1 (809) 555-0100` y el enlace `wa.me/18095550100` por un número real autorizado.
- Cambia nombres, fotografías, testimonios, dirección y horario por información real y autorizada.
- En el formulario, `mailto:` abre el programa de correo del visitante y deja el mensaje preparado; no garantiza el envío ni almacena formularios. Para recibir mensajes directamente en un negocio, integra un servicio de formularios o un backend y configura su destino.
- Revisa que las imágenes externas sigan disponibles y que tengas permiso para utilizarlas.
- Actualiza los enlaces de redes sociales para que apunten a los perfiles correctos.

## Publicar en GitHub Pages

1. Crea una cuenta en [GitHub](https://github.com/).
2. Selecciona **New repository**.
3. Escribe `genesis-veterinaria` como nombre y elige público o privado según las instrucciones de tu clase. Para Pages, revisa las condiciones de publicación de repositorios privados de tu plan.
4. Crea el repositorio.
5. En la página del repositorio, selecciona **Add file → Upload files**.
6. Arrastra los archivos del proyecto (`index.html`, `style.css`, `script.js`, `README.md`, `DOCUMENTACION.md`) al área de carga.
7. Escribe un mensaje de confirmación y pulsa **Commit changes**.
8. Ve a **Settings → Pages**.
9. En **Build and deployment**, selecciona **Deploy from a branch**.
10. Elige la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
11. Espera a que GitHub Pages publique el sitio. La dirección aparecerá en la sección Pages y tendrá una forma similar a `https://TU-USUARIO.github.io/genesis-veterinaria/`.

## Publicar en Vercel

1. Entra en [Vercel](https://vercel.com/) y crea una cuenta.
2. Selecciona continuar con GitHub y autoriza la conexión.
3. En el panel, pulsa **Add New → Project**.
4. Importa el repositorio `genesis-veterinaria`.
5. Para este proyecto estático, no necesitas framework ni comando de compilación. Deja el preset como **Other** y el comando de build vacío.
6. Si aparece la opción **Output Directory**, déjala vacía o utiliza `.` si la interfaz exige un valor.
7. Pulsa **Deploy**.
8. Cuando termine, Vercel mostrará la URL pública del proyecto. Puedes abrirla y compartirla.
9. Cada actualización que subas a la rama conectada de GitHub podrá generar un nuevo despliegue automáticamente.

## Licencia y uso

Proyecto de práctica académica. Verifica los derechos de uso de las imágenes y recursos de terceros antes de un uso comercial.
