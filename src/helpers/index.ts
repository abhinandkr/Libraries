export function swap<T>(input: T[], index1: number, index2: number) {
  if (!input) {
    throw new Error('Invalid input array')
  }
  if (input.length === 0) {
    return
  }
  const a = input[index1]
  input[index1] = input[index2]
  input[index2] = a
}
