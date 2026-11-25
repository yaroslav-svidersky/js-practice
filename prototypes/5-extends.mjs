class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class Square extends Rect {
  constructor(x, y, side) {
    super(x, y, side, side);
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }
}

const square = new Square(20, 30, 10);
square.move(2, 3);
console.log(square.toString());

console.log(square instanceof Square);
console.log(square instanceof Rect);
console.log(square instanceof Object);

console.log(Object.getPrototypeOf(Square.prototype) === Rect.prototype);
console.log(Object.getPrototypeOf(Square) === Rect);

class BadSquare extends Rect {
  constructor(x, y, side) {
    // eslint-disable-next-line no-this-before-super -- нарушаем правило специально, для опыта
    this.side = side;
    super(x, y, side, side);
  }
}

const bad = new BadSquare(20, 30, 10);
console.log(bad);
