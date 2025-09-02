import logo from "../assets/images/trytutorial logo.png"

export default function Header(){
  return(
    <>
    <header className = "headerContainer">
      <a href="/home" target="_blank">
        <img src = {logo}
           alt = "tryTutorialApp logo"
           className = "appLogo" />
      </a>
      
      <h1 className = "appName"> TryTutorialApp </h1>
      <nav className= "userLogin">
      <a href="/login"  target="_blank"> Login </a>
      <a href="/Sign-Up" target="_blank"> Sign-Up </a>
    </nav>
    </header>
    
    </>
  )
}