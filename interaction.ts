export class Interaction {
    private interactions: Map<string, Function>;

    constructor() {
        this.interactions = new Map();
    }

    public addInteraction(key: string, callback: Function): void {
        this.interactions.set(key, callback);
    }

    public triggerInteraction(key: string, ...args: any[]): void {
        const interaction = this.interactions.get(key);
        if (interaction) {
            interaction(...args);
        } else {
            console.warn(`No interaction found for key: ${key}`);
        }
    }

    public removeInteraction(key: string): void {
        this.interactions.delete(key);
    }
}