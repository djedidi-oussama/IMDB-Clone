import React from 'react'

function loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="loader border-t-4 border-yellow-500 w-12 h-12 rounded-full animate-spin"></div>
      </div>
  )
}

export default loading