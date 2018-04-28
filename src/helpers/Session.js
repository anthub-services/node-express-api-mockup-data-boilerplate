import _ from 'lodash'

export function hash(index) {
  const hashList = process.env.HASH.split('.')

  if (index) index = parseInt(index.toString().charAt(index.toString().length - 1), 10)
  else index = _.random(0, hashList.length - 1)

  return [
    hashList[index],
    [_.random(1111111, 9999999), index].join('')
  ]
}
