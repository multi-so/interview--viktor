import {Store} from "../domain/store";
import {Room} from "../domain/room";

export class MemoryStore implements Store {
    getRooms(): Promise<Room[]> {
        return Promise.resolve([]);
    }
}
