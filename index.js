
import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import * as child_process from "child_process";

const app = express();
const router = express.Router();
const PORT = 8080;

app.use(bodyParser.json());
app.use("/people", usersRoutes);

app.listen(
    PORT,
    ()=>{
        console.log(`Running On http://localhost:${PORT}`)
    }
)
//app.get("/", (req, res) => res.send("Welcome to the Users API!"));
//app.get("/getSSAPApplicationForGivenFamilySizeTypeStateServer/:size", (req, res) => res.send(req.params.size));
app.get("/getSSAPApplicationForGivenFamilySizeTypeStateServer/:size/:financial/:state/:url", (req, res) => 
{
    let hhSize = req.params.size;
    let hhAppType = req.params.financial;
    let state = req.params.state;
    let url = req.params.url;
    console.log("####url : "+url);
    console.log("#### ***pwd: "+ process.cwd());
   // process.chdir("C:\\iex\\ghix-tools\\test\\GHIX_UI_Automation_Tests")

    console.log("#### ***pwd: "+ process.cwd());

    //child_process.exec("docker run -it localhost:5000/automation npm run test:docker -- --server=nj3auto.eng.vimo.com --state=NJ --tagExpression=\"@SSAP\" --applicationYear=2022", function (err,stdout, stderr){
    //child_process.exec("npm run test:local -- --server=nj1auto.eng.vimo.com --state=NJ --tagExpression=\"@SSAP\" --applicationYear=2022", function (err,stdout, stderr){
   /* child_process.exec("DIR", function (err,stdout, stderr){

        console.log("stdout2");

        if(err) console.error(stderr);
            console.log(stdout);

    });

    res.send(req.params.size+" "+req.params.url);
});*/



app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));
