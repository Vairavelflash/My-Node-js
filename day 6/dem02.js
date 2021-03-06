const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
    "mongodb://localhost:27017/";
const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        const database = client.db("sample_mflix");
        const movies = database.collection("movies");
        // create a document to be inserted
        const doc = { name: "Red", town: "kanto" };
        const result = await movies.insertOne(doc);
        console.log(
            `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
        );
    } finally {
        await client.close();
    }
}
run().catch(console.dir);