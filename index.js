function integral(x0, x1){
    return ((x0 + x1) / 2);
}

function calcFx(x) {
    return (Math.pow(x, 3) - x - 1);
  }

function calcErr(xNew, xOld) {
    let res = ((xNew - xOld) / (xNew)) * 100
    if (res < 0) {
      return res * -1
    }
    return res
}

module.exports = { calcular }