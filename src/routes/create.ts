import { Router, Request, Response } from "express";
import { classClub } from "../entities/classClub";
import { createNewClub } from "../services/createNewClub";
import { saveClub } from "../services/saveClub";
import multer from "multer";
import { Club } from "../interfaces/club";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads/imagenes");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const routerCreate = Router();
routerCreate.get("/create", (req: Request, res: Response): any => {
  res.render("create", {
    layout: "layout",
  });
});
routerCreate.post(
  "/create",
  upload.single("crestUrl"),
  (req: Request, res: Response) => {
    const body: any = req.body;
    const img: any = req.file?.filename;
    const file: string = "./data/equipos.json";
    const club: Club = createNewClub(classClub, body, img);
    saveClub(file, club);
  }
);
export { routerCreate };
