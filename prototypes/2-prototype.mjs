function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
};

Point.prototype.toString = function () {
  return `[${this.x}, ${this.y}]`;
};

Point.from = function (obj) {
  const { x, y } = obj;
  return new Point(x, y);
};

const point = new Point(10, 20);
point.move(2, 3);
console.log(point.toString());

console.log(Object.getPrototypeOf(point) === Point.prototype);
console.log(typeof point.from, typeof Point.from);
console.log(Point.from({ x: 1, y: 2 }).toString());

console.log(Object.getPrototypeOf(Point) === Point.prototype);
console.log(Object.getPrototypeOf(Point) === Function.prototype);

const p = Point(10, 20);
console.log(p);
console.log(globalThis.x, globalThis.y);
