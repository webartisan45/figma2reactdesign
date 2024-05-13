import Link from 'next/link'
import React from 'react'


function RegisterButton( {Regbtn} ) {
  return (
    <div>
      <Link className='w-24 inline-block text-center h-10 p-2 rounded-lg text-white text-base font-semibold bg-[#2A3958] '  href="#">
        {Regbtn}
      </Link>
    </div>
  )
}

export default RegisterButton
