"use strict";
// app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
const port = 3000;
// Connexion à la base de données MongoDB Atlas
(0, db_1.connectToDatabase)();
// Vos routes et logique d'application ici...
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
