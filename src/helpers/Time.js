import Moment from 'moment'
import { rand } from './Math'

export function mockDateTime(min, max) {
  return Moment().subtract(rand(min, max), 'days')
                 .subtract(rand(), 'hours')
                 .subtract(rand(), 'minutes')
                 .subtract(rand(), 'seconds')
                 .format('YYYY-MM-DD HH:mm:ss')
}
