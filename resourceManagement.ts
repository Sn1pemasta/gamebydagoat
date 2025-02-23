export class ResourceManagement {
    private inventory: Map<string, number>;
    private resources: Map<string, number>;

    constructor() {
        this.inventory = new Map();
        this.resources = new Map();
    }

    gatherResource(resource: string, amount: number): void {
        const currentAmount = this.resources.get(resource) || 0;
        this.resources.set(resource, currentAmount + amount);
    }

    addToInventory(item: string, quantity: number): void {
        const currentQuantity = this.inventory.get(item) || 0;
        this.inventory.set(item, currentQuantity + quantity);
    }

    removeFromInventory(item: string, quantity: number): boolean {
        const currentQuantity = this.inventory.get(item);
        if (currentQuantity && currentQuantity >= quantity) {
            this.inventory.set(item, currentQuantity - quantity);
            return true;
        }
        return false;
    }

    craftItem(item: string, requiredResources: Map<string, number>): boolean {
        for (const [resource, amount] of requiredResources) {
            if ((this.resources.get(resource) || 0) < amount) {
                return false;
            }
        }

        for (const [resource, amount] of requiredResources) {
            this.resources.set(resource, (this.resources.get(resource) || 0) - amount);
        }

        this.addToInventory(item, 1);
        return true;
    }

    getInventory(): Map<string, number> {
        return this.inventory;
    }

    getResources(): Map<string, number> {
        return this.resources;
    }
}