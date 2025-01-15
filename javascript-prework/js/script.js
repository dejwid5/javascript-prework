let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove = 'nożyce';
}
*/

let playerMove = getMoveName(playerInput);

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    } else if(argMoveId == null){
      return 'nic';
    } else {
      return 'nieznany ruch';
    }
}


/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
  playerMove = 'papier';
} else if(playerInput == '3'){
  playerMove = 'nożyce';
} else if(playerInput == null){
  playerMove = 'nic';
}
*/

printMessage('Twój ruch to: ' + playerMove);

printMessage('Zagrałem ' + computerMove + ", a ty: " + playerMove);

function displayResult(argComputerMove, argPlayerMove){
    console.log('Ruch komputera to:', argComputerMove + ' a użytkownika: ' + argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Ty wygrywasz!';
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return 'Ty wygrywasz!';
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return 'Ty wygrywasz!';
    } else if(argComputerMove == argPlayerMove){
        return 'Remis!';
    } else if(argPlayerMove == 'nieznany ruch'){
        return 'Błąd! Wybierz 1, 2 lub 3';
    } else if(argPlayerMove == 'nic'){
        return 'Nie wybrałeś żadnego ruchu! Więc ja wygrywam :D';
    } else {
        return 'Przegrałeś!';
    }
}

printMessage(displayResult(computerMove, playerMove));

/*
if(computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == playerMove){
    printMessage('Remis!');
} else if(playerMove == 'nieznany ruch'){
    printMessage('Błąd! Wybierz 1, 2 lub 3');
} else if(playerMove == 'nic'){
    printMessage('Nie wybrałeś żadnego ruchu! Więc ja wygrywam :D');
} else {
    printMessage('Przegrałeś!');
}
*/