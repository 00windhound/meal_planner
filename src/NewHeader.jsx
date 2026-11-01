import './NewHeader.css'

function Header() {
    return(
        <header>
            <h1>home page</h1>
            <nav>
                <button className="headerButton">food list</button>
                <button className="headerButton"> planner </button>
                <button className="headerButton">priorities</button>
                <button className="headerButton">log out</button>
            </nav>
        </header>
    )
}

export default Header;
