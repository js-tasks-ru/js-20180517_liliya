//let calendar = {
//    from: new Date('2018-01-01T15:09:10Z'),
//    to: new Date('2018-02-01T10:09:10Z')
//};

//calendar[Symbol.iterator] = function () {
//};

'use strict';

function getNumberOfDays(year, month) {
    let date = new Date(year, month, 0);
    return date.getDate();
}

let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
}

// сделаем объект range итерируемым
calendar[Symbol.iterator] = function() {
    let from = this.from;
    let current = this.from.getDate();

    let lastDay = getNumberOfDays(this.from.getMonth(), this.from.getDate());
    // метод должен вернуть объект с методом next()
    return {
        next() {
            if(current[0]==="["){
                current = parseInt(current.slice(1,3));
            }
            current++;
            if(current < 10){
                current = "0" + current;
            }
            let currentDay = new Date(from.getFullYear(), from.getMonth(), current);
            currentDay = currentDay.getDay();
            if (current <= lastDay + 1) {
                if(currentDay === 6 || currentDay === 0){
                    if (current === 32) {
                        return {
                            done: false,
                            value: '[01]'
                        }
                    }
                    return {
                        done: false,
                        value: "[" + current + "]"
                    };
                } else {
                    if (current === 32) {
                        return {
                            done: false,
                            value: '01'
                        }
                    }
                    return {
                        done: false,
                        value: current.toString()
                    };
                }
            } else {
                delete this.current;
                return {
                    done: true
                };
            }
        }
    }
};


for (let day of calendar) {
    console.log(day); // 1, затем 2, 3, 4, 5
}

