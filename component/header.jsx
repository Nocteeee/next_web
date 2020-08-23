export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="bg-white">
                    <nav className="px-6 py-2 shadow">
                        <div className="items-center justify-between md:flex">
                            <div className="flex items-center justify-between">
                                <div>
                                    <a className="text-lg font-bold text-gray-800 hover:text-gray-700 md:text-2xl">Nocteeee</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}