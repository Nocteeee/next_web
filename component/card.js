import Link from 'next/link'
import hljs from "highlight.js";
import marked from 'marked'

marked.setOptions({
    renderer: new marked.Renderer(),
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
export default class Card extends React.Component {
    render() {
        return (
            <div>
                {this.props.list.map(item =>
                    <div className="px-8 py-4 bg-white rounded-lg shadow-md mt-2" key={item.id}>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-light text-gray-600">{item.create_time.split(' ')[0]}</span>
                            <a className="px-3 py-1 text-sm font-bold text-gray-100 bg-gray-600 rounded">Design</a>
                        </div>
                        <div className="mt-2">
                            <Link href={{ pathname: '/detail', query: { id: item.id } }}>
                                <a className="text-2xl font-bold text-gray-700 hover:text-gray-600 hover-underline">{item.title}</a>
                            </Link>
                            <div className="mt-2 text-gray-600" 
                                dangerouslySetInnerHTML={{ __html: marked(item.submit) }}></div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <Link href={{ pathname: '/detail', query: { id: item.id } }}>
                                <a className="text-blue-600 hover:underline">Read more</a>
                            </Link>
                        </div>
                    </div>)}

            </div>
        )
    }
}