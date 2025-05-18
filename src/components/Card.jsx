
function Card ({id, it})
{
    const rating = Number(it.rating.toFixed(1));
    return (
        <>
            <div className="card">
                <img src={it.thumbnail} alt={it.title} />
                <div className="cardDetails">
                    <div className="cardTitle">
                        {it.title}
                    </div>
                    <div className="metaData">
                        <div className="itemPrice">
                            Price : ${it.price}
                        </div>
                        <div className="itemRating">
                            Rating : {rating} / 5
                        </div>
                    </div>
                    <div className="moreDetails">
                        <div className="discount">
                            Discount : {it.discountPercentage}%
                        </div>
                        <div>
                            Stock : {it.stock}
                        </div>
                    </div>
                    <div className="someMore">
                        Minimum Order Quantity : {it.minimumOrderQuantity}
                    </div>
                    <div>
                        Warranty : {it.warrantyInformation}
                    </div>
                    <div>
                        Availabilty : {it.availabilityStatus}
                    </div>
                    <div>
                        Return Policy : {it.returnPolicy}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card