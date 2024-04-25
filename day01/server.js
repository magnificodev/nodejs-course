const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const readData = await fsPromises.readFile(
      path.join(__dirname, "text.txt"),
      "utf-8"
    );
    console.log("Read complete!", `Data: ${readData}`)

    await fsPromises.unlink(path.join(__dirname, "newfile1.txt"))
    console.log("Delete complete!")
    
    await fsPromises.writeFile(path.join(__dirname, "newfile.txt"), "This is new data");
    console.log("Write complete!")

    await fsPromises.appendFile(path.join(__dirname, "newfile.txt"), "\nThis is new data added by Magnifico");
    console.log("Append complete!")

    await fsPromises.rename(path.join(__dirname, "newfile.txt"), path.join(__dirname, "newfile1.txt"))
    console.log("Rename complete!")
  } catch (err) {
    console.error(err);
  }
}

fileOps();

// fs.readFile(path.join(__dirname, "text.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log("Read complete!");
// });

// var dataToWrite = "Hey there, this is new data";

// fs.writeFile(path.join(__dirname, "result.txt"), dataToWrite, (err) => {
//   if (err) throw err;
//   console.log("Write complete!");

//   fs.appendFile(path.join(__dirname, "result.txt"), dataToWrite, (err) => {
//     if (err) throw err;
//     console.log("Append complete!");

//     fs.rename(
//       path.join(__dirname, "result.txt"),
//       path.join(__dirname, "new-result.txt"),
//       (err) => {
//         if (err) throw err;
//         console.log("Rename complete!");
//       }
//     );
//   });
// });

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
