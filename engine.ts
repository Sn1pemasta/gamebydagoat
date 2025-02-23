export class Engine {
    private lastTime: number = 0;

    constructor(private game: any) {}

    public start(): void {
        this.lastTime = performance.now();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private gameLoop(currentTime: number): void {
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        this.update(deltaTime);
        this.render();

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private update(deltaTime: number): void {
        this.game.update(deltaTime);
    }

    private render(): void {
        this.game.render();
    }
}