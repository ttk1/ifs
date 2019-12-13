import { Dot } from './dot';

window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = 'red';

  function f(dot: Dot, count: number) {
    if (count == 0) {
      ctx.beginPath();
      ctx.arc(dot.x * 300 + 100, dot.y * 300 + 100, 0.5, 0, 2 * Math.PI, true);
      ctx.stroke();
    } else {
      dot = dot.scale(0.70710678118);
      f(dot.rotate(- Math.PI / 4), count - 1);
      f(dot.rotate(- Math.PI * 3 / 4).translate(1, 1), count - 1);
    }
  }

  f(new Dot(0.5, 0.5), 15);
};
