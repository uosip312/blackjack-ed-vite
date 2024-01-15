/**
 * Función para obtener el valor de la carta
 * @param {String} card Ejemplo: A, J, Q, 2, 5, 8, etc.
 * @returns {Number} Retorna el valor correspondiente a la carta
 */

export const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);

    return  (!isNaN(value)) ? +value :
            (value === 'A') ? 11 : 10;
}