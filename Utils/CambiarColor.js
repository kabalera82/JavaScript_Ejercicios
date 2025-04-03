// Variable para rastrear el estado de los colores
let coloresCambiados = false;

function cambiaColor() {
    // Accedemos al elemento :root
    const root = document.documentElement;
    if (!coloresCambiados) {
        // Generamos colores aleatorios
        /*
        const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

        // Cambiamos los valores de las variables CSS a colores aleatorios
        root.style.setProperty('--background-color', randomColor()); // Fondo aleatorio
        root.style.setProperty('--text-color', randomColor()); // Texto aleatorio
        root.style.setProperty('--title-color', randomColor()); // Títulos aleatorios
        root.style.setProperty('--link-color', randomColor()); // Enlaces aleatorios
        root.style.setProperty('--link-hover-color', randomColor()); // Enlaces al pasar el ratón aleatorios
        root.style.setProperty('--border-color', randomColor()); // Bordes aleatorios
        */
        root.style.setProperty('--background-color', '#002b36'); // Fondo azul oscuro (estilo terminal retro)
        root.style.setProperty('--text-color', '#839496'); // Texto gris claro
        root.style.setProperty('--title-color', '#b58900'); // Títulos en amarillo mostaza
        root.style.setProperty('--link-color', '#268bd2'); // Enlaces en azul brillante
        root.style.setProperty('--link-hover-color', '#2aa198'); // Enlaces en verde azulado al pasar el ratón
        root.style.setProperty('--border-color', '#586e75'); // Bordes en gris oscuro
        coloresCambiados = true; // Actualizamos el estado
    } else {
        // Restauramos los valores originales de las variables CSS
        root.style.setProperty('--background-color', '#000000'); // Fondo negro
        root.style.setProperty('--text-color', '#00FF00'); // Texto verde brillante
        root.style.setProperty('--title-color', '#FFFF00'); // Títulos en amarillo brillante
        root.style.setProperty('--link-color', '#00BFFF'); // Enlaces en azul brillante
        root.style.setProperty('--link-hover-color', '#FFBF00'); // Enlaces en ámbar al pasar el ratón
        root.style.setProperty('--border-color', '#00FF00'); // Bordes verdes brillantes

        coloresCambiados = false; // Actualizamos el estado
    }
}