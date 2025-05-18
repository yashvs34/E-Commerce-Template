import Card from "./Card"

function Category ({id, name, items})
{
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            <div>{name}</div>
            {items.map((it, index) => {
                return <Card id = {index} it = {it} />
            })}
        </div>
    )
}

export default Category