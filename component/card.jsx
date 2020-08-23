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
let _event;
export default class Card extends React.Component {
    move(ev) {
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))return;
        if (ev && _event != ev) {
            _event = ev;
        }
        // _event.persist()
        // Init
        var container = _event.target.parentElement,
        inner = _event.target;

        // Mouse
        var mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function (event) {
                var e = event || window.event;
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
            },
            setOrigin: function (e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
            },
            show: function () {
                return "(" + this.x + ", " + this.y + ")";
            }
        };

        mouse.setOrigin(container);
        var counter = 0;
        var updateRate = 10;
        var isTimeToUpdate = function () {
            return counter++ % updateRate === 0;
        };
        var onMouseEnterHandler = function (event) {
            update(event);
        };
        var onMouseLeaveHandler = function () {
            console.log(123)
            inner.style = "";
        };
        var onMouseMoveHandler = function (event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };
        var update = function (event) {
            mouse.updatePosition(event);
            updateTransformStyle(
                (mouse.y / inner.offsetHeight / 2).toFixed(1),
                (mouse.x / inner.offsetWidth / 2).toFixed(1)
            );
        };
        var updateTransformStyle = function (x, y) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner.style.mozTransform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;
        };
        container.onmouseenter = onMouseEnterHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmousemove = onMouseMoveHandler;
    }
    render() {
        return (
            <div>
                { this.props.list.map(item =>
                    <div className="container" key={ item.id }>
                        {/* onMouseEnter={this.move} */}
                        <div className="px-8 py-4 bg-white rounded-lg shadow-md mt-3" >
                            <div className="flex items-center justify-between">
                                <span className="flex text-sm font-light text-gray-600">{ item.create_time.split(' ')[0] }
                                    <i className="gg-eye md:text-base mr-2 ml-3"></i> { item.view }
                                </span>
                                
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
                        </div>
                    </div>
                )}
            </div>
        )
    }
}