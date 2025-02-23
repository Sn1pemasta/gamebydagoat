export class Enemy {
    constructor(name, health, attackPower, defense) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.defense = defense;
        this.isAlive = true;
    }

    takeDamage(amount) {
        const damage = Math.max(0, amount - this.defense);
        this.health -= damage;
        if (this.health <= 0) {
            this.isAlive = false;
        }
        return damage;
    }

    attack(target) {
        if (this.isAlive) {
            const damageDealt = target.takeDamage(this.attackPower);
            return damageDealt;
        }
        return 0;
    }

    getStatus() {
        return {
            name: this.name,
            health: this.health,
            isAlive: this.isAlive
        };
    }
}