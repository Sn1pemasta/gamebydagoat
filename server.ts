import { Server as HttpServer } from 'http';
import { Server as SocketServer } from 'socket.io';

class Server {
    private httpServer: HttpServer;
    private io: SocketServer;

    constructor(port: number) {
        this.httpServer = new HttpServer();
        this.io = new SocketServer(this.httpServer);

        this.initialize();
        this.httpServer.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }

    private initialize() {
        this.io.on('connection', (socket) => {
            console.log('A player connected:', socket.id);

            socket.on('disconnect', () => {
                console.log('A player disconnected:', socket.id);
            });

            // Additional event listeners for game state synchronization can be added here
        });
    }

    public broadcast(event: string, data: any) {
        this.io.emit(event, data);
    }
}

export default Server;