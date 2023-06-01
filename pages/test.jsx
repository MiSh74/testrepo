import Link from 'next/link'
import React from 'react'

const Test = () => {
  return (
    <div>Test
        <Link href="/about" replace></Link>
    </div>
  )
}

export default Test