
function Card ({id, it})
{
    return (
        <>
            <div className="card">
                <img src={it.thumbnail} alt={it.title} />
                <div className="cardDetails">
                    <div className="cardTitle">
                        {it.title}
                    </div>
                    <div className="itemPrice">
                        {it.price}
                    </div>
                    <div className="itemRating">
                        {it.rating}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card