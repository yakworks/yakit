// @ts-nocheck
/* eslint-disable */
import mix from '../mix-it-with'
import {expect as x} from '@jest/globals'

describe('mix with objects', () => {
  test('should merge objects or functions', () => {

    const master = { a:1 }

    const obj1 = { a:2, b:2 }
    const obj2 = { a:3, b:3 }

    const mixed = mix(master).with(obj1, obj2)

    x(mixed).toEqual(master)
    x(mixed).toEqual({a:1, b:2})

  })

   test('defaults', () => {

    const master = { a:1 }

    const obj1 = { a:2, b:2 }
    const obj2 = { a:3, b:3, c:4 }

    const mixed = mix(master).defaults(obj1, obj2)

    x(mixed).toEqual(master)
    x(mixed).toEqual({a:1, b:2, c:4})

  })

  test('extend', () => {

    const master = { a:1, b:1 }

    const extra = { a:2, c:2}
    const extra2 = { a:2, c:3}

    const mixed = mix(master).extend(extra, extra2)

    x(mixed).toEqual(master)
    x(mixed).toEqual({a:2, b:1, c:3})

  })

})


