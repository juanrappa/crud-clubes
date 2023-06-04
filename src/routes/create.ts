import { Router, Request, Response } from "express";

const routerCreate = Router();
routerCreate.get("/create", (req: Request, res: Response): any => {
  res.render("create", {
    layout: "layout",
  });
});

export { routerCreate };
