import {MemoryStore} from "./src/store/memoryStore";
import {Store} from "./src/domain/store";

const express = require('express')
const app = express()
const port = 6002

const store = new MemoryStore()

app.get('/health', (req, res) => {
  res.send({
    healthy: true
  })
})

app.get('api/v1/room/{roomId}/messages', (req, res) => {
  res.send('This endpoint should return all messages from the room')
})



app.get('api/v1/analytics', (req, res) => {
  const roomsIds = req.query.param.roomsIds
  res.send({
    averageNumberOfMessagesPerRoom: getAverageNumberOfMessagesForRooms(store, roomsIds)
  })
})

export const getAverageNumberOfMessagesForRooms = (store: Store, roomsIds: string[]): number => {
  return 0
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
