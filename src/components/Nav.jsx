import React, { useState } from 'react'




const Nav = ({data,setData}) => {
  const [veri, setVeri] = useState(data)

  const handleBreakfast = (()=>{
  setData(veri.filter((item)=>item.category === 'breakfast'))
})
  const handleLunch = () => {
  setData(veri.filter((item) => item.category === "lunch"));
};
const handleShakes = (()=>{
  setData(veri.filter((item)=>item.category === 'shakes'))
})
const handleAll = (()=>{
  setData(veri)
})

  return (
    <div>
        <div className='mt-4'>
            <button onClick={handleAll}>All</button>
            <button onClick={handleBreakfast}>Breakfast</button>
            <button onClick={handleLunch}>Lunch</button>
            <button onClick={handleShakes}>Shakes</button>
        </div>
    </div>
  )
}

export default Nav