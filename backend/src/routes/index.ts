import { Router } from "express";

const routes = Router();

routes.get("/", (_request, response) => {
  response.status(200).json({
    message: "API AMANA funcionando!",
  });
});

routes.get("/health", (_request, response) => {
  response.status(200).json({
    status: "ok",
  });
});

export { routes };
