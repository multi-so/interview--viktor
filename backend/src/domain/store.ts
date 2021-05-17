import {Message} from "./message";

export interface Store {
    getRoomMessages: (roomId: string) => Promise<Message[]>
}
