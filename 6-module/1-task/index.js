'use strict';

/**
 * Функция возвращает строкой, сколько времени осталоьс до события
 * @param {Date} when - дата события
 * @return {string} - строка с указанием времени до начала события
 */

function getBeforeTime(when) {
    const milisecsInDay = 1000*60*60*24;
    const milisecsInYear = milisecsInDay*365;
    let current = new Date(Date.now());
    let currentDate = current.getTime();

    if (currentDate - when.getTime() >= 0) {
        return 'событие завершилось';
    }

    let amount = '';
    const years = Math.floor((when.getTime()-currentDate) / milisecsInYear);
    if (years > 0) {
        amount = `${years} г.`;

    }

    let currMonth = current.getUTCMonth();
    let currDays = current.getUTCDate();
    let currHours = current.getUTCHours();
    let currMins = current.getUTCMinutes();
    let currSecs = current.getUTCSeconds();

    let whenMonth = when.getUTCMonth();
    let whenDays = when.getUTCDate();
    let whenHours = when.getUTCHours();
    let whenMins = when.getUTCMinutes();
    let whenSecs = when.getUTCSeconds();

    const months = whenDays - currDays >= 0 ? whenMonth - currMonth : whenMonth - currMonth - 1;

    if (months > 0) {
        amount ? amount += `, ${months} мес.` : amount = `${months} мес.`;
    }

    let days = '';
    if (whenDays - currDays >= 0) {
        days = whenHours - currHours >= 0 ? whenDays - currDays : whenDays - currDays - 1;
    } else {
        days = getNumberOfDaysInMonth(currMonth) - currDays + whenDays;
    }

    if (days > 0) {
        amount ? amount += `, ${days} д.` : amount = `${days} д.`;
    }

    const hours = whenMins - currMins >= 0 ? whenHours - currHours : whenHours - currHours - 1;

    if (hours > 0) {
        amount ? amount += `, ${hours} ч.` : amount = `${hours} ч.`;
    }

    const mins = whenSecs - currSecs >= 0 ? whenMins - currMins : whenMins - currMins - 1;

    if (mins > 0) {
        amount ? amount += `, ${mins} мин.` : amount = `${mins} мин.`;
    }

    const secs = whenSecs - currSecs >= 0 ? whenSecs - currSecs : whenSecs - currSecs - 1;

    if (secs > 0) {
        amount ? amount += `, ${secs} сек.` : amount = `${secs} сек.`;
    }

    return amount;
}

function getNumberOfDaysInMonth(month) {
    switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return 31;
        case 3:
        case 5:
        case 8:
        case 10:
            return 30;
        default:
            return 28;
    }
}