/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj){
    let obj2 = {};

    for(let key in obj){
        if(typeof(obj[key]) === "object" && obj[key] !== null){
            obj2[key] = clone(obj[key]);
        } else {
            obj2[key] = obj[key];
        }
    }
    return obj2;
}