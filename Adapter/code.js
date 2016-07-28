// existed minus function
function existedMinus (x, y) {
  return y - x
}

// wanted minus function
function wantedMinus (x, y) {
  return x - y
}

// use adapter pattern to do convert
function wantedMinus (x, y) {
  return existedMinus(y, x)
}