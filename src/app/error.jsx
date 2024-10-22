"use client"

import { useEffect } from "react"

function error({error , reset}) {
    useEffect (() => {
        console.log(error)
    })
  return (
    <div className="mt-10 text-center">
        <h1>Something went wrong , please try again</h1>
        <button onClick={() => reset()} className="hover:text-amber-600 ">Try Again </button>
    </div>
  )
}

export default error