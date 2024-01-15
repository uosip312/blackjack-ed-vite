import Swal from "sweetalert2";

/**
 * Función para mostrar un alert elegante
 * @param {String} title Titulo del Aviso
 * @param {String} text Texto a mostrar en el aviso
 * @param {String} icon icono a mostrar, opciones: 'success' | 'error' | 'warning' | 'info' | 'question'
 */
export const sweetAlert = (title, text, icon) => { 
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
}