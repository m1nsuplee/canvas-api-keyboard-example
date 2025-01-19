import { DOM_IDS } from './lib/dom-ids';
import { animate, getCanvasElementById } from './lib/helpers';
import { Keys } from './lib/keyboard';
import { Box } from './lib/box';
import Mushroom from './assets/mushroom.webp';
import { Platform } from './lib/platform';

function main(): void {
  const canvas = getCanvasElementById(DOM_IDS.CANVAS);

  const dpr = window.devicePixelRatio;

  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Canvas context not found');
  }

  const resizeCanvas = () => {
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
  };

  window.addEventListener('resize', resizeCanvas);

  const box = new Box();

  const platform = new Platform(100, 100, 178, 180, Mushroom);

  animate(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    box.update(context);
    platform.draw(context);
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
