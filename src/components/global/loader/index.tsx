import { cn } from '@/lib/utils'
import React from 'react'
import Spinner from './spinner'

interface LoaderProps {
  state:      boolean
  className:  string
  children:   React.ReactNode
  color?:     string
}

const Loader:React.FC<LoaderProps> = ({
  state,
  children,
  className,
  color
}: LoaderProps) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  )
}

export default Loader