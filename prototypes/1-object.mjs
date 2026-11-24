const pointMethods = {
  move(x, y) {
    this.x += x;
    this.y += y;
  },
  toString() {
    return `[${this.x}, ${this.y}]`;
  },
};

const point = { x: 10, y: 20 };
Object.setPrototypeOf(point, pointMethods);

point.move(2, 3);
console.log(point.toString());
console.log(Object.keys(point));
console.log(pointMethods.x);

pointMethods.reset = function () {
  this.x = 0;
  this.y = 0;
};
point.reset();
console.log(point.toString());

console.log(Object.getPrototypeOf(point) === pointMethods);
console.log(Object.getPrototypeOf(pointMethods) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

for (const key in point) {
  console.log(key);
}
console.log("move" in point);
console.log(Object.hasOwn(point, "move"));
