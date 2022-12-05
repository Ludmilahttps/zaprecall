function Header() {
    return (
        <header>
            <img src="assets/logo.png" alt="Logo"></img>
            <h1 onClick={() => { window.location.reload(false)}}>ZapRecall</h1>
        </header>
    );
  }
  
  export default Header;