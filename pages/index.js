import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import {NextAuth} from 'next-auth/client'

import LandingPage from '../containers/LandingPage';
import LevelPage from '../containers/LevelPage';

function getUser(userdb, {email}) {
    return userdb.model.findOne({email}).lean();
}

function updateLevelNumber(userdb, {email, levelNumber}) {
    const update = {
        levelNumber: levelNumber
            ? levelNumber + 1
            : 1
    };

    const options = {
        new: true
    };

    return userdb.model.findOneAndUpdate({email}, update, options).lean();
}

export default class extends React.Component {
    static async getInitialProps({req}) {
        const session = await NextAuth.init({req});
        if (session.user) {
            const user = await getUser(req.userdb, session.user);
            const updatedUser = await updateLevelNumber(req.userdb, user);
            session.levelNumber = updatedUser.levelNumber;
        }
        return {
            session
        };
    }

    constructor(props) {
        super(props);
    }

    handleSignOutSubmit = async (event) => {
        event.preventDefault()
        await NextAuth.signout();
        try {
            Router.push('/auth/callback')
        } catch (e) {
            Router.push('/auth/error?action=signout')
        }
    }

    render() {
        if (this.props.session.user) {
            return (<div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <div>
                    <LevelPage {...this.props}/>
                    <SignInMessage {...this.props}/>
                </div>
            </div>)
        } else {
            return (<div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <div>
                    <LandingPage />
                    <SignInMessage {...this.props}/>
                </div>
            </div>)
        }
    }
}

export class SignInMessage extends React.Component {
    render() {
        if (this.props.session.user) {
            return (<React.Fragment>
                <p>
                    <Link href="/auth">
                        <a>Manage Account</a>
                    </Link>
                </p>
                <form id="signout" method="post" action="/auth/signout" onSubmit={this.handleSignOutSubmit}>
                    <input name="_csrf" type="hidden" value={this.props.session.csrfToken}/>
                    <button type="submit">Sign out</button>
                </form>
            </React.Fragment>)
        } else {
            return (<React.Fragment>
                <p>
                    <Link href="/auth">
                        <a>Sign in</a>
                    </Link>
                </p>
            </React.Fragment>)
        }
    }
}
