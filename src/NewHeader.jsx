import './Header.css'

function Header() {
    console.error('HEADER COMPONENT RENDERED - TEST 789')
    return(
        <header>
            <h1>home page test 78</h1>
            <nav>
                <a href="#">food list</a>
                <a href="#"> planner </a>
                <a href="#">priorities</a>
                <a href="#">log out</a>
            </nav>
        </header>
    )
}

export default Header;
