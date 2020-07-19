import React from 'react'
import Head from 'next/head'
import Api from '../public/utils/api'
import axios from 'axios'
import hljs from "highlight.js";
import marked from 'marked'
import 'highlight.js/styles/monokai-sublime.css';

const renderer = new marked.Renderer();
marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});
const Detail = ({state}) => {
    return (
        <div>
            <Head>
                <title>详情</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link href="https://css.gg/css?=|time" rel="stylesheet" />
                <link href='https://css.gg/box.css' rel='stylesheet' />
            </Head>
            <div className="m-auto w-9/12 bg-white pt-15 rounded-lg">
                <p className='font-bold text-3xl text-gray-800 text-center detail-title'>{state.title}</p>
                <p className="flex justify-center text-gray-600 mt-2 text-center">
                    <span className="flex flex-row items-center mr-3">
                        <i className="gg-time md:text-base mr-2"></i>{state.create_time.split(' ')[0]}
                    </span>
                    <span className="flex flex-row items-center">
                        <i className="gg-box md:text-base mr-2"></i> 文章
                        </span>
                </p>
                <div className="bg-white text-gray-700 w-3/4 m-auto"
                    dangerouslySetInnerHTML={{ __html: marked(state.content) }}>

                </div>
            </div>
        </div>
    );
}
Detail.getInitialProps = async (ctx) => {
    let result = await axios.get(Api.detailArticle, { params: { id: ctx.query.id } })
    return { state: result.data.data }
}
export default Detail