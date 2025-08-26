import React from 'react'

const Navbar = () => {
  return (
    <> {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-md">
        <h1 className="text-xl font-bold">SwapSkills</h1>
        <nav className="space-x-6 text-sm">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/about" className="hover:text-blue-500">About</a>
          <a href="/register" className="hover:text-blue-500">Register</a>
          <a href="/login" className="hover:text-blue-500">Login</a>
          
        </nav>
      </header></>
  )
}

export default Navbar