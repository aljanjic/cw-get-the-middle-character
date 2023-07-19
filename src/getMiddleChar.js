function getMiddle(str = '') {
  if (!str || !str.length) {
    return '';
  }

  let x = sliceIndex(str);
  return str.slice(x,str.length - x);

}

function sliceIndex(str) {
  return Math.floor((str.length - 1) / 2);
}

module.exports = getMiddle;


// export function getMiddle(str:string) {
//   return str.length % 2 !== 0 ? str[Math.ceil(str.length/2 - 1)] : str.slice(str.length/2 -1, str.length/2 +1);
// }