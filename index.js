var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";
const prompt = require("prompt");

prompt.start();
console.log("CRUD on Books database using NodeJS and MongoDB\n");
console.log("1.Insert\n2.Update\n3.Delete\n4.Exit\n");
prompt.get(["choice"], (err, result) => {
  if (err) {
    return onErr(err);
  }
  switch (result.choice) {
    case "1":
      console.log("INSERT");
      prompt.get(["book_id", "name", "author", "price"], (err, result) => {
        if (err) {
          return onErr(err);
        }
        console.log("Data from user: \n");
        console.log("Book Id - " + result.book_id);
        console.log("Name - " + result.name);
        console.log("Author - " + result.author);
        console.log("Price - " + result.price);
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
          if (err) throw err;
          var dbo = db.db("book_db");
          var obj = {
            book_id: result.book_id,
            name: result.name,
            author: result.author,
            price: result.price,
          };
          dbo.collection("books").insertOne(obj, (err, res) => {
            if (err) throw err;
            console.log("Inserted 1 book document !! ");
            db.close();
          });
        });
      });
      break;
    case "2":
      console.log("UPDATE");
      prompt.get(["book_id", "name", "author", "price"], (err, result) => {
        if (err) {
          return onErr(err);
        }
        MongoClient.connect(url,{ useUnifiedTopology: true }, (err, db) => {
          if (err) throw err;
          var dbo = db.db("book_db");
          var query = { book_id: result.book_id };
          var upd_val = {
            $set: {
              book_id: result.book_id,
              name: result.name,
              author: result.author,
              price: result.price,
            }
          };
          dbo.collection("books").updateOne(query, upd_val, (err, res) => {
            if (err) throw err;
            if (res.matchedCount)
              console.log(res.modifiedCount + " Books document Updated!! ");
            else console.log("Key not Found !! ");
            db.close();
          });
        });
      });
      break;
    case "3":
      console.log("DELETE");
      prompt.get(["book_id"], (err, result) => {
        if (err) return onErr(err);
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
          if (err) throw err;
          var dbo = db.db("book_db");
          var query = { book_id: result.book_id };
          dbo.collection("books").deleteOne(query, (err, res) => {
            if (err) throw err;
            if (res.deletedCount)
              console.log(res.deletedCount + " Books document Deleted!! ");
            else console.log("Key not Found !! ");
            db.close();
          });
        });
      });
      break;
    default:
      console.log("EXIT");
  }
});

function onErr(err) {
  console.log(err);
  return 1;
}