import Link from 'next/link'
import React from 'react'

const Test = () => {
  return (
    <div>Test
        <Link href="/about" replace> about</Link>
    </div>
  )
}

export default Test