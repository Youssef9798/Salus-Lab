const ObjectID = require("mongodb").ObjectID;
const { ObjectId } = require("mongodb");

class UsersStore {
  async listUsers(req, reply) {
    const users = this.mongo.db.collection("users");
    const result = await users.find({}).toArray();
    console.log(result);
    reply.send(result);
  }
  
  async addUser(req, reply) {
    try {
      const users = this.mongo.db.collection("users");
      const { username, email, password } = req.body;
      const data = { username, email, password };
      const existUser = await users.findOne({email: req.body.email});
      if(existUser){
        return reply.code(201).send({status: 409, msg: 'User Already Exist'})
      }
      const result = await users.insertOne(data);
      reply.code(201).send({status: 201, data: result});
    } catch( err ) {
      throw new Error(`Failed to create the user with the following error: ${err}`)
    }
  }

  async login(req, reply) {
    try {
      const users = this.mongo.db.collection("users");
      const result = await users.findOne({ email: req.body.email });
      if (result) {
        return reply.code(201).send({status: 201, data: result});
      }
      reply.code(201).send({status: 400, msg: "Not found" });

    } catch (err) {
      throw new Error(`Failed to find the user with the following error: ${err}`)
    }
  }

  async findOne(req, reply) {
    try {
      const users = this.mongo.db.collection("users");
      const result = await users.findOne({ _id: ObjectId(req.params.id) });
      if (result) {
        return reply.code(201).send({status: 201, data: result});
      }
      reply.code(201).send({status: 400, msg: "Not found" });

    } catch (err) {
      throw new Error(`Failed to find the user with the following error: ${err}`)
    }
  }
}

module.exports = UsersStore