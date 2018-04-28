import JWT from 'jsonwebtoken'
import _ from 'lodash'
import * as Data from '../helpers/Data'
import * as Session from '../helpers/Session'
import data from '../data/Sessions'

export default {
  list(req, res) {
    setTimeout(function() {
      res.status(200).send({
        rows: Data.fetchData(req.query, {
          data,
          dateKey: 'createdAt',
          sorted: { sessionId: 'desc' },
          filtered: {
            match: ['user', 'userAgent'],
            objectKey: { user: 'name' }
          }
        }),
        pages: Data.pages(req.query)
      })
    }, 1000)
  },

  authenticate(req, res) {
    const { email, password } = verifyToken(res, req.body)
    const invalidMessage = "The email or password you entered doesn't match any account."

    let user = {
      userId: 0,
      firstName: '',
      lastName: '',
      status: 'active',
      redirect: '',
      allowedPaths: [],
      excludedPaths: []
    }
    let status = 200
    let responseData = {}

    if (password === 'password') {
      switch (email) {
        case 'superadmin@email.com':
          user = {
            userId: 1,
            firstName: 'Super Admin',
            lastName: 'User',
            allowedPaths: ['*']
          }
          break
        case 'admin@email.com':
          // No access settings page for admin user
          user = {
            userId: 2,
            firstName: 'Admin',
            lastName: 'User',
            status: 'active',
            allowedPaths: ['*'],
            excludedPaths: [
              '/admin/users/delete'
            ]
          }
          break
        case 'user@email.com':
          user = {
            userId: 3,
            firstName: 'Common',
            lastName: 'User',
            status: 'active',
            allowedPaths: [
              '/my-profile',
              '/admin',
              '/admin/dashboard',
              '/admin/users',
              '/admin/users/:userId',
              '/admin/settings'
            ]
          }
          break
        case 'referrer@email.com':
          user = {
            userId: 4,
            firstName: 'Referrer',
            lastName: 'User',
            // Internal redirection (without domain) for users if no referrer found in the sign in page
            redirect: '/redux',
            allowedPaths: [
              '/my-profile',
              '/admin',
              '/admin/dashboard'
            ]
          }
          break
        case 'redirect@email.com':
          user = {
            userId: 5,
            firstName: 'Redirect',
            lastName: 'User',
            // External redirection (with http/https) for users if no referrer found in the sign in page
            redirect: 'https://github.com/rickyhurtado/node-api-mockup-data-boilerplate',
            allowedPaths: [
              '/my-profile',
              '/admin',
              '/admin/dashboard'
            ]
          }
          break
        case 'blocked@email.com':
          user = {
            userId: 6,
            firstName: 'Blocked',
            lastName: 'User',
            status: 'blocked'
          }
          status = 401
          // With custom message
          responseData = { message: 'Your account is blocked. Please contact the administrator.' }
          break
        default:
          status = 401
          responseData = { message: invalidMessage }
      }

      if (status === 200) {
        const hash = Session.hash()
        const date = new Date()
        const token = JWT.sign({ userId: user.userId, date }, process.env.JWT_SECRET, { expiresIn: 86400 })
        const data = JWT.sign(_.merge({}, user, { date }), hash[0], { expiresIn: 86400 })

        responseData = _.merge({}, { token }, { data }, { redirect: user.redirect, tkid: hash[1] })
      }
    } else {
      status = 401
      responseData = { message: invalidMessage }
    }

    res.status(status).send(responseData)
  },

  signOut(req, res) {
    res.status(200).send()
  },

  verifyToken(req, res) {
    // User signed out already or token is expired
    // return res.status(401).send()

    res.status(200).send()
  }
};

function verifyToken(res, body) {
  const { token, tkid } = body

  return JWT.verify(
    token,
    Session.hash(tkid)[0],
    function(errors, decoded) {
      if (errors) return res.status(401).end()

      return decoded
    }
  )
}
