import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div>
      <h1 className='text-5xl font-bricolage'>This is Heading Featured  </h1>

      <button>
        <Link href="/dashboard"> 
        Go to Dashboard
        </Link>
      </button>
    </div>
  )
}

export default HomePage
