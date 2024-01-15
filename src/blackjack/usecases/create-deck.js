import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} cardTypes Ejemplo: ['C','D','H','S']
 * @param {Array<String>} specialType Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo deck de Cartas
 */

export const createDeck = (cardTypes, specialType) => {
    if (!cardTypes || cardTypes.length === 0) {
        throw new Error("cardTypes is required as a string Array");
    }

    if (!specialType || specialType.length === 0) {
        throw new Error("specialType is required as a string Array");
    }

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let type of cardTypes) {
            deck.push(i + type);
        }
    }
    for (let special of specialType) {
        for (let type of cardTypes) {
            deck.push(special + type);
        }
    }
    return _.shuffle(deck);
};

// Exportar por defecto
// export default createDeck;
