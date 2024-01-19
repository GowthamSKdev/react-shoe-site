import React from 'react'
import "./CSS/item.css"
import { Link } from 'react-router-dom'
const Item = (props) => {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img loading="lazy" src={props.image} alt="" />
            </Link>
            <div className="item-details">
                <div className="item-left">
                    <p>{props.name}</p>
                    <div className="item-prices">
                        <div className="item-prices-new">
                            {props.new_price}
                        </div>
                        <div className="item-prices-old">
                            {props.old_price}
                        </div>
                    </div>
                </div>
                    <a href={`/product/${props.id}`}><i className='fa-solid fa-bag-shopping'></i>Buy</a>
            </div>
        </div>
    )
}

export default Item