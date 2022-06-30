function sum(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

function sumVariadic(): number {
  return Array.from(arguments).reduce((acc, curr) => acc + curr, 0)
}

const r1 = sum([1, 2, 5])
// const r2 = sumVariadic([1,2,5]) // Type Error

function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i)
  }
}

function f(n: any) {
  console.log(n)
}

times(f, 5)
