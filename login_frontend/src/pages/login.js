import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const login = () =>{
    let route =useRouter()
    function formsubmit(e){
        e.preventDefault()
        let formdata =new FormData(e.currentTarget)
        const loginform ={}
        for(let[name,value] of formdata){
            loginform[name]=value
        } 
        console.log(loginform)
        axios.post('http://localhost:8000/login',loginform).then(response=>{
            console.log(response)    
        let token =response.data
            if(token.length>0){
                axios.defaults.headers.common["authorization"]=`${token}`;
                localStorage.setItem("token",token)  
                route.push('/home')
            }
            else{
                localStorage.removeItem('token')
                delete axios.defaults.headers.common["authorization"];
                route.push('/login')
            }
            
        })
        .catch(error=>console.log(error))
   
   
   
   
   
        // let xhr = new XMLHttpRequest();
        // xhr.open('POST','http://localhost:8000/login',[true])
        // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        // // xhr.responseType = 'json';
        // // xhr.setResponseHeader('Content-type', 'application/json; charset=utf-8');
        // let json=JSON.stringify(loginform)
        // xhr.onload = ( ) =>{
        //     // xhr.getResponseHeader('Content-Type')
        //     let xhr_object=xhr.response
        //     console.log(xhr_object)
        // }
        // xhr.onerror = () =>{
        //     console.log("network error")
        // }
        // xhr.send(json)
        // console.log("helloworld")
   }
    return(
        <div className="h-screen w-screen border border-black border solid flex flex-wrap flex-col items-center justify-center">
                <h1 className="tex-black text-xl">Login</h1>
            <form onSubmit={formsubmit} className="h-[80%] w-[30%] border border-green-500 grid grid-rows-3">
                <div className="h-full w-full border border-red-600 flex flex-wrap flex-col items-center justify-center">
                    <h1 className="tex-black text-xl">email</h1>
                    <input name="email" className="h-[30%] w-[70%] border border-black" type="email" />
                </div>
                <div className="h-full w-full border border-red-600 flex flex-wrap flex-col items-center justify-center">
                    <h1 className="tex-black text-xl">password</h1>
                        <input name="password" className="h-[30%] w-[70%] border border-black" type="password" />
                </div>
             
                <div className="h-full w-full border border-red-600 flex flex-wrap flex-col items-center justify-center">
                        <button type="submit" className="border border-blue-500 w-1/2">Submit</button>
                </div>
            </form>
  
    </div>
    )
}


export default login;