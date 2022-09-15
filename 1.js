// Задание 1.
// В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

const arr = [1, 2, 3, 5, null, 8, 'зима'];

function findEven(element) {
	return element % 2 === 0 && typeof element === 'number';
}
function findOdd(element) {
	return element % 2 > 0 && typeof element === 'number';
}
function findNull(element){
	return element === null;
}
function findNan(element){
	return isNaN(element);
}
console.log(`Количество четных элементов: ${arr.filter(findEven).length}
Количество нечетных элементов: ${arr.filter(findOdd).length}
Количество нулевых элементов: ${arr.filter(findNull).length}
Не числа: ${arr.filter(findNan).length}` );
