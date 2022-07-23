import React, { useState } from 'react'




const Nav = ({data,setData}) => {
  const [veri, setVeri] = useState(data)
  console.log(setVeri);
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
      <div className='mt-4 m-auto text-center  '>
        <button
          onClick={handleAll}
          className='border-0 p-2 mx-md-2 text-primary fw-bold bg-light   '
        >
          All
        </button>
        <button
          onClick={handleBreakfast}
          className='border-0 p-2 mx-md-2 text-primary fw-bold bg-light '
        >
          Breakfast
        </button>
        <button
          onClick={handleLunch}
          className='border-0 p-2 mx-md-2  text-primary fw-bold bg-light '
        >
          Lunch
        </button>
        <button
          onClick={handleShakes}
          className='border-0 p-2 mx-md-2  text-primary fw-bold bg-light '
        >
          Shakes
        </button>
      </div>
    </div>
  );
}

export default Nav