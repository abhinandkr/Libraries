import { swap } from '../../helpers'

export default function quickSort(
  input: number[],
  start: number = 0,
  end: number = input.length - 1
) {
  if (start >= end) {
    return
  }
  const pIndex = partition(input, start, end)
  quickSort(input, start, pIndex - 1)
  quickSort(input, pIndex + 1, end)
}

function partition(input: number[], start: number, end: number): number {
  const pivot = input[end]
  let pIndex = start
  for (let i = start; i < end; i++) {
    if (input[i] <= pivot) {
      swap(input, i, pIndex)
      pIndex++
    }
  }
  swap(input, pIndex, end)
  return pIndex
}
