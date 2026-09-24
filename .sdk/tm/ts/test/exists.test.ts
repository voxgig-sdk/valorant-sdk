
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ValorantSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ValorantSDK.test()
    equal(testsdk instanceof ValorantSDK, true,
      'ValorantSDK.test() must return a client synchronously')
  })

})
