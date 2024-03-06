import { useState } from "react"
import { Link } from "react-router-dom"

const Title=()=>(
    <a href="/">
            <img alt="logo" className="h-28 p-2" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"/>

    </a>
)




const Header=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    return (
    <div className="flex justify-between bg-orange-100 shadow-lg">
         <Title/>   
            <div className="navList">
                <ul className="flex py-10 ">
                    
                    <li className="px-4 hover:bg-orange-400 rounded mr-8 items-center font-semibold text-lg"> <Link to="/">Home</Link></li>
                    <li className="px-4 hover:bg-orange-400 rounded mr-8 items-center font-semibold text-lg" ><Link to="/about">About</Link></li>
                    <li className="px-4 hover:bg-orange-400 rounded mr-8 items-center font-semibold text-lg"><Link to="/contact">Contact </Link></li>
                    <li className="px-4 hover:bg-orange-400 rounded mr-8 items-center font-semibold text-lg"><Link to="/cart">Cart </Link></li>
                    <li className="px-4 hover:bg-orange-400 rounded mr-8 items-center font-semibold text-lg"><button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?"LogOut":"LogIn"}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header