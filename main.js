//Позиция коробля
const randomLoc = Math.floor(Math.random() * 5); // от 0 до 4
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;

let isSunk = false; //Потоплен ли корабль ?
let guess; // предпологаемая позиция коробля (выстрел)
let hits = 0; //добавим счетчик попаданий
let guesses = 0; // создаем счетчик выстрелов
let guessHit = [];


while (isSunk === false) {
    guess = +prompt("Fire! Enter a number 0-6") //не забываем превратить строку в число с помощью +
    if (guess < 0 || guess > 6) {
        alert("Please, enter a valid cell number!")
    } else if (guessHit.includes(guess)) { //сравнение массива попаданий с выбраным значением 
        alert("Enter another number")
    } else {
        guesses++ //увеличиваем счетчик выстрелов
        if (guess === location1 || guess === location2 || guess === location3) {
            alert("HIT!")
            guessHit.push(guess) // добавление попадания в массив.
            //считаем попадания
            hits++
            // если подбили
            if (hits === 3) {
                isSunk = true
                alert("You sank my battleship!")
            }
        } else {
            alert("MISS")
        }
    }

}

const stats = "You have " + hits + " hits out of " + guesses + " shots."
alert(stats)