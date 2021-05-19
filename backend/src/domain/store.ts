import {Room} from "./room";

export interface Store {
    getRooms: () => Promise<Room[]>
}
