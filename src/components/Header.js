import { useState } from "react"

const Title=()=>(
    <a href="/">
            <img alt="logo" className="logo" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"/>

    </a>
)




const Header=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    return (
        <div className="header">
         <Title/>
            <div className="navList">
                <ul>
                    <li>Home </li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
         <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?"LogOut":"LogIn"}</button>
        </div>
    )
}

export default Header