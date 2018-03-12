import { rand } from '../helpers/Math'
import { mockDateTime } from '../helpers/Time'

export default [
  {
    userId: rand(1234, 2345),
    firstName: 'Ricky',
    lastName: 'Hurtado',
    email: 'ricky@anthub.io',
    role: 'Super Admin',
    allowedPaths: ['*'],
    excludedPaths: [],
    status: 'active',
    createdAt: mockDateTime(7, 9)
  },{
    userId: rand(3456, 4567),
    firstName: 'Jun',
    lastName: 'Salvador',
    email: 'jun@anthub.io',
    role: 'Admin',
    allowedPaths: ['*'],
    excludedPaths: ['/admin/settings'],
    status: 'blocked',
    redirect: '/admin/dashboard',
    createdAt: mockDateTime(4, 6)
  },{
    userId: rand(5678, 6789),
    firstName: 'Wilson',
    lastName: 'Viray',
    email: 'wilson@anthub.io',
    role: 'User',
    allowedPaths: ['/my-profile','/admin/dashboard'],
    excludedPaths: [],
    status: 'pending',
    redirect: 'https://github.com/anthub-services/node-express-api-mockup-data-boilerplate',
    createdAt: mockDateTime(1, 3)
  }
]
