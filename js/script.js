{

    function playGame(playerInput){

        clearMessages();

        console.log('Gracz wpisał: ' + playerInput);

        let randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

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

        const computerMove = getMoveName(randomNumber);


        const playerMove = getMoveName(playerInput);


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

    }

    document.getElementById('rock').addEventListener('click', function(){
        playGame(1);
    });

    document.getElementById('paper').addEventListener('click', function(){
        playGame(2);
    });

    document.getElementById('scissors').addEventListener('click', function(){
        playGame(3);
    });

}