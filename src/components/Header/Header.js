import './Header.css';

const Header = ({setPage}) =>
    <header>
        <div>
            <h1>Marc Rhymanum</h1>
            <h2>Full Stack Web Developer</h2>
        </div>
        <nav>
                <button onClick={()=>setPage('about')}>About Me</button>
                <button onClick={()=>setPage('portfolio')}>Portfolio</button>
                <button onClick={()=>setPage('contact')}>Contact</button>
                <button onClick={()=>setPage('resume')}>Resume</button>
        </nav>

    </header>


export default Header;