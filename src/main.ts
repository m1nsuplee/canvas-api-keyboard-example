import { DOM_IDS } from './lib/dom-ids';
import { animate, getCanvasElementById } from './lib/helpers';
import { Keys } from './lib/keyboard';
import { Box } from './lib/box';

function main(): void {
  const canvas = getCanvasElementById(DOM_IDS.CANVAS);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Canvas context not found');
  }

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resizeCanvas);

  const box = new Box();

  animate(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    box.update(context);
  });

  window.addEventListener('keydown', (event) => {
    switch (event.code) {
      case Keys.Left:
        box.velocity.x = -1;
        break;
      case Keys.Up:
        box.velocity.y -= 5;
        break;
      case Keys.Right:
        box.velocity.x = 1;
        break;
    }
  });

  window.addEventListener('keyup', (event) => {
    switch (event.code) {
      case Keys.Left:
        box.velocity.x = 0;
        break;
      case Keys.Up:
        break;
      case Keys.Right:
        box.velocity.x = 0;
        break;
      case Keys.Down:
        box.velocity.y += 5;
        break;
    }
  });
}

document.addEventListener('DOMContentLoaded', main);
