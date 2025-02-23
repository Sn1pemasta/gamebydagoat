export class ProgressionSystem {
    private experiencePoints: number;
    private level: number;
    private skills: Map<string, number>;

    constructor() {
        this.experiencePoints = 0;
        this.level = 1;
        this.skills = new Map();
    }

    public gainExperience(points: number): void {
        this.experiencePoints += points;
        this.checkLevelUp();
    }

    private checkLevelUp(): void {
        const experienceToLevelUp = this.calculateExperienceToLevelUp();
        while (this.experiencePoints >= experienceToLevelUp) {
            this.experiencePoints -= experienceToLevelUp;
            this.level++;
            this.onLevelUp();
        }
    }

    private calculateExperienceToLevelUp(): number {
        return this.level * 100; // Example formula for experience needed to level up
    }

    private onLevelUp(): void {
        console.log(`Level Up! You are now level ${this.level}.`);
        // Additional logic for leveling up, such as increasing stats or unlocking skills
    }

    public learnSkill(skillName: string): void {
        if (!this.skills.has(skillName)) {
            this.skills.set(skillName, 1); // Start skill at level 1
            console.log(`Learned new skill: ${skillName}`);
        } else {
            console.log(`You already know the skill: ${skillName}`);
        }
    }

    public getLevel(): number {
        return this.level;
    }

    public getExperiencePoints(): number {
        return this.experiencePoints;
    }

    public getSkills(): Map<string, number> {
        return this.skills;
    }
}