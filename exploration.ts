export class Exploration {
    private playerPosition: { x: number; y: number };
    private discoveredAreas: Set<string>;

    constructor() {
        this.playerPosition = { x: 0, y: 0 };
        this.discoveredAreas = new Set();
    }

    move(direction: string): void {
        switch (direction) {
            case 'up':
                this.playerPosition.y -= 1;
                break;
            case 'down':
                this.playerPosition.y += 1;
                break;
            case 'left':
                this.playerPosition.x -= 1;
                break;
            case 'right':
                this.playerPosition.x += 1;
                break;
            default:
                console.log('Invalid direction');
        }
        this.checkForHiddenAreas();
    }

    private checkForHiddenAreas(): void {
        const areaKey = `${this.playerPosition.x},${this.playerPosition.y}`;
        if (!this.discoveredAreas.has(areaKey)) {
            this.discoveredAreas.add(areaKey);
            console.log(`Discovered a new area at (${this.playerPosition.x}, ${this.playerPosition.y})`);
        }
    }

    getPlayerPosition(): { x: number; y: number } {
        return this.playerPosition;
    }

    getDiscoveredAreas(): Set<string> {
        return this.discoveredAreas;
    }
}