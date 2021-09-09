import express, {Express} from "express";
import { Response, Request } from "express"
import path from "path";
import mongoose from 'mongoose'
const app: Express = express();
import route from "./routes/route"

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(route);

app.use(express.static(path.join(__dirname, "public")));

// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, 'client/build')));

//     // Handle React routing, return all requests to React app
//     app.get('*', function (req, res) {
//         res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//     });
// }

app.get("/", async (req: Request, res: Response): Promise<void> => {
  res.send("Hello Ninjas!");
});

//database
const connection: string = "mongodb://localhost:27017/ServiceNinja";
const options: object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(connection,options);

mongoose.connection.on("connected", () => {
  console.log("connected to database");
});

app.listen(port, () => {
  console.log("Server is connected at " + port);
});