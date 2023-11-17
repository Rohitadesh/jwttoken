import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Home() {
  const [login,setlogin] =useState({})
  const route =useRouter()
  function formsubmit (e) {
    e.preventDefault()
    let form_data =new FormData(e.currentTarget)
    const register_form ={}
    for(let[name,value] of form_data){
      register_form[name]=value
    }
    console.log(register_form)
   axios.post('http://localhost:8000/register',register_form)
   .then((response)=>console.log(response))
   .catch((error)=>console.log(error))
    route.push('/login')
  } 

  return (
    <div className="h-screen w-screen border border-black border solid flex flex-wrap flex-col items-center justify-center">
                <h1 className="tex-black text-xl">Register</h1>
        <form action="/post" onSubmit={formsubmit} className="h-[80%] w-[30%] border border-green-500 grid grid-rows-5">
            <div className="h-full w-full border border-red-600 flex flex-wrap flex-col items-center justify-center">
                <h1 className="tex-black text-xl">Name</h1>
                <input name="name" className="h-[30%] w-[70%] border border-black" type="text" />
            </div>
            <div className="h-full w-full border border-red-600 flex flex-wrap flex-col items-center justify-center">
                <h1 className="tex-black text-xl">email</h1>
                <input name="email" className="h-[30%] w-[70%] border border-black" type="email" />
              </div>
              <div className="h-full w-full border border-red-600 flex flex-wrap flex-col items-center justify-center">
              <h1 className="tex-black text-xl">password</h1>
                <input name="password" className="h-[30%] w-[70%] border border-black" type="password" />
              </div>
              <div className="h-full w-full border border-red-600 flex flex-wrap flex-col items-center justify-center">
                <h1 className="tex-black text-xl">confirmpassword</h1>
                <input name="confirm_password" className="h-[30%] w-[70%] border border-black" type="password" />
              </div>
              <div className="h-full w-full border border-red-600 flex flex-wrap flex-col items-center justify-center">
                    <button className="border border-blue-500 w-1/2">Submit</button>
                  <Link href={'/login'} className="underline">Login</Link>
              </div>
        </form>
  
    </div>
  )
}
