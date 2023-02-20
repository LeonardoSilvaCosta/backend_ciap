"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const AppError_1 = require("./errors/AppError");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.get('/swagger', (request, response) => {
    return response.sendFile(process.cwd() + "/src/swagger.json");
});
app.get("/docs", (request, response) => {
    return response.sendFile(process.cwd() + "/index.html");
});
app.get('/env', (req, res) => {
    res.json(process.env.BASE_URL);
});
app.get("/logo", (request, response) => {
    return response.sendFile(process.cwd() + "/src/brasao_ciap.png");
});
app.use((0, cors_1.default)());
app.use(routes_1.router);
app.use((err, request, response, next) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }
    ;
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});
app.listen(process.env.PORT || 3334, () => console.log(`Server is running on PORT: ${process.env.PORT}`));
