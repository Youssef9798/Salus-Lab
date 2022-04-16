const app = require('fastify')({logger: true})
const cors = require('cors')
app.register(require('fastify-mongodb'), {
  url: 'mongodb://localhost:27017/saluslap'
})

app.register(require('fastify-express')).after(() => {
  // app.use(express.urlencoded({extended: false})) // for Postman x-www-form-urlencoded
  // app.use(express.json())
  app.use(cors({ origin: true }))
  app.express.disabled('x-powered-by')
  return app
})

app.register(require('fastify-jwt'), {
  secret: 'supersecret'
})

app.register(require("fastify-cors"), {
  origin: "*",
  methods: ["POST", "GET", "PUT", "DELETE"]
});

app.get('/', async (req, res) => {
  
  // const docs = await salusCollection.find().toArray()
	res.redirect('/users/login')
  
})

app.register(require("./routes/users"));

app.listen(5000, (err, address) => {
  if(err) {
    app.log.error(err)
    process.exit(1);
  }
  app.log.info(`server is listening on ${address}`)
})