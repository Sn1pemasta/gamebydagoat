export class Game {
    private engine: Engine;
    private world: World;
    private combat: Combat;
    private exploration: Exploration;
    private interaction: Interaction;
    private resourceManagement: ResourceManagement;
    private storytelling: Storytelling;

    constructor() {
        this.engine = new Engine();
        this.world = new World();
        this.combat = new Combat();
        this.exploration = new Exploration();
        this.interaction = new Interaction();
        this.resourceManagement = new ResourceManagement();
        this.storytelling = new Storytelling();
    }

    public start(): void {
        this.engine.initialize();
        this.world.loadMaps();
        this.engine.run(this.update.bind(this));
    }

    private update(deltaTime: number): void {
        this.combat.update(deltaTime);
        this.exploration.update(deltaTime);
        this.interaction.update(deltaTime);
        this.resourceManagement.update(deltaTime);
        this.storytelling.update(deltaTime);
        this.world.update(deltaTime);
    }
}