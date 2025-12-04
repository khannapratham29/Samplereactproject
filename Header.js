export default Header;

function Header(props) {
    const navStyle = {
        backgroundColor: "red",
        display: "flex",
        justifyContent : "space-between",
        alignItems : "center",
        padding: "10px"    
    };
    const linkStyle = {
        color: "white",
        textDecoration: "none",
        marginLeft: "15px",
        fontSixe: "18px"
    };
    return(
        <nav style = {navStyle}>
        <h1>This is the Header</h1>

        <div>
            <a href="#home" style={linkStyle}>Home</a>
            <a href="#about" style={linkStyle}>About</a>
            <a href="#contact" style={linkStyle}>Contact</a>
        </div>
        </nav>
    );
}