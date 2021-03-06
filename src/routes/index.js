import { authBearer } from '../lib/Sessions'
import C from '../controllers'
import checkAuth from '../middleware/checkAuth'
// import DB from '../models'

export default (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Node Express API Boilerplate!'
  }))

  /* Sessions */
  // app.post('/sign-in', C.Sessions.authenticate)
  // app.post('/sign-out', authBearer(), C.Sessions.signOut)
  // app.get('/verify-token', authBearer(), C.Sessions.verifyToken)

  /* Users */
  // app.get('/users', authBearer(), C.Users.list)
  // app.get('/users/:userId', authBearer(), C.Users.find)
  // app.put('/users/:userId', authBearer(), C.Users.update)
  app.delete('/delete-user/:id', checkAuth, C.Users.destroy_user)
  app.post('/verify-token', checkAuth, C.Users.verify_token)
  app.get('/user-type/:id', C.Users.user_type)
  app.post('/login', C.Users.login)

  /* Students */
  app.post('/register-student', C.Users.create_student)
  app.put('/update-student/:id', checkAuth, C.Users.update_student)
  // app.delete('/delete-student/:id', checkAuth, C.Users.destroy_student)
  // app.put('/update-student/:id', C.Users.update_student)

  /* Companies */
  app.post('/register-company', C.Users.create_company)
  app.put('/update-company/:id', checkAuth, C.Users.update_company)

  /* Schools */
  app.post('/register-school', C.Users.create_school)
  app.put('/update-school/:id', checkAuth, C.Users.update_school)

  /* Tests */
  app.get('/tests', C.Tests.list)
  app.get('/tests/custom-method', C.Tests.customMethod) // Should be placed before other requests with dynamic values
  app.post('/tests', C.Tests.create)
  app.get('/tests/:id', C.Tests.find)
  app.patch('/tests/:id', C.Tests.update)
  app.put('/tests/:id', C.Tests.update)
  app.delete('/tests/:id', C.Tests.destroy)

  /* Listings */
  app.get('/listings', checkAuth, C.Listings.list)
  app.post('/listings', checkAuth, C.Listings.create)
  app.get('/listings/:id', checkAuth, C.Listings.find)
  app.put('/listings/:id', checkAuth, C.Listings.update)
  app.delete('/listings/:id', checkAuth, C.Listings.destroy)
  app.get('/company-listings/:id', checkAuth, C.Listings.findCompanyListings)

  /* Companies */
  app.get('/companies', checkAuth, C.Companies.list)
  app.post('/companies', checkAuth, C.Companies.create)
  app.get('/companies/:id', checkAuth, C.Companies.find)
  app.put('/companies/:id', checkAuth, C.Companies.update)
  app.delete('/companies/:id', checkAuth, C.Companies.destroy)

  /* Cities */
  app.get('/cities', checkAuth, C.Cities.list)
  app.post('/cities', checkAuth, C.Cities.create)
  app.get('/cities/:id', checkAuth, C.Cities.find)
  app.put('/cities/:id', checkAuth, C.Cities.update)
  app.delete('/cities/:id', checkAuth, C.Cities.destroy)

  /* Countries */
  app.get('/countries', checkAuth, C.Countries.list)
  app.post('/countries', checkAuth, C.Countries.create)
  app.get('/countries/:id', checkAuth, C.Countries.find)
  app.put('/countries/:id', checkAuth, C.Countries.update)
  app.delete('/countries/:id', checkAuth, C.Countries.destroy)

  /* ProfileStudents */
  app.get('/profile-students', checkAuth, C.Students.list)
  app.get('/profile-students/:id', checkAuth, C.Students.find)
  app.post('/profile-students/:id', checkAuth, C.Students.create)
  app.put('/profile-students/:id', checkAuth, C.Students.update)
  app.delete('/profile-students/:id', checkAuth, C.Students.destroy)
}


