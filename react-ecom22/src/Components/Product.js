const Product = (props) => {
    return (
        // <div className="grid-container">
        // <div>
            <div className="grid-item">
                <h4>{props.name}</h4><br />
                <img src={props.image}  />
                {/* <h4>{props.name}</h4> */}
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                </div>
                <p>  ${props.price}</p>
                <button className="mycart">
                    <span>Add to Cart</span>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
            </div>
        // </div>
    )
}
export default Product;

