class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }

  static from(obj) {
    const { x, y } = obj;
    return new Point(x, y);
  }
}

const point = new Point(10, 20);
point.move(2, 3);
console.log(point.toString());

console.log(typeof Point);

console.log(Object.hasOwn(point, "move"));
console.log(Object.hasOwn(Point, "move"));
console.log(Object.hasOwn(Point.prototype, "move"));
console.log(Object.hasOwn(Point, "from"));

for (const key in point) {
  console.log(key);
}
console.log(Object.keys(Point.prototype));

const p = Point(10, 20);
console.log(p);
