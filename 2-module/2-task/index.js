/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
'use strict'

function find(object, value) {
    let result = [];

    function path(obj, currentPath) {
        for (let key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                path(obj[key], (currentPath ? (currentPath + '.' + key) : key));
            } else if (obj[key] === value) {
                result.push(currentPath ? (currentPath + '.' + key) : (key));
            }
        }
    }

    path(object, '');

    if(result.length === 0) {
        return null;
    } else if (result.length === 1) {
        return result[0];
    }

    return result;

}