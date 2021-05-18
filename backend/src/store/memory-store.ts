import {Message} from "../domain/message";
import {Store} from "../domain/store";



export class MemoryStore implements Store {
    getRoomMessages(roomId: string): Promise<Message[]> {
        return Promise.resolve([]);
    }
}
