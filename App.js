import React from "react";
import ReactDom from "react-dom/client"

/* - APP LAYOUT
 HEADER
  - Logo
  - Nav Items(Right Side)
  - Cart

 BODY
  - Search Bar
  - Restraunt Lists
    - Image
    - Restraunt Name
    - Rating
    - Cuisine

 FOOTER
  - Links
  - Feedbacks etc..

 
*/
const Title=()=>(
    <a href="/">
            <img alt="logo" className="logo" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"/>

    </a>
)




const Header=()=>{
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
        </div>
    )
}

const restroList=[
    {id:1,
     name:"KFC",
     img:"https://b.zmtcdn.com/data/pictures/chains/2/3700002/825ff4ef3e2c838e767392ca8de5cefd.jpg",
     rating:"4.2",
     cuisines:["Burgers", "American"]    
    },
    {id:2,
     name:"Burger King",
     img:"https://www.galeria.spb.ru/i/shops/hotizimg/2db63463b6a06ff01288a191b2f5e2cb.jpg",
     rating:"4.1",
     cuisines:["Burgers", "American"]    
    },
    {id:3,
     name:"Dominos",
     img:"https://images.moneycontrol.com/static-mcnews/2022/11/Dominos-Pizza-653x435.jpg?impolicy=website&width=1600&height=900",
     rating:"4.0",
     cuisines:["Pizza", "Italian"]    
    },
    {id:4,
     name:"Pizza Hut",
     img:"https://agronfoodprocessing.com/wp-content/uploads/2023/07/Pizza-Hut-Logo.png",
     rating:"4.5",
     cuisines:["Pizza", "Italian"]    
    },
    {id:5,
     name:"Behrouz",
     img:"https://lh3.googleusercontent.com/EIg4RvILOfkaKMVBNwgpVxIDCYafmXMIfaEmb0CEPXHUTNL7xWqMQ5k84_OCdmHlHqjGx7kJn2-5_5RygNyYFequw_9WBovyPk7EeKOhNg=w300-rw",
     rating:"5.0",
     cuisines:["Biryani", "North Indian"]    
    },
    {id:6,
     name:"Fassos",
     img:"https://b.zmtcdn.com/data/pictures/7/19243627/a33719538ee7cb1e0b51aa17cc146e04.jpg?fit=around|750:500&crop=750:500;*,*",
     rating:"4.8",
     cuisines:["Wraps", "North Indian"]    
    },
    
    {id:7,
     name:"Starbucks",
     img:"https://bsmedia.business-standard.com/_media/bs/img/article/2016-12/07/full/1481130851-7484.jpg",
     rating:"3.5",
     cuisines:["Coffees", "Cake & Pastry"]    
    },
    
    {id:8,
     name:"McDonalds",
     img:"https://b.zmtcdn.com/data/pictures/8/178/012e38abbfc9893804c9326764cb80d0.jpg",
     rating:"4.1",
     cuisines:["Burger", "Sandwiches"]    
    }
    
]

 const RestroCard=({id,name,img,rating,cuisines})=>{
    // const{id,name,img,rating,cuisines}=restro
    return(
        <div className="card">
         <img alt="card" src={img}/>
         <h2>{name}</h2>
         <h3>{cuisines.join(", ")}</h3>
         <h4> {rating} stars </h4>
        </div>
    )
 }



const Body =()=>{
    return (
        <div className="restro-list">
           {/* <RestroCard restro={restroList[0]}/>
           <RestroCard restro={restroList[1]}/>
           <RestroCard restro={restroList[2]}/>
           <RestroCard restro={restroList[3]}/>
           <RestroCard restro={restroList[4]}/>
           <RestroCard restro={restroList[5]}/>
           <RestroCard restro={restroList[6]}/>
           <RestroCard restro={restroList[7]}/>
         */}
        {
            restroList.map((resto)=>{
                return <RestroCard key={resto.id} {...resto}/>
            } )
        }
        </div>
    )
}
const Footer =()=>{
    return <h4>Footer</h4>
}

const AppLayout=()=> (
    <>
     <Header/>
     <Body/>
     <Footer/>
    </>
)

const root= ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)