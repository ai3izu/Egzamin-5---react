export const Dish = (props) => { 
    const handleAdd = () => {
        props.send(props.dish)
    }
    console.log(props.dish)
    return(
    <div className="dish" onClick={handleAdd}>
        <h4>{props.dish.nazwa}</h4>
        <p>{props.dish.cena} zł</p>
    </div>
    )
}