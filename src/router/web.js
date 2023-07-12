import express from "express";
import chatboxController from "../controller/chatboxController";

let router = express.Router();

let initWeb = (app) => {
    router.get("/", chatboxController.getHomePage);

    router.get("/webhook", chatboxController.getWebhook);
    router.post("/webhook", chatboxController.postWehbook);

    return app.use("/", router)
};
module.exports = initWeb