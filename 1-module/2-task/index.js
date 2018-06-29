'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (name) {
    if(!name || name.length < 4 || isContainsSpace(name)){
        return false;
    }
    return true;
}
function isContainsSpace(name){
    for(let i = 0; i< name.length; i++){
        if(name[i]===" ") { return true;}
    }
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();

