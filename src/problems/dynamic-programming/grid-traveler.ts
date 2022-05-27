export const gridTraveler = (m: number, n: number): number => {
  if (m === 0 || n === 0) {
    return 0
  }
  if (m === 1 && n === 1) {
    return 1
  }
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

// eslint-disable-next-line max-len,camelcase
export const gridTraveler_memoized = (
  m: number,
  n: number,
  memo: { [key: string]: number } = {}
): number => {
  const key = `${m},${n}`
  if (key in memo) {
    return memo[key]
  }
  if (m === 0 || n === 0) {
    return 0
  }
  if (m === 1 && n === 1) {
    return 1
  }
  // eslint-disable-next-line max-len
  memo[key] = gridTraveler_memoized(m - 1, n, memo) + gridTraveler_memoized(m, n - 1, memo)
  return memo[key]
}
