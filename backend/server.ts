import {MemoryStore} from "./src/store/memory-store";
import {Store} from "./src/domain/store";
import {AnalyticsResults} from "./src/domain/analytics-results";

const express = require('express')
const app = express()
const port = 6002

const store = new MemoryStore()

app.get('/health', (req, res) => {
  res.send({
    healthy: true
  })
})

app.get('api/v1/rooms', (req, res) => {
  res.send('This endpoint should return ids to all rooms')
})

app.get('api/v1/rooms/{roomId}/messages', (req, res) => {
  res.send('This endpoint should return all messages from the room')
})



app.get('api/v1/analytics', (req, res) => {
  const roomsIds = req.query.param.roomsIds
  let result: AnalyticsResults = {
    averageNumberOfMessagesPerRoom: getAverageNumberOfMessagesForRooms(store, roomsIds),
    medianNumberOfMessagesPerRoom: getMedianNumberOfMessagesForRooms(store, roomsIds)
  };
  res.send(result)
})

export const getAverageNumberOfMessagesForRooms = (store: Store, roomsIds: string[]): number => {
  return 0
}

export const getMedianNumberOfMessagesForRooms = (store: Store, roomsIds: string[]): number => {
  return 0
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
