import express from "express";
import { routerHome } from "./routes/home";
import { routerEdit } from "./routes/edit";
import { routerLook } from "./routes/look";
import { routerDelete } from "./routes/delete";
import { routerCreate } from "./routes/create";
import * as exphbs from "express-handlebars";

const PUERTO = 8080;
const app = express();
const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routerHome);
app.use(routerEdit);
app.use(routerLook);
app.use(routerCreate);
app.use(routerDelete);

app.listen(PUERTO);
console.log(`Escuchando en http://localhost:${PUERTO}`);
