'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

function getColumn(elements, columnName){
    let firstLine = elements[0].getElementsByTagName('td');
    for(let i = 0; i < firstLine.length; i++){
        if(firstLine[i].innerHTML === columnName){
            return i;
        }
    }
}

function highlight(table) {
    let elements = table.getElementsByTagName('tr');
    let genderNumber = getColumn(elements, "Gender");
    let ageNumber = getColumn(elements, "Age");
    let statusNumber = getColumn(elements, "Status");

    for(let i = 0; i < elements.length; i++){
        let line = elements[i].getElementsByTagName('td');

        if(line[statusNumber].getAttribute('data-available') === 'true'){
            elements[i].className += " available ";
        } else if(line[statusNumber].getAttribute('data-available') === 'false'){
            elements[i].className += " unavailable ";
        } else{
            if(i !== 0){
                elements[i].setAttribute('hidden', true);
            }
        }

        if(line[genderNumber].innerHTML === 'm'){
            elements[i].className += " male";
        } else if(line[genderNumber].innerHTML === 'f'){
            elements[i].className += " female";
        }

        if(line[ageNumber].innerHTML < 18){
            elements[i].style.textDecoration = 'line-through';
        }
    }
}