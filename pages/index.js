import React from 'react'
import Head from 'next/head'
import Card from '../component/card'
import axios from 'axios'
import Api from '../public/utils/api'

export default class Home extends React.Component {
    static async getInitialProps(){
        let result = await axios.get(Api.getArticleList)
        return { state : result.data }
    }
    render() {
        const list = []
        return (
            <div>
                <Head>
                    <title>Home</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                </Head>
                <div className="m-auto w-11/12 mt-4">
                    <Card list={ this.props.state.data } />
                </div>
            </div>
        )
    }
}