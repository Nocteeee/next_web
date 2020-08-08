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
                    <meta name="baidu-site-verification" content="26a3pRuhZF" />
                    <title>首页 - 关注web前端技术</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <meta name="description" content="关注web前端技术-前端学习总结博客"/>
                </Head>
                <div className="m-auto w-11/12 mt-4">
                    <Card list={ this.props.state.data } />
                </div>
            </div>
        )
    }
}