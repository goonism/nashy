import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default class extends React.Component {

  static async getInitialProps({query}) {
    return {
      action: query.action || null,
      type: query.type || null,
      service: query.service || null
    }
  }

  render() {
    if (this.props.action == 'signin' && this.props.type == 'oauth') {
      return(
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <div>
            <h1>Unable to sign in</h1>
            <p>An account associated with your email address already exists.</p>
            <p><Link href="/auth"><a>Sign in with email or another service</a></Link></p>
          </div>
          <div>
            <div>
              <div>
                <h4>Why am I seeing this?</h4>
                <p>
                  It looks like you might have already signed up using another service.
                </p>
                <p>
                  To protect your account, if you have perviously signed up
                  using another service you must link accounts before you
                  can use a different service to sign in.
                </p>
                <h4>How do I fix this?</h4>
                <p>
                  To sign in using another service, first sign in using your email address then link accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.props.action == 'signin' && this.props.type == 'token-invalid') {
      return(
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <div>
            <h1>Link not valid</h1>
            <p>This sign in link is no longer valid.</p>
            <p><Link href="/auth"><a>Get a new sign in link</a></Link></p>
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <div>
            <h1>Error signing in</h1>
            <p>An error occured while trying to sign in.</p>
            <p><Link href="/auth"><a>Sign in with email or another service</a></Link></p>
          </div>
        </div>
      )
    }
  }
}
