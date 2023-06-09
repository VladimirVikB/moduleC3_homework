//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств. Данная функция не должна 
// возвращать значение.

function getOwnProperty(obj) {
    for (let key in obj) {
        if (key.hasOwnProperty(key)) {
            console.log(`Свойство = ${key}, значение = ${obj[key]}`);
        }
    }
}

//Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет, есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function findPropInObj(string, obj) {
    return string in obj;
}

//Написать функцию, которая создает пустой объект, но без прототипа.

function createObjNulProto() {
    return Object.create(null);
}