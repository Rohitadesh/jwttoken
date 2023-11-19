// import { response } from "express"
// import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
const Home  = ( ) =>{
    const route =useRouter()
    async function  logout(){
        localStorage.removeItem('token')
        route.push('/login')
      // .then(response=>console.log(response))
        // .catch(error=>console.log(error))
        // localStorage
        // console.log(localStorage)
    }
    // useEffect(()=>{
    //     if
    // },[])
    return(
        <div className="h-screen w-screen border border-black flex flex-wrap justify-center items-center">
            <div className="h-[60%] w-[60%] border border-green-500">
                helloworld adesh

            </div>
            <button onClick={()=>logout()} className="h-[10%] w-[20%] border border-black">Logout</button>
        </div>
    )
}

export default Home 
