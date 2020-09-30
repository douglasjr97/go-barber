"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
var express_1 = require("express");
var routes = express_1.Router();
//export default routes;
routes.post('/users', function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email;
    var user = {
        name: name,
        email: email,
    };
    return res.json(user);
});
exports.default = routes;
