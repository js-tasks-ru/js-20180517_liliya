/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
   let result = m;
   for(let i = 2; i <= n; i++){
       result*=m;
   }
   return result;
}