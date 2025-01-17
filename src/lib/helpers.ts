export function animate(callback: () => void): void {
  requestAnimationFrame(() => {
    callback();
    animate(callback);
  });
}

export function getCanvasElementById(id: string): HTMLCanvasElement {
  const canvas = document.getElementById(id);

  const isCanvasElement = (element: unknown): element is HTMLCanvasElement =>
    element instanceof HTMLCanvasElement;

  if (!canvas) {
    throw new Error(`Canvas "${id}" not found`);
  }

  if (!isCanvasElement(canvas)) {
    throw new Error(`Canvas "${id}" is not an HTMLCanvasElement`);
  }

  return canvas;
}
