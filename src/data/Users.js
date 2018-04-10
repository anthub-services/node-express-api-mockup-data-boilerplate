import { rand } from '../helpers/Math'
import { mockDateTime } from '../helpers/Time'

export default [
  {
    userId: 1,
    firstName: 'Super Admin',
    lastName: 'User',
    email: 'superadmin@anthub.io',
    role: 'Super Admin',
    allowedPaths: ['*'],
    excludedPaths: [],
    status: 'active',
    redirect: '',
    createdAt: mockDateTime(7, 9)
  },{
    userId: rand(3456, 4567),
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@anthub.io',
    role: 'Admin',
    allowedPaths: ['*'],
    excludedPaths: ['/admin/settings'],
    status: 'active',
    redirect: '/admin/dashboard',
    createdAt: mockDateTime(4, 6)
  },{
    userId: rand(5678, 6789),
    firstName: 'Default',
    lastName: 'User',
    email: 'user@anthub.io',
    role: 'User',
    allowedPaths: ['/my-profile','/admin/dashboard'],
    excludedPaths: [],
    status: 'pending',
    redirect: 'https://github.com/anthub-services/node-express-api-mockup-data-boilerplate',
    createdAt: mockDateTime(1, 3)
  },{
    userId: rand(6790, 7777),
    firstName: 'Super Admin',
    lastName: 'User Blocked',
    email: 'blocked@anthub.io',
    role: 'User',
    allowedPaths: ['/my-profile','/admin/dashboard'],
    excludedPaths: [],
    status: 'blocked',
    redirect: '',
    createdAt: mockDateTime(0, 2)
  }
]
