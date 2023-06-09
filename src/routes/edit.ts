import { Router, Request, Response } from "express";
import { createClub } from "../services/createClub";
import { classClub } from "../entities/classClub";
import * as fs from "node:fs";
import { selectClub } from "../services/selectClub";
import { deleteClub } from "../services/deleteClub";
import { Club } from "../interfaces/club";
import { createNewClub } from "../services/createNewClub";
import { saveClub } from "../services/saveClub";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads/imagenes");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const routerEdit = Router();

routerEdit.get("/:id/edit", (req: Request, res: Response): any => {
  const clubes = JSON.parse(fs.readFileSync("./data/equipos.json", "utf-8"));
  res.render("edit", {
    layout: "layout",
    club: createClub(Number(req.params.id), classClub, clubes, selectClub),
  });
});
routerEdit.post(
  "/:id/edit",
  upload.single("crestUrl"),
  (req: Request, res: Response): any => {
    const file: string = "./data/equipos.json";
    const id: number = Number(req.params.id);
    console.log(id);
    const body: any = req.body;
    console.log(body);
    const img: any = req.file?.filename;
    console.log(img);
    const club: Club = createNewClub(classClub, body, img);
    deleteClub(file, id);
    saveClub(file, club);
  }
);
export { routerEdit };
