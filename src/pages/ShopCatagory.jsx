import React, { lazy, useContext, useEffect, useState, CSSProperties } from 'react'
import "./CSS/ShopCatagory.css"
import { ShopContext } from "../context/ShopContext"
import { BarLoader } from 'react-spinners'
const Item = lazy(() => import('../components/Item'));
const Offer = lazy(() => import('../components/Offer'));


const ShopCatagory = (props) => {
  const { all_shoes } = useContext(ShopContext);
  const [Loading, setLoading] = useState(false);

  // const override: CSSProperties = {
  //   display: "block",
  //   margin: "0 auto",
  //   // borderColor: "red",
  // };
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <>
      <Offer className='offer' />
      <div className="shop-catagory">
        <div className="shopcatagory-indexSort">
          <p><span>Showing 1-12</span>out of 26 Shoes</p>
          <div className="shopcatagory-Sort">
            Sort by <i className='fa-solid fa-arrow-down'></i>
          </div>
        </div>
        
        <div className="shopcatagory-center-part">
          {Loading ?
            <BarLoader color="#000" className='loader' /> :
            <div className="shopcatagory-products-wrapper">
              <div className="shopcatagory-products">
                {all_shoes.map((item, i) => {
                  if (item.catagory === props.catagory) {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                  }
                  else {
                    return null;
                  }
                })}
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default ShopCatagory