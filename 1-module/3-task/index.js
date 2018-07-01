'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let arrOfStr = str.match(/-?\d+(\.\d+)*/g);
    let num = 0;
    let miniNumber = 0;
    let maxiNumber = 0;
    maxiNumber = parseFloat(arrOfStr[0]);
    miniNumber = parseFloat(arrOfStr[0]);

    for(let i = 0; i < arrOfStr.length; i++){
        num = parseFloat(arrOfStr[i]);
        if(num < miniNumber){
            miniNumber = num;
        }
        if(num > maxiNumber){
            maxiNumber = num;
        }
    }
    return {"min":miniNumber, "max":maxiNumber};
}


