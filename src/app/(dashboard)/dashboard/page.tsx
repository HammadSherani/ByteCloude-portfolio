import Link from 'next/link'
import React from 'react'

function Dashboard() {
  return (
    <div>
      Dashboard Page

      <button>
        <Link href="/"> 
        Go to Home
        </Link>
      </button>
    </div>


  )
}

export default Dashboard
