export class Dot {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  rotate(theta: number): Dot {
    return new Dot(
      this.x * Math.cos(theta) - this.y * Math.sin(theta),
      this.x * Math.sin(theta) + this.y * Math.cos(theta)
    );
  }

  translate(x: number, y: number): Dot {
    return new Dot(
      this.x + x,
      this.y + y
    );
  }

  scale(s: number): Dot {
    return new Dot(
      this.x * s,
      this.y * s
    );
  }
}
