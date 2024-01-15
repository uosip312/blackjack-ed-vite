import _ from "underscore";

import { createDeck, cardValue, computerShift, takeCard, createCardHTML } from "./usecases";
import { sweetAlert } from "../sweetalert";

/**
* AC = A of Clubs
* AD = A of Diamonds
* AH = A of Hearts
* AS = A of Spades
*/
  
  let deck            = [];
  const tipos         = ['C','D','H','S'],
        especiales    = ['A','J','Q','K'];

  let playerPoints      = 0,
      computerPoints    = 0;

  // * Referencias del HTML
  const btnPedirCarta = document.querySelector('#btnPedirCarta'),
        btnNuevo      = document.querySelector('#btnNuevo'),
        btnDetener    = document.querySelector('#btnDetener');

  const divCartasJugador        = document.querySelector('#jugador-cartas'),
        divCartasComputadora    = document.querySelector('#computadora-cartas'),
        HTMLPoints              = document.querySelectorAll('small');

  // Esta funcion inicializa el juego
  const inicializarJuego = () => {
      deck = createDeck(tipos, especiales);
      
      playerPoints      = 0,
      computerPoints    = 0;

      HTMLPoints.forEach( elem => elem.innerText = 0);

      divCartasJugador.innerHTML        = '';
      divCartasComputadora.innerHTML    = '';

      btnDetener.disabled     = false;
      btnPedirCarta.disabled  = false;
  }
  
  // * EVENTOS
  btnPedirCarta.addEventListener('click', () => {
      const card = takeCard(deck);
      
      playerPoints = playerPoints + cardValue(card);
      HTMLPoints[0].innerHTML = playerPoints;

      const imgCard = createCardHTML(card);
      divCartasJugador.append(imgCard);

      if (playerPoints > 21 ) {
          sweetAlert('Aviso!', 'Lo siento mucho, perdiste! :( ', 'error');
          btnPedirCarta.disabled = true;
          btnDetener.disabled = true;
          computerShift(playerPoints, HTMLPoints[1], divCartasComputadora, deck);
      } else if ( playerPoints === 21) {          
          sweetAlert('Aviso!', '21, Genial! :) ', 'success');
          btnPedirCarta.disabled = true;
          btnDetener.disabled = true;
          computerShift(playerPoints, HTMLPoints[1], divCartasComputadora, deck);
      }
  });

  btnDetener.addEventListener('click', () => {
      btnDetener.disabled = true;
      btnPedirCarta.disabled= true;
      computerShift(playerPoints, HTMLPoints[1], divCartasComputadora, deck);
  });

  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });
