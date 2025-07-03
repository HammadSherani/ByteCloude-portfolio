import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div>
      this is home page

      <button>
        <Link href="/dashboard"> 
        Go to Dashboard
        </Link>
      </button>
    </div>
  )
}

export default HomePage
