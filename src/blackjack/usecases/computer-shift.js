import { sweetAlert } from "../../sweetalert";
import { cardValue, takeCard, createCardHTML } from "./";

/**
 * Función para ejecutar el turno de la computadora
 * @param {Number} minPoints puntos minimos que necesita la computadora para ganar
 * @param {HTMLElement} HTMLPoints elemento HTML para mostrar los puntos
 * @param {HTMLElement} divComputerCard elemento HTML para mostrar las cartas
 * @param {Array<String>} deck Arreglo de String de cartas
 * @returns {void}
 */
export const computerShift = ( minPoints, HTMLPoints, divComputerCard, deck = [] ) => {

    if ( !minPoints ) throw new Error('Minimun Points are required');
    if ( !HTMLPoints ) throw new Error('HTMLPoint argument is required');
    if ( !divComputerCard ) throw new Error('Div for Computer Card is required');
    if ( !deck ) throw new Error('Card Deck is required');

    let computerPoints = 0;

    do {
        const card = takeCard(deck);
        
        computerPoints = computerPoints + cardValue(card);
        HTMLPoints.innerText = computerPoints;

        const imgCard = createCardHTML(card);
        divComputerCard.append(imgCard);

        if (minPoints > 21) {
            break;
        }

    } while ( (computerPoints <= minPoints) && (minPoints <= 21) );

    setTimeout(() => {
        if( computerPoints === minPoints) {
            sweetAlert('Aviso!', 'Nadie Gana :( ', 'error');
        } else if( minPoints > 21 ) {
            sweetAlert('Aviso!', 'Computadora Gana :(', 'warning');
        } else if ( computerPoints > 21 ) {
            sweetAlert('Aviso!', 'Ganaste Jugador :) ', 'success');
        } else{
            sweetAlert('Aviso!', 'Computadora Gana :(', 'warning');
        }
    }, 100);
}