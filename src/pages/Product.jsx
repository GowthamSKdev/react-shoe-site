import React, { lazy, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
// import ProductDisplay from '../components/ProductDisplay';

const ProductDisplay = lazy(() => import('../components/ProductDisplay'));
const Breadcrum = lazy(() => import('../components/Breadcrum/Breadcrum'));

const Product = () => {

  const { all_shoes } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_shoes.find((e) => e.id === Number(productId));

  return (
    <>
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={ product } catagory='catagory'/>
        {/* <div className="relateted-item">
                <p>Related Shoes</p>
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
            </div> */}
      </div>
    </>
  )
}

export default Product