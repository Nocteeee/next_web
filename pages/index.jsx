import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import axios from 'axios'
import Api from '../public/utils/api'
const Card = dynamic(import('../component/card'));
const Pagination = dynamic(import('../component/pagination'));

export default class Home extends Component {
    static async getInitialProps( ctx ){
        let query = Object.assign({}, ctx.query,{
            pageSize: 10
        })
        let result = await axios.get(Api.getArticleList, {
            params: query
        })
        let res = result.data.data;
        return { records: res.records, page:{ total: res.total, current: res.pageNo, pageSize: res.pageSize } }
    }
    render() {
        return (
            <div>
                <Head>
                    <meta name="baidu-site-verification" content="26a3pRuhZF" />
                    <title>首页 - 关注web前端技术</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <meta name="description" content="关注web前端技术-前端学习总结博客" />
                </Head>
                <div className="max-w-3xl mx-auto mt-4">
                    <Card list = { this.props.records } />
                </div>
                <div className="flex">
                    {
                        this.props.page.total > 10 ? <Pagination page = { this.props.page } /> : null
                    }
                </div>
            </div>
        )
    }
}