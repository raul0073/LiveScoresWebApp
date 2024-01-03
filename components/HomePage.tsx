import React, { ReactNode } from 'react'

export default function HomePage({children}: {children: ReactNode}) {
  return (
    <div className='w-full p-2'>{children}</div>
  )
}
