import { $http } from './utils'

const test = (obj) => {
  return $http({
    url: 'http://192.168.20.12/api/v1.0/d9a79f9ca514',
    data: obj
  })
}

export default {
  test
}
