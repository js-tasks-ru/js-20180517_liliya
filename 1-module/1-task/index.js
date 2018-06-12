/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    if(m !== (m ^ 0)|| n !== (n ^ 0)){
        alert("Enter an integer");
        return;
    }
    let result = m;
    for(let i = 2; i <= n; i++){
        result*=m;
    }
    return result;
}