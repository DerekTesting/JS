'use strict'

var popap = document.getElementsByClassName('popap')
var buttonPopap = document.getElementsByClassName('btnOpenPopap');
var buttonClose = document.getElementsByClassName('btnClosePopap');

buttonPopap[0].addEventListener('click', function (){
    popap[0].removeAttribute('hidden');
})

buttonClose[0].addEventListener('click', function (){
    popap[0].setAttribute('hidden', '');
})


var arrayPerson = {
    name:"",
    surname:"",
    age:"",
}

var buttonOkName = document.getElementsByClassName('btnOk');
var inputName = document.getElementsByClassName('inputName');
var inputSurname = document.getElementsByClassName('inputSurname');
var inputAge  = document.getElementsByClassName('inputAge');
var person = [];

buttonOkName[0].addEventListener('click' , function (){

     person.push(new Person(inputName[0].value, inputSurname[0].value,inputAge[0].value));

})

var btnViewUser = document.getElementsByClassName('btnViewUser');
var inputViewUser = document.getElementsByClassName('getInputName');

btnViewUser[0].addEventListener('click',function () {
    person.filter(function (item, index) {
        item.name == inputViewUser[0].value  ? alert(item.name + " " + item.surname+ " " + item.age ) : alert("Нет такого юзера");
        console.log(inputViewUser[0].value)
    })
})


var mass = [0,9,2];

mass.unshift(12); // добавить в начало
mass.shift(); // удалить первый элемент
mass.pop(); //удалить с конца
mass.push(345,23,4); // добавить в конец
mass.splice(2,1,22); //удалить 2й по индексу элемент и заменить на 22
console.log(mass)

var obj = {
    name: "Derek",
    surname: "Pan",
    age:[23,42,5],
    adw: function () {
        console.log("HI");
    },
    df:{anem:"asd",asd:"asd"}
}



function Person(name,surname,age)   {
    this.name = name;
    this.surname = surname;
    this.age = age;
}