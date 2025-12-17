import React from 'react'

import { SignIn } from '@clerk/nextjs'

interface SignInProps {}

export default function SignInScreen({}: SignInProps) {
  return (
    <SignIn />
  )
}
