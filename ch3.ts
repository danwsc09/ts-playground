console.log('chapter 3 start...')

type Cat = {
  name: string,
  purrs: boolean,
}

type Dog = {
  name: string,
  barks: boolean,
  wags: boolean,
}

type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let a: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true,
}

a = {
  name: 'Domino',
  barks: true,
  wags: true,
}

a = {
  name: 'Donkers',
  barks: true,
  wags: true,
  purrs: true,
}

let b: CatAndDog = {
  name: 'Super',
  purrs: true,
  wags: true,
  barks: false,
}

function trueOrNull(isTrue: boolean) {
  if (isTrue) return 'true'
  return null
}
let c = trueOrNull(true)
let d = function(a: string, b: number) {
  return a || b
}

// null
function e(x: number) {
  if (x < 10) { return x}
  return null
}

// undefined
function f() { return undefined }

// void (no return)
function g() { let a = 2 + 2 }

// never (can't return)
function h(): never { throw TypeError('I always error') }

function i(): never { while (true) {} }

// ENUMS
enum Language {
  English = 0,
  Spanish = 1,
}

enum Language {
  Russian = 2
}

console.log('eng, span, rus:', Language.English, Language.Spanish, Language.Russian)

enum Language1 {
  English = 100,
  Spanish = 200 + 300,
  Russian
}
console.log('eng, span, rus:', Language1.English, Language1.Spanish, Language1.Russian)

enum Color {
  Red = '#c10000',
}
