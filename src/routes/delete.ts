import { Router, Request, Response } from "express";
import { deleteClub } from "../services/deleteClub";

const routerDelete = Router();
routerDelete.get("/:id/delete", (req: Request, res: Response): any => {
  res.render("delete", {
    layout: "layout",
    id: req.params.id,
  });
});
routerDelete.post("/:id/delete", (req: Request, res: Response): any => {
  const file: string = "./data/equipos.json";
  const id: number = Number(req.params.id);
  console.log(id);
  deleteClub(file, id);
});
export { routerDelete };
