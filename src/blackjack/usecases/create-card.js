
/**
 * Función para elegir la imagen de la carta
 * @param {tring} card 
 * @returns {HTMLIFrameElement} Retorna una imagen.
 */

export const createCardHTML = ( card ) => {

    if ( !card ) throw new Error('The card argument is required');

    // <img class="carta" src="assets/cartas/AH.png">
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('carta');
    
    return imgCard;
}