import { Dot } from './dot';

window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = 'red';

  let dots1: Dot[] = [
    new Dot(0, 0),
    new Dot(1, 1)
  ];
  let dots2: Dot[];

  for (let i = 0; i < 15; i++) {
    dots2 = [];
    dots1.forEach((dot) => {
      dot = dot.scale(0.70710678118);
      dots2.push(dot.rotate(- Math.PI / 4));
      dots2.push(dot.rotate(- Math.PI * 3 / 4).translate(1, 1));
    });
    dots1 = dots2;
  }

  dots1.forEach((dot) => {
    ctx.beginPath();
    ctx.arc(dot.x * 300 + 100, dot.y * 300 + 100, 0.5, 0, 2 * Math.PI, true);
    ctx.stroke();
  });
};
