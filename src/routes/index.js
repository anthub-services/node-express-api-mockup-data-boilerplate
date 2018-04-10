import C from '../controllers'

export default (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Node Express API Mockup Data Boilerplate!'
  }))

  /* Sessions */
  app.get('/sessions', C.Sessions.list)
  app.post('/sign-in', C.Sessions.authenticate)
  app.post('/sign-out', C.Sessions.signOut)
  app.get('/verify-token', C.Sessions.verifyToken)

  /* Users */
  app.get('/users', C.Users.list)
  app.post('/users', C.Users.create)
  app.put('/users/:userId', C.Users.update)
  app.get('/users/:userId', C.Users.find)
  app.delete('/users/:userId', C.Users.destroy)

  /* Tests */
  app.get('/tests', C.Tests.list)
  app.get('/tests/custom-method', C.Tests.customMethod) // Should be placed before other requests with dynamic values
  app.post('/tests', C.Tests.create)
  app.get('/tests/:id', C.Tests.find)
  app.patch('/tests/:id', C.Tests.update)
  app.put('/tests/:id', C.Tests.update)
  app.delete('/tests/:id', C.Tests.destroy)
}
