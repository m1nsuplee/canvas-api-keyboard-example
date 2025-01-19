export class Platform {
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement | null;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    imageUrl?: string,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = null;

    if (imageUrl) {
      this.image = new Image();
      this.image.src = imageUrl;
    }
  }

  draw(context: CanvasRenderingContext2D): void {
    if (this.image && this.image.complete) {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      context.fillStyle = '#5D4037';
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getBounds(): { x: number; y: number; width: number; height: number } {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }
}
