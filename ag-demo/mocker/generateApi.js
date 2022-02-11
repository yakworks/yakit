const _ = require('lodash')
const MemDataApi = require('@yakit/ag/src/dataApi/MemDataApi')
const REST_DELAY = 100

function generateApi(epoint, data) {
  const store = new MemDataApi(data, REST_DELAY)
  return makeUrls(epoint, store)
}

function makeUrls(epoint, api) {
  return {
    dataApi: api,
    urls: {
      [`GET /api/${epoint}/picklist`]: (req, res) => {
        const { query } = req
        api.picklist(query).then((data) => {
          return res.json(data)
        })
      },

      [`GET /api/${epoint}/:id`]: (req, res) => {
        api.get(req.params.id)
          .then((data) => {
            return res.json(data)
          })
      },

      [`GET /api/${epoint}`]: (req, res) => {
        const { query } = req
        api.search(query).then((data) => {
          return res.json(data)
        })
      },

      [`POST /api/${epoint}/countTotals`]: (req, res) => {
        // const { query } = req
        api.countTotals('amount').then(data => { return res.json(data) })
      },

      [`POST /api/${epoint}`]: (req, res) => {
        const { body } = req
        api.post(body)
          .then((data) => {
            return res.json(data)
          })
      },

      [`PUT /api/${epoint}/:id`]: (req, res) => {
        const { body } = req
        api.put(body)
          .then((data) => {
            return res.json(data)
          })
      },

      [`POST /api/${epoint}/bulkUpdate`]: (req, res) => {
        const { body } = req
        api.bulkUpdate(body)
          .then((data) => {
            return res.json(data)
          })
      },

      [`POST /api/${epoint}/ptp`]: (req, res) => {
        // const { body } = req

        const results = {
          ok: Math.floor((Math.random() * 10) + 1) > 5,
          failed: ['First row failed', 'Third row failed'],
          success: ['First row finished successfully', 'Third row finished successfully'],
          defaultMessage: 'PTP action'
        }
        return res.json(results)
      },

      [`DELETE /api/${epoint}/:id`]: (req, res) => {
        api.remove(req.params.id)
          .then(() => {
            return res.status(204).end()
          })
      }
    }
  }
}

exports.generateApi = generateApi
exports.makeUrls = makeUrls
