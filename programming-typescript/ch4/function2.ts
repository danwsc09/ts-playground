function sum(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

function sumVariadic(): number {
  return Array.from(arguments).reduce((acc, curr) => acc + curr, 0)
}

const r1 = sum([1,2,5])
// const r2 = sumVariadic([1,2,5]) // Type Error


