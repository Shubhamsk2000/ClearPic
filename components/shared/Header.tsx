import React from 'react'

const Header = ({title, subtitle} : {title: string, subtitle?: string}) => {
  return (
    <>
      <h2 className='text-dark-600 h2-bold'> {title} </h2>
      {subtitle && <p className='p-16-regular mt-4'>{subtitle}</p>}
    </>
  )
}

export default Header
