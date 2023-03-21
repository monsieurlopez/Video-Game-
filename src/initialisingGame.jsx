// Este codigo no funciona: 

import { playSound } from './sound';

    const handleStartGame = () => {
      Swal.fire({
        width: "80%",
        padding: "70px",
        title: "Enter the name of player 1 and player 2",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Player 1">' +
          '<input id="swal-input2" class="swal2-input" placeholder="Player 2">',
        confirmButtonText: "OK",
        focusConfirm: false,
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        preConfirm: () => {
          const playerName1 = document.querySelector("#swal-input1").value;
          const playerName2 = document.querySelector("#swal-input2").value;
          if (!playerName1 || !playerName2) {
            Swal.showValidationMessage("Please enter a name for both players");
            return false;
          }
          if (playerName1 === playerName2) {
            Swal.showValidationMessage("The player names cannot be the same");
            return false;
          }
          setPlayer1Name(playerName1);
          setPlayer2Name(playerName2);
          return true;
        },
      }).then((result) => {
        if (result.isConfirmed) {
          playSound();
          const startMessage = startGame();
          setGame(startMessage);
        }
      });
    };

    const [player1Name, setPlayer1Name] = useState("");
    const [player2Name, setPlayer2Name] = useState("");

    const startGame = () => {
      
      let numberRandom = Math.random();
      if (numberRandom < 0.5) {
        return ("Start player 1"); //(`Start ${player1Name}`);
      } else {
        return ("Start player 2"); //(`Start ${player2Name}`);
      }
      
    };
    export const mostrarResultado = () => {
      handleStartGame().then(() => {
        const resultado = startGame();
        setGame(resultado);
      });
    };