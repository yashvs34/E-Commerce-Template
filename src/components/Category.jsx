import Card from "./Card"

function Category ({id, name, items})
{
    const result = name.charAt(0).toUpperCase() + name.slice(1);
    name = result;

    return (
        <div className="container">
            <div className="title">{name}</div>
            <div className="cards">
                {items.map((it, index) => {
                    return <Card id = {index} it = {it} />
                })}
            </div>
        </div>
    )
}

export default Category