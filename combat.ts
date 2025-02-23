class Combat {
    constructor() {
        this.health = 100;
        this.attackPower = 10;
        this.defensePower = 5;
        this.skills = [];
    }

    attack(target) {
        const damage = Math.max(0, this.attackPower - target.defensePower);
        target.health -= damage;
        return damage;
    }

    defend() {
        this.health += this.defensePower;
    }

    useSkill(skill, target) {
        if (this.skills.includes(skill)) {
            skill.effect(target);
        }
    }

    addSkill(skill) {
        this.skills.push(skill);
    }
}

export default Combat;