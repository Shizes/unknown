import React from 'react'
import Link from 'next/link';
import './header.css'
const header = () => {
  return (
    <div>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}

export default header