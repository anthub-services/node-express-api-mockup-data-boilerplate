const userAgent = [
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6)',
  'AppleWebKit/537.36 (KHTML, like Gecko)',
  'Chrome/62.0.3202.94 Safari/537.36'
].join(' ')
const ipAddress = '127.0.0.1'

export default [
  {
    sessionId: 6,
    user: { userId: 2, name: 'Admin User' },
    userAgent,
    ipAddress,
    createdAt: '2018-04-10T05:58:32.332Z',
    signedOutAt: null
  },{
    sessionId: 5,
    user: { userId: 1, name: 'Super Admin User' },
    userAgent,
    ipAddress,
    createdAt: '2018-04-10T05:08:28.936Z',
    signedOutAt:'2018-04-10T05:58:26.339Z'
  },{
    sessionId: 4,
    user: { userId: 1, name: 'Super Admin User' },
    userAgent,
    ipAddress,
    createdAt: '2018-04-10T05:05:36.333Z',
    signedOutAt: null
  },{
    sessionId: 3,
    user: { userId: 1, name: 'Super Admin User' },
    userAgent,
    ipAddress,
    createdAt: '2018-04-10T00:26:29.382Z',
    signedOutAt: null
  },{
    sessionId: 2,
    user: { userId: 3, name: 'Default User' },
    userAgent,
    ipAddress,
    createdAt: '2018-04-09T23:33:29.985Z',
    signedOutAt: '2018-04-10T00:24:37.826Z'
  },{
    sessionId: 1,
    user: { userId: 1, name: 'Super Admin User' },
    userAgent,
    ipAddress,
    createdAt: '2018-04-09T05:52:08.611Z',
    signedOutAt: '2018-04-09T23:31:19.830Z'
  }
]
