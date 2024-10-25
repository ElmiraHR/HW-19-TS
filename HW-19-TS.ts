
// Задание 1: Напишите стрелочную функцию sumEvenNumbers
// Функция принимает массив чисел и возвращает сумму всех четных чисел.
const sumEvenNumbers = (numbers: number[]): number => {
    return numbers.reduce((sum, number) => {
        return number % 2 === 0 ? sum + number : sum; // Если число четное, добавляем его к сумме
    }, 0);
};

// Пример использования функции sumEvenNumbers
const evenSum = sumEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log("Задание 1: Сумма четных чисел:", evenSum); // Ожидаемый вывод: 12
console.log("\n");

// Задание 2: Определите интерфейс StringToBooleanFunction
// Интерфейс для функции, принимающей строку и возвращающей boolean
interface StringToBooleanFunction {
    (input: string): boolean; // Функция принимает строку и возвращает boolean
}

// Реализация функции, проверяющей, является ли строка пустой
const isEmpty: StringToBooleanFunction = (input) => {
    return input.trim().length === 0; // Проверяем, является ли строка пустой
};

// Пример использования функции isEmpty
const emptyCheck = isEmpty("   "); // Пустая строка с пробелами
console.log("Задание 2: Является ли строка пустой:", emptyCheck); // Ожидаемый вывод: true
console.log("\n");

// Задание 3: Создайте тип CompareStrings
// Тип для функции, принимающей две строки и возвращающей boolean
type CompareStrings = (str1: string, str2: string) => boolean;

// Реализация функции, проверяющей равенство строк
const areStringsEqual: CompareStrings = (str1, str2) => {
    return str1 === str2; // Проверяем равенство строк
};

// Пример использования функции areStringsEqual
const equalityCheck = areStringsEqual("hello", "hello");
console.log("Задание 3: Строки равны:", equalityCheck); // Ожидаемый вывод: true
console.log("\n");

// Задание 4: Обобщенная функция getLastElement
// Функция принимает массив любого типа и возвращает последний элемент
function getLastElement<T>(array: T[]): T | undefined {
    return array[array.length - 1]; // Возвращаем последний элемент массива
}

// Пример использования функции getLastElement
const lastNumber = getLastElement([1, 2, 3, 4, 5]);
const lastString = getLastElement(["a", "b", "c"]);
console.log("Задание 4: Последний элемент числа:", lastNumber); // Ожидаемый вывод: 5
console.log("Задание 4: Последний элемент строки:", lastString); // Ожидаемый вывод: "c"
console.log("\n");

// Задание 5: Обобщенная функция makeTriple
// Функция принимает три аргумента одного типа и возвращает массив из этих трех элементов
function makeTriple<T>(a: T, b: T, c: T): T[] {
    return [a, b, c]; // Возвращаем массив из трех элементов
}

// Пример использования функции makeTriple
const tripleNumbers = makeTriple(1, 2, 3);
const tripleStrings = makeTriple("x", "y", "z");
console.log("Задание 5: Массив из трех чисел:", tripleNumbers); // Ожидаемый вывод: [1, 2, 3]
console.log("Задание 5: Массив из трех строк:", tripleStrings); // Ожидаемый вывод: ["x", "y", "z"]
