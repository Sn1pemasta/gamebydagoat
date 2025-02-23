export class Character {
    constructor(name, level = 1, health = 100, mana = 50, skills = []) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.mana = mana;
        this.skills = skills;
        this.experience = 0;
    }

    levelUp() {
        this.level++;
        this.health += 10; // Increase health on level up
        this.mana += 5; // Increase mana on level up
    }

    gainExperience(amount) {
        this.experience += amount;
        if (this.experience >= this.getExperienceToLevelUp()) {
            this.experience -= this.getExperienceToLevelUp();
            this.levelUp();
        }
    }

    getExperienceToLevelUp() {
        return this.level * 100; // Example formula for experience needed to level up
    }

    addSkill(skill) {
        if (!this.skills.includes(skill)) {
            this.skills.push(skill);
        }
    }

    useSkill(skill, target) {
        if (this.skills.includes(skill) && this.mana >= skill.manaCost) {
            this.mana -= skill.manaCost;
            // Implement skill effect on target
        }
    }
}