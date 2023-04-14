import Link from 'next/link'
import React from 'react'

function Email() {
  return (
    <div className='email'>
        <Link href="mailto:ruizhoudy@gmail.com" className='email-link'>
            ruizhoudy@gmail.com
        </Link>
    </div>
  )
}

export default Email