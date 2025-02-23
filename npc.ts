export class NPC {
    name: string;
    dialogue: string[];
    quests: string[];

    constructor(name: string, dialogue: string[], quests: string[]) {
        this.name = name;
        this.dialogue = dialogue;
        this.quests = quests;
    }

    speak(): string {
        return this.dialogue[Math.floor(Math.random() * this.dialogue.length)];
    }

    giveQuest(): string {
        return this.quests.length > 0 ? this.quests[Math.floor(Math.random() * this.quests.length)] : "I have no quests for you.";
    }
}