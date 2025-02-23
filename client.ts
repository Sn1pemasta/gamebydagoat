export class Client {
    private socket: WebSocket;

    constructor(serverUrl: string) {
        this.socket = new WebSocket(serverUrl);
        this.initialize();
    }

    private initialize() {
        this.socket.onopen = () => {
            console.log("Connected to the server");
        };

        this.socket.onmessage = (event) => {
            this.handleMessage(event.data);
        };

        this.socket.onclose = () => {
            console.log("Disconnected from the server");
        };

        this.socket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };
    }

    private handleMessage(data: string) {
        const message = JSON.parse(data);
        // Handle different message types here
        switch (message.type) {
            case "playerUpdate":
                this.updatePlayer(message.payload);
                break;
            case "chatMessage":
                this.displayChatMessage(message.payload);
                break;
            // Add more cases as needed
        }
    }

    private updatePlayer(payload: any) {
        // Update player state based on the payload
    }

    private displayChatMessage(payload: any) {
        // Display chat message in the game UI
    }

    public sendMessage(type: string, payload: any) {
        const message = JSON.stringify({ type, payload });
        this.socket.send(message);
    }
}