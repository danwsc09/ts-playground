// overloading
interface Reservation {}
// type Reserve = (from: Date, to: Date, destination: string) => Reservation

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
}

const func1: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    // first signature (oneway trip)
  } else if (typeof toOrDestination === 'string') {
    // second signature (round trip)
  }
  return {}
}

type CreateElement = {
  (tag: 'a'): HTMLAnchorElement
  (tag: 'canvas'): HTMLCanvasElement
  (tag: 'table'): HTMLTableElement
  // (tag: string): HTMLElement;
}

let myCreateElement: CreateElement = (
  tag: 'a' | 'canvas' | 'table'
): HTMLAnchorElement | HTMLCanvasElement | HTMLTableElement => {
  const { createElement } = document
  if (tag === 'a') {
    return createElement('a')
  } else if (tag === 'canvas') {
    return createElement('canvas')
  } else {
    return createElement('table')
  }
}

function e1(bool: boolean): string | number {
  return bool ? 'str' : 55
}
