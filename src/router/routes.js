const index = resolve => require.ensure([], () => resolve(require('@/pages/index/index')), 'index')
const detection = resolve => require.ensure([], () => resolve(require('@/pages/detection/index')), 'detection')
const found = resolve => require.ensure([], () => resolve(require('@/pages/found/index')), 'found')
const me = resolve => require.ensure([], () => resolve(require('@/pages/me/index')), 'me')

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/detection',
    name: 'detection',
    component: detection
  },
  {
    path: '/found',
    name: 'found',
    component: found
  },
  {
    path: '/me',
    name: 'me',
    component: me
  }
]

export default routes
