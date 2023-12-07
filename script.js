'use strict';

// 1. Объявление переменных
const mysteriousNumber = 55; // Загадачоное число
let game; // Программа/игра


// 2. Описание функций
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

game = function () {
    function startGame() {
        // 1. Спрашивает пользователя: "Угадай число от 1 до 100".
        let randomNumber = prompt('Угадай число от 1 до 100.');
        console.log('Ты ввёл число ' + randomNumber + '.');

        // 2. Если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
        if (randomNumber > mysteriousNumber && randomNumber !== null) {
            console.log(randomNumber);
            console.log(typeof randomNumber);
            console.log('Загадачоное число меньше, попробуй ещё раз.');
            alert('Загадачоное число меньше, попробуй ещё раз.');
            startGame();
            // 3. Если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
        } else if (randomNumber < mysteriousNumber && randomNumber !== null) {
            console.log(randomNumber);
            console.log(typeof randomNumber);
            console.log('Загадачоное число больше, попробуй ещё раз.');
            alert('Загадачоное число больше, попробуй ещё раз.');
            startGame();

            // 4. Если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
        } else if (!isNumber(randomNumber) && randomNumber !== 0 && randomNumber !== null) {
            console.log(randomNumber);
            console.log(typeof randomNumber);
            console.log('Введи число!');
            alert('Введи число!');
            startGame();

            // 5. Если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
        } else if (randomNumber === null) {
            console.log(randomNumber);
            console.log(typeof randomNumber);
            console.log('Game Over!');
            alert('Game Over!');
            // 6. Если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение "Поздравляю, Вы угадали!!!".
        } else if (randomNumber === mysteriousNumber) {
            console.log(randomNumber);
            console.log(typeof randomNumber);
            console.log('Поздравляю, вы угадали!!!');
            alert('Поздравляю, вы угадали!!!');
        }
    }

    startGame();
};


// 3. Основная работа
game(); // Запуск программы/игры


// 4. console.log