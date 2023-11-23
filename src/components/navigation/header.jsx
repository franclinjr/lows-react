import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <main>
      <div>Header</div>
      <Outlet /> 
    </main>
  )
}
