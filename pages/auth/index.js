import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import { NextAuth } from 'next-auth/client'

export default class extends React.Component {

  static async getInitialProps({req}) {
    return {
      session: await NextAuth.init({req}),
      linkedAccounts: await NextAuth.linked({req}),
      providers: await NextAuth.providers({req})
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      session: this.props.session
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this)
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleSignInSubmit(event) {
    event.preventDefault()

    if (!this.state.email) return

    NextAuth.signin(this.state.email)
    .then(() => {
      Router.push(`/auth/check-email?email=${this.state.email}`)
    })
    .catch(() => {
      Router.push(`/auth/error?action=signin&type=email&email=${this.state.email}`)
    })
  }

  render() {
    if (this.props.session.user) {
      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <h1>Nashy Signin</h1>
          <p>You are signed in as <span>{this.props.session.user.email}</span>.</p>
          <LinkAccounts
            session={this.props.session}
            linkedAccounts={this.props.linkedAccounts}
            />
          <p>
            <Link href="/"><a>Home</a></Link>
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <SignInButtons providers={this.props.providers}/>
        </div>
      )
    }
  }
}

export class LinkAccounts extends React.Component {
  render() {
    return (
      <div>
        <h4>Link Accounts</h4>
        <div>
          {
            Object.keys(this.props.linkedAccounts).map((provider, i) => {
              return <LinkAccount key={i} provider={provider} session={this.props.session} linked={this.props.linkedAccounts[provider]}/>
            })
          }
        </div>
      </div>
    )
  }
}

export class LinkAccount extends React.Component {
  render() {
    if (this.props.linked === true) {
      return (
        <form method="post" action={`/auth/oauth/${this.props.provider.toLowerCase()}/unlink`}>
          <input name="_csrf" type="hidden" value={this.props.session.csrfToken}/>
          <p>
            <button type="submit">
              Unlink from {this.props.provider}
            </button>
          </p>
        </form>
      )
    } else {
      return (
        <p>
          <a href={`/auth/oauth/${this.props.provider.toLowerCase()}`}>
            Link with {this.props.provider}
          </a>
        </p>
      )
    }
  }
}

export class SignInButtons extends React.Component {
  render() {
    return (
      <React.Fragment>
        {
          Object.keys(this.props.providers).map((provider, i) => {
            return (
              <p key={i}>
                <a href={this.props.providers[provider].signin}>
                  Sign in with {provider}
                </a>
              </p>
              )
          })
        }
      </React.Fragment>
    )
  }
}
