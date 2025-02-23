export class WorldSystem {
    private timeOfDay: string;
    private weather: string;

    constructor() {
        this.timeOfDay = "day"; // Initial time of day
        this.weather = "clear"; // Initial weather condition
    }

    public updateWorldDynamics() {
        this.updateTimeOfDay();
        this.updateWeather();
    }

    private updateTimeOfDay() {
        // Logic to change time of day
        const currentHour = new Date().getHours();
        this.timeOfDay = currentHour >= 6 && currentHour < 18 ? "day" : "night";
    }

    private updateWeather() {
        // Logic to change weather conditions
        const weatherConditions = ["clear", "rainy", "stormy", "foggy"];
        this.weather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    }

    public getCurrentTimeOfDay(): string {
        return this.timeOfDay;
    }

    public getCurrentWeather(): string {
        return this.weather;
    }
}