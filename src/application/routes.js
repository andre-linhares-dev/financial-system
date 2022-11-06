import Router from "express";

import transactionsRoutes from "../routes/TransactionsRoutes.js";
// import todosRoutes from "../routes/TodosRoutes.js";

const routes = Router();

// Métodos HTTP
// GET - Buscar/listar informações do nosso servidor
// POST - Publicar informações
// PUT - Atualização das informações
// PATCH - Atualização parcial das informações
// DELETE - Deleção da informação

routes.use(transactionsRoutes);

export default routes;



















// import { Router } from "express";

// const routes = Router();

// routes.get("/", (request, response) => {
//     response.status(200).json({
//       message: "OK" 
//     });
// });

// const body = {
//     titulo: "Receita website criado",
//     valor: 4000,
//     categoria: "Entrada",
//     data: "14/10/2022"
// };

// routes.post("/transactions", (request, response) => {
//         console.log(request.body);
//         response.sendStatus(201);
// });

// export default routes;