const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, "text.txt"), {encoding: "utf-8", highWaterMark: 5})

const ws = fs.createWriteStream(path.join(__dirname, "newfile.txt"), {encoding: "utf-8"})

ws.on("error", err => {
  console.error(err)
})

ws.on("close", () => {
  console.log("Finished writing!")
})

ws.write("This is new content")
ws.end();