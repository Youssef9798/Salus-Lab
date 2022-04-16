const UsersStore = require("../controllers/users.controller");

const users = new UsersStore();

async function routes(app, options) {
  app.get("/users", users.listUsers);
  app.post("/users/register", users.addUser);
  app.post("/users/login", users.login)
  app.get("/users/:id", users.findOne)
}
module.exports = routes;