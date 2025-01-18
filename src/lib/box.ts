const GRAVITY = 0.3 as const;

export class Box {
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  width: number;
  height: number;
  private _gravity = GRAVITY;

  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 1,
    };

    this.width = 30;
    this.height = 30;
  }

  private draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(ctx: CanvasRenderingContext2D): void {
    this.draw(ctx);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.isCollidedY(ctx)) {
      this.position.y = ctx.canvas.height - this.height;
      this.velocity.y = 0;
    } else {
      this.velocity.y += this._gravity;
    }

    if (this.isCollidedLeft()) {
      this.position.x = 0;
      this.velocity.x *= -1;
    }

    if (this.isCollidedRight(ctx)) {
      this.position.x = ctx.canvas.width - this.width;
      this.velocity.x *= -1;
    }
  }

  isCollidedY(ctx: CanvasRenderingContext2D): boolean {
    return this.position.y + this.height + this.velocity.y > ctx.canvas.height;
  }

  isCollidedLeft(): boolean {
    return this.position.x < 0;
  }

  isCollidedRight(ctx: CanvasRenderingContext2D): boolean {
    return this.position.x + this.width > ctx.canvas.width;
  }
}
