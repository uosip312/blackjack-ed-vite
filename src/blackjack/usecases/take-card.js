/**
 * Función para tomar una carta
 * @param {Array<String>} deck Arreglo de string de cartas
 * @returns {String} Retorna la carta tomada del deck
 */

export const takeCard = (deck) => {
    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    return deck.pop();
}