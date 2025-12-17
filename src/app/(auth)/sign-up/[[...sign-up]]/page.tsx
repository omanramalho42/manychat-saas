import React from 'react'

import { SignUp } from '@clerk/nextjs'

interface SignUpProps {}

export default function SignUpScreen({}: SignUpProps) {
  return (
    <SignUp />
  )
}
