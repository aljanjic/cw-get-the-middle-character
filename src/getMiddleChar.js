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