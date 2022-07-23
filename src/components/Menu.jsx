import React from 'react'
import Nav from './Nav'

const Menu = ({data}) => {
  return (
    <div className='row gap-5'>
        {
            data.map((item)=>{
                const {id,title,category,img,price,desc} =item
                return(
                    <>
                    
                     <div key={id} className='d-flex mt-5 cardDiv' >
                        <div className='d-flex childCardDiv '>
                            <div>
                                <img src={img} alt="images" />
                            </div>
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <h4 className=''>{title}</h4>
                                    <h5>${price}</h5>
                                </div>
                                <div>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    </>
                    
                   
                )
            })
        }
    </div>
  )
}

export default Menu