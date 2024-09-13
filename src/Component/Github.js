import React, { useEffect, useState } from 'react'

const useGithub = () => {
    const [data,setData]=useState({})
    const id = import.meta.env.VITE_GITHUB_TOKEN;
  useEffect(()=>{
    const fetchdata=async ()=>{
        try{
            const response= await fetch("https://api.github.com/users/02shreyansh")
            const result=await response.json()
            setData(result)
        }catch{
            throw new Error("Invalid Api call");
        }
    }
    fetchdata()
  },[])
  return data;
}

export default useGithub