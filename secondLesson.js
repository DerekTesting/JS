// Массив в обьект
let arrayWithRandomData = ["1", "Pan", "Vasya"];
let objDataFromArray = {};
arrayWithRandomData.forEach(function (item) {
    objDataFromArray[item] = undefined;
})

console.log(objDataFromArray);

// Массив с обьектами в обьект

let arrayWithObject = [{name: "Sasha", surname: "Valen"},
    {name: "Vadim", surname: "Heroic"}]

arrayWithObject.forEach(function (item, index) {
    objDataFromArray[index] = item;
})
console.log(objDataFromArray)


// Обьект в массив

let objWithRandomElements = {name: "Illya", surname: "Vasya", age: 28};
let arrayDataFromObj = [];
console.log(Object.keys(objWithRandomElements))
console.log(Object.values(objWithRandomElements))

//Обьект в строку
for (let [key, value] of Object.entries(objWithRandomElements)) {
    console.log(`${key}:${value}`);
    arrayDataFromObj = `${key}:${value}`;

}
console.log(arrayDataFromObj)

// Вывести четные числа массива
let arrayWithNumeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayWithNumeric.forEach(function (item, index) {
    if (item % 2 == 0) {
        console.log("Чётные: " + item);
    }
})
//Вывести нечетные числа массива
arrayWithNumeric.forEach(function (item, index) {
    if (item % 2 != 0) {
        console.log("Нечётные: " + item)
    }
})


// К второму div добавить атрибут id
let secondDiv = document.querySelector("body > div:nth-child(2)");
secondDiv.setAttribute("id", "secondDiv");

// четным div class = "red" нечетным class = "blue"
let allDiv = document.querySelectorAll("div")

allDiv.forEach(function (item, index) {

    if ((index % 2) == 0) {
        allDiv[index].setAttribute("class", "red");
    } else {
        allDiv[index].setAttribute("class", "blue");
    }

})

//Сортировка массива по алфавиту и вывод в html
let arrayNameAlphabetic = ["Maxim", "Anton", "Valera", "Ruslan", "Alex", "Max", "andrey"];

arrayNameAlphabetic.sort(function (a, b) {
    let nameA = a.toLowerCase(), nameB = b.toLowerCase();
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0
    }
})
document.querySelector("body > div:nth-child(1)").innerHTML = '<ul></ul>';
let divWithListArrayName = document.querySelector('body > div:nth-child(1) > ul');

arrayNameAlphabetic.forEach(function (item, index) {
    divWithListArrayName.insertAdjacentHTML("beforeEnd", `<li>${item}</li>`)
})


// 1)Удалить элемент массива который находится вне функции в которой выполняется удаление

const arrayDeleteFirst = [
    {name: 1},
    {name: 12},
    {name: 13},
    {name: 14},
    {name: 15},
    {name: 16},
    {name: 17},
    {name: 18}
];

function findAndDeleteArrayItem() {
    let a = 0;
    for (let item of arrayDeleteFirst) {
        item.name < 18 ? a++ : false
    }
    arrayDeleteFirst.splice(a, 1) // если нужно удалить вне цикла
}

findAndDeleteArrayItem()
console.log(arrayDeleteFirst)

// 2)Удалить элемент массива который находится вне функции в которой выполняется удаление
const arrayDeleteSecond = [
    {name: 1},
    {name: 12},
    {name: 13},
    {name: 14},
    {name: 15},
    {name: 16},
    {name: 17},
    {name: 18}
];

function findAndDeleteArrayItemSecond() {
    let a = 0;

    for (let item of arrayDeleteSecond) {
        a++
        item.name == 1 ? arrayDeleteSecond.splice(a - 1, 1) : false // если нужно удалить в цикле
    }
    arrayDeleteSecond.splice(a, 1)
}

findAndDeleteArrayItemSecond()
console.log(arrayDeleteSecond);


