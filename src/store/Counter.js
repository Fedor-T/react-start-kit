import _ from 'lodash'
import {EventEmitter} from 'fbemitter'

var Counter = function () {
  this.count = 0
}

Counter.prototype = new EventEmitter()

_.extend(Counter.prototype, {
  increment () {
    this.count++
    this.emit('change')
  }
})

export default new Counter()
