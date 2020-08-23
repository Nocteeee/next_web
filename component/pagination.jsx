import React from "react";
import Link from 'next/link'

export default class Pagination extends React.Component {
    constructor(props){
        super()
        this.state = {
            pageNo: props.page.current
        }
    }
    //前5后4分页
    getPageList(total,current){
        let totalPage = Math.ceil(total / 10);
        let startPage = 1;
        let endPage = 1
        if(totalPage < 10){
            endPage = totalPage
        }else{
            startPage = current - 5;
            endPage = current + 4;
            if(startPage < 1){
                startPage = 1;
                endPage = startPage + 9
            }
            if(endPage > totalPage){
                endPage = totalPage;
                startPage = endPage - 9;
            }
        }
        return {
            startPage,
            endPage
        }
    }
    render() {
        let props = this.props.page;
        let current = props.current;
        let { startPage, endPage } = this.getPageList(props.total, current)
        let res = [];
        for (let i = startPage; i <= endPage; i++) {
            res.push(
                <Link href={{ pathname:'/',query:{ pageNo: i }}} key={ i }>
                    <li
                        className={`mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover-style rounded-lg ${ current == i ? 'current' : ''}`}>
                        <a className="font-bold">{ i }</a>
                    </li>
                </Link>
            );
        }

        return (
            <ul className="flex paginations">
                <Link href={{ pathname:'/',query:{ pageNo: current - 1 }}}>
                    <li className={`mx-1 px-3 py-2 bg-gray-200 ${ current === 1 ? 'hidden' : 'text-gray-700 hover-style' } rounded-lg`}>
                        <a className='flex items-center font-bold'>
                            <span className="mx-1">previous</span>
                        </a>
                    </li>
                </Link>
                { res }
                <Link href={{ pathname:'/',query:{ pageNo: current + 1 }}}>
                    <li className={`mx-1 px-3 py-2 bg-gray-200 ${ current === endPage ? 'hidden' : 'text-gray-700 hover-style' } rounded-lg`}>
                        <a className='flex items-center font-bold'>
                            <span className="mx-1">Next</span>
                        </a>
                    </li>
                </Link> 
            </ul>
        );
    }
}
