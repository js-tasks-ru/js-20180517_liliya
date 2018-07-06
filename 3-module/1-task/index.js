/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(data, age) {
    let arr = data.filter(function(item){
        if(item['age'] <= age) {
            return item;
        }
    })
        .map(function(item){
            return `${item['name']}, ${item['balance']}`;
        })
        .join('\n');

    return arr;
}


