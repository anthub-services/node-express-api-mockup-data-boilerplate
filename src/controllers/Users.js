import _ from 'lodash'
import { fetchData, pages, findData } from '../helpers/Data'
import data from '../data/Users'

export default {
  list(req, res) {
    setTimeout(function() {
      res.status(200).send({
        rows: fetchData(req.query, {
          data,
          dateKey: 'createdAt',
          sorted: { userId: 'asc' },
          filtered: { match: ['firstName', 'lastName'] }
        }),
        pages: pages(req.query)
      })
    }, 1000)
  },

  create(req, res) {
    let body = _.clone(req.body)
    const user = findData(data, { email: body.email })

    if (user)
      return setTimeout(function() {
        res.status(401).send({ message: 'Email already exists.'})
      }, 1500)

    body['userId'] = data.slice(-1)[0].userId  + 1
    data.push(body)

    setTimeout(function() { res.status(201).send() }, 1500)
  },

  find(req, res) {
    let status = 202
    const user = findData(data, { userId: parseInt(req.params.userId) })

    if (!user) status = 404

    setTimeout(function() {
      res.status(status).send(user)
    }, 1500)
  },

  update(req, res) {
    const userId = parseInt(req.params.userId)
    let status = 201
    let user = findData(data, { userId })
    let message

    if (!user) status = 404

    user = findData(data, { email: req.body.email })

    if (user && user.userId !== userId) {
      status = 401
      message = { message: 'Email already exists.' }
    }

    setTimeout(function() {
      res.status(status).send(message)
    }, 1500)
  },

  destroy(req, res) {
    const user = findData(data, { userId: parseInt(req.params.userId) })

    if (!user) return res.status(404).send()

    setTimeout(function() {
      res.status(200).send()
    }, 1500)
  }
}
