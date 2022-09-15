// Задание 2.
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. 
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.


function checkPrime(randomNumber) {
	let n = 0;
	for (let i = 0; i <= randomNumber; i++) {
		if (randomNumber % i === 0 && randomNumber <= 1000) {
			n++;
		}
	}
	let str = n > 2 ? "составное":
	randomNumber > 1000 || typeof randomNumber !== "number" || isNaN(randomNumber)? "данные неверны":
	randomNumber === 1||randomNumber === 0 ? "исключение": "простое";
	return str;
}

console.log(checkPrime(8));