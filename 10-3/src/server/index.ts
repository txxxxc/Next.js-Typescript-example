import Express from 'express'
import next from 'next'
import session from './session'
import * as ENV from '../constants'
import console = require('console')

const dev = process.env.NODE_ENV !== 'production'
;(async () => {
  const app = Express()
  const nextApp = next({ dev, dir: './src/client' })
  const handle = nextApp.getRequestHandler()
  await nextApp.prepare()

  session(app)

  app.use((req, res) => {
    handle(req, res)
  })

  app.listen(ENV.APP_PORT, ENV.APP_HOST, (err: Express.Errback) => {
    if (err) throw err
    console.log(`Runnning on http://${ENV.APP_HOST}:${ENV.APP_PORT}`)
  })
})()
