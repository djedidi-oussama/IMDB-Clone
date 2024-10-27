import Link from 'next/link'
import React from 'react'

function MenuItem({title, adress , Icon}) {
  return (
    <Link href={adress} className='hover:text-amber-500'>
    <Icon className="text-2xl sm:hidden" />
    <p className='uppercase hidden sm:inline text-sm font-bold'>{title}</p>
    </Link>
  )
}

export default MenuItem