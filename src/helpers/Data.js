import _ from 'lodash'

let result

export function fetchData(query, options) {
  let sorted = {}

  if (options.sorted && Object.keys(options.sorted).length && !query.sorted)
    sorted = options.sorted

  if (query.sorted)
    sorted = queryStringToObject(query.sorted)

  filterData(query, options)
  sortData(sorted)

  const { page, limit } = query

  return _.chunk(result, limit)[page - 1]
}

export function pages({ limit }) {
  return Math.ceil(result.length / limit)
}

export function findData(data, query) {
  return _.find(data, query)
}

export function updateData(data, query, newData) {
  const index = _.findIndex(data, query)

  data.splice(index, 1, newData)

  return data
}

function filterData({ filtered }, options) {
  filtered = queryStringToObject(filtered)

  const filterKeys = Object.keys(filtered)

  if (filterKeys.length) {
    result = _.filter(options.data, function(d) {
      const date = new Date(d[options.dateKey])

      if (filtered.dateFrom) {
        const from = new Date(decodeQueryString(filtered.dateFrom))

        if (date < from) return false
      }

      if (filtered.dateTo) {
        const to = new Date(decodeQueryString(filtered.dateTo))

        if (date > to) return false
      }

      let filterResult = []

      if (filterKeys.length) {
        for (const key in d) {
          const type          = typeof(d[key])
          const filteredValue = decodeQueryString(filtered[key])
          let   dataValue     = d[key]

          if (filtered[key]) {
            if (_.indexOf(options.filtered.match, key) > -1) {
              dataValue = type === 'object' ? dataValue[options.filtered.objectKey[key]] : dataValue

              const filteredValues = filteredValue.toLowerCase()
                                                  .split(' ')

              const dataValues     = _.compact(dataValue.toLowerCase()
                                                        .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, ' ')
                                                        .split(' '))

              let found = true

              filteredValues.map(value => {
                if (found && _.indexOf(dataValues, value) < 0) found = false
              })

              if (!found) return false
            }
            else if (type === 'number' && parseInt(filteredValue) !== dataValue)
              return false
            else if (type === 'string' && filteredValue.toLowerCase() !== dataValue.toLowerCase())
              return false
          }
        }
      }

      return true
    })

    return result
  }

  result = options.data
}

function sortData(sorted) {
  const columns = Object.keys(sorted)

  if (columns.length === 0) return

  columns.map(column => {
    result = _.orderBy(result, column, sorted[column])
  })
}

function decodeQueryString(value) {
  return decodeURIComponent(decodeURIComponent(value))
}

function queryStringToObject(params) {
  let object = {}

  if (!params) return object

  params.split(',').map(list => {
    const item = list.split(':')

    return object[item[0]] = item[1]
  })

  return object
}
