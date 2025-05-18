
function Card ({id, it})
{
    return (
        <>
            <div>
                <img src={it.thumbnail} alt={it.title} />
                <div style={{display:"flex"}}>
                    <div>
                        {it.title}
                    </div>
                    <div>
                        {it.price}
                    </div>
                    <div>
                        {it.rating}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card