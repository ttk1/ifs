import { Dot } from './dot';

window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = 'red';

  function getParam(key: string) {
    return window.location.search
      .replace(/^\?/, '').split('&')
      .map((x) => x.split('='))
      .find((x) => x[0] === key)?.[1];
  }

  function drawDot(dot: Dot) {
    ctx.beginPath();
    ctx.arc(dot.x * 500, dot.y * 500, 0.5, 0, 2 * Math.PI, true);
    ctx.stroke();
  }

  function gasket(dot: Dot, count: number) {
    if (count === 0) {
      drawDot(dot);
    } else {
      dot = dot.scale(0.5);
      gasket(dot, count - 1);
      gasket(dot.translate(1 / 4, 1 / 2), count - 1);
      gasket(dot.translate(1 / 2, 0), count - 1);
    }
  }

  function carpet(dot: Dot, count: number) {
    if (count === 0) {
      drawDot(dot);
    } else {
      dot = dot.scale(1 / 3);
      carpet(dot, count - 1);
      carpet(dot.translate(0, 1 / 3), count - 1);
      carpet(dot.translate(0, 2 / 3), count - 1);
      carpet(dot.translate(1 / 3, 0), count - 1);
      carpet(dot.translate(1 / 3, 2 / 3), count - 1);
      carpet(dot.translate(2 / 3, 0), count - 1);
      carpet(dot.translate(2 / 3, 1 / 3), count - 1);
      carpet(dot.translate(2 / 3, 2 / 3), count - 1);
    }
  }

  function dragon(dot: Dot, count: number) {
    if (count === 0) {
      drawDot(dot);
    } else {
      dot = dot.scale(1 / Math.sqrt(2));
      dragon(dot.rotate(Math.PI / 4), count - 1);
      dragon(dot.rotate(Math.PI * 3 / 4).translate(1, 1), count - 1);
    }
  }

  switch (getParam('id')) {
    case 'gasket':
      return gasket(new Dot(0.5, 0.5), 8);
    case 'carpet':
      return carpet(new Dot(0.5, 0.5), 5);
    case 'dragon':
    default:
      return dragon(new Dot(0.5, 0.5), 15);
  }
};
