export class Storytelling {
    private dialogues: Map<string, string[]>;
    private quests: Map<string, { description: string; completed: boolean }>;

    constructor() {
        this.dialogues = new Map();
        this.quests = new Map();
    }

    addDialogue(character: string, dialogue: string) {
        if (!this.dialogues.has(character)) {
            this.dialogues.set(character, []);
        }
        this.dialogues.get(character)?.push(dialogue);
    }

    getDialogue(character: string): string[] | undefined {
        return this.dialogues.get(character);
    }

    addQuest(questName: string, description: string) {
        this.quests.set(questName, { description, completed: false });
    }

    completeQuest(questName: string) {
        const quest = this.quests.get(questName);
        if (quest) {
            quest.completed = true;
        }
    }

    getQuestStatus(questName: string) {
        return this.quests.get(questName);
    }

    getAllQuests() {
        return Array.from(this.quests.entries());
    }
}