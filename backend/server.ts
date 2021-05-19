import {MemoryStore} from "./src/store/memory-store";
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

app.get('api/v1/analytics', (req, res) => {
  let result: AnalyticsResults = {
    medianNumberOfMessagesPerRoom: getMedianNumberOfMessagesForRooms(store)
  };
  res.send(result)
})

export const getMedianNumberOfMessagesForRooms = (store) => {
  return 0
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
