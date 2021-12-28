import React from 'react'

type NewsProps = {
  children: React.ReactNode,
  time?: string,
  author?: string,
  isFavorite?: boolean
}

function NewElement({ children, time, author, isFavorite }: NewsProps) {
  return (
    <div className='news'>
      {children}
    </div>
  )
}

export default NewElement
