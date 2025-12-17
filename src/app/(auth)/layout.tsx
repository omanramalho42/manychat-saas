import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className='h-screen flex justify-center items-center'>
      { children }
    </main>
  )
}
