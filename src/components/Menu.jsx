import React from "react";

const Menu = ({ data }) => {
  return (
    <div className='row box'>
      {data.map((item) => {
        const { id, title, img, price, desc } = item;
        return (
          <>
            <div key={id} className='d-flex mt-3 cardDiv '>
              <div className='d-md-flex  justify-content-center align-items-start childCardDiv'>
                <div className='imgDiv m-3 rounded-3 '>
                  <img className="rounded-5" src={img} alt='images' />
                </div>
                <div>
                  <div className='mt-4 d-flex justify-content-between border-bottom border-dark titleDiv'>
                    <h6 className=''>
                      {title
                        .split(" ")
                        .map((item) => item[0].toUpperCase() + item.slice(1))
                        .join(" ")}
                    </h6>
                    <h5 className='text-warning'>${price}</h5>
                  </div>
                  <div className="descDiv1">
                    <p className='m-1 text-secondary descDiv2'>{desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Menu;
