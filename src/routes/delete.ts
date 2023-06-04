import { Router, Request, Response } from "express";
import { deleteClub } from "../services/deleteClub";

const routerDelete = Router();
routerDelete.get("/:id/delete", (req: Request, res: Response): any => {
  console.log(req.params.id);
  res.render("delete", {
    layout: "layout",
  });
});
routerDelete.post("/:id/delete", (req: Request, res: Response): any => {
  const file: string = "./data/equipos.json";
  const id: any = req.body;
  res.send(id);
  console.log(id);
});
export { routerDelete };
