// Задание 1: Напишите стрелочную функцию sumEvenNumbers
// Функция принимает массив чисел и возвращает сумму всех четных чисел.
var sumEvenNumbers = function (numbers) {
    return numbers.reduce(function (sum, number) {
        return number % 2 === 0 ? sum + number : sum; // Если число четное, добавляем его к сумме
    }, 0);
};
// Пример использования функции sumEvenNumbers
var evenSum = sumEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log("Задание 1: Сумма четных чисел:", evenSum); // Ожидаемый вывод: 12
console.log("\n");
// Реализация функции, проверяющей, является ли строка пустой
var isEmpty = function (input) {
    return input.trim().length === 0; // Проверяем, является ли строка пустой
};
// Пример использования функции isEmpty
var emptyCheck = isEmpty("   "); // Пустая строка с пробелами
console.log("Задание 2: Является ли строка пустой:", emptyCheck); // Ожидаемый вывод: true
console.log("\n");
// Реализация функции, проверяющей равенство строк
var areStringsEqual = function (str1, str2) {
    return str1 === str2; // Проверяем равенство строк
};
// Пример использования функции areStringsEqual
var equalityCheck = areStringsEqual("hello", "hello");
console.log("Задание 3: Строки равны:", equalityCheck); // Ожидаемый вывод: true
console.log("\n");
// Задание 4: Обобщенная функция getLastElement
// Функция принимает массив любого типа и возвращает последний элемент
function getLastElement(array) {
    return array[array.length - 1]; // Возвращаем последний элемент массива
}
// Пример использования функции getLastElement
var lastNumber = getLastElement([1, 2, 3, 4, 5]);
var lastString = getLastElement(["a", "b", "c"]);
console.log("Задание 4: Последний элемент числа:", lastNumber); // Ожидаемый вывод: 5
console.log("Задание 4: Последний элемент строки:", lastString); // Ожидаемый вывод: "c"
console.log("\n");
// Задание 5: Обобщенная функция makeTriple
// Функция принимает три аргумента одного типа и возвращает массив из этих трех элементов
function makeTriple(a, b, c) {
    return [a, b, c]; // Возвращаем массив из трех элементов
}
// Пример использования функции makeTriple
var tripleNumbers = makeTriple(1, 2, 3);
var tripleStrings = makeTriple("x", "y", "z");
console.log("Задание 5: Массив из трех чисел:", tripleNumbers); // Ожидаемый вывод: [1, 2, 3]
console.log("Задание 5: Массив из трех строк:", tripleStrings); // Ожидаемый вывод: ["x", "y", "z"]
