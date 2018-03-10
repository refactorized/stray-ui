const between = (min, max) => n => (n < max && n >= min)

// returns a copy of the array A with indices i,j swapped
// if i or j are out of range, just returns a copy, without swap
const arrSwap = ([i, j]) => A => {
  let B = A.slice()
  if (between(0, A.length)(i) && between(0, A.length)(j)) {
    B[i] = A[j]
    B[j] = A[i]
  }
  return B
}

export default {
  arr: {
    swap: arrSwap
  }
}
