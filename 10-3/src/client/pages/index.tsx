import React from 'react'
import { ExNextContext } from 'next'
import Head from 'next/head'
import Component from '../components/index'

type Props = {
  title: string
  count: number
}

class App extends React.Component<Props> {
  static async getInitialProps({ req }: ExNextContext): Promise<Props> {
    if (!req) return { title: 'No Session', count: 1 }
    if (!req.session) return { title: 'No Session', count: 1 }
    if (req.session === undefined) {
      if (req.session.count === undefined) {
        req.session.count = 0
      }
      req.session.count++
      return { title: 'Home', count: req.session.count }
    }
  }
  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <Component count={this.props.count} />
      </>
    )
  }
}

export default App
