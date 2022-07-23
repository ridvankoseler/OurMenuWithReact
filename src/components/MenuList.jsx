import React, { useState } from 'react'
import menu from '../helpers/data'

import Menu from './Menu'
import Nav from './Nav'

const MenuList = () => {
    const [data, setData] = useState(menu)
  return (
    <div className='row flex-row'>
        <div>
            <Nav data={data} setData={setData}/>
        </div>
        <div className='m-auto mt-5 col'>
            <Menu data={data}/>
        </div>
        
    </div>
  )
}

export default MenuList