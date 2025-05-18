
function Card ({id, it})
{
    return (
        <>
        {console.log(it)}
            <div>
                <img src={it.thumbnail} alt={it.title} />
                <div style={{display:"flex"}}>
                    <div>
                        {it.title}
                    </div>
                    <div>
                        {it.price}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card