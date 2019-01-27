const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const app = express();
const port = 3000;


app.get('/getUserInfo', (req, res) => {
  const userId = req.params["user"];
  MongoClient.connect(url,{ useNewUrlParser: true })
  .then((db) => {
    const dbo = db.db(userId);
    dbo.collection("activity").find({}, projection: {workout: 1}).toArray((err, result) => {
      if (err) throw err;
      const size = result.length();
      const value = {};
      for(int i = 0; i < size; i++) {
        value[result[i]] += 1;
      }
      res.send(value);
      db.close();
    })
  })
  .catch((err) => {
    throw err;
  })
})
app.get('/wow', (req, res) => res.send('Hello wwwww(TOny) World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

MongoClient.connect(url,{ useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    const myobj = { name: "Company Inc", address: "JOgjwau 37" };
    dbo.collection("customers").insertOne(myobj, (err, res) => {
      if (err) throw err;
      console.log("Inserted" + res.insertedCount);
      db.close();
    });
});
