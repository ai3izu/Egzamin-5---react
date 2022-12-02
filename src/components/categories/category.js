import { useState } from "react"
import { Dish } from "../dish/dish"
export const Category = (props) => {
     const dishList = props.cat.dania.map((el)=>{
      return(<Dish dish={el} send={props.ord}></Dish>)
    })
    const [show,setShow] = useState(false)
    return(
        <div>
        <div className="category">
                <h2>{props.cat.kategoria}</h2>
                <p onClick={()=>{setShow(!show)}}>{'>'}</p>
        </div>
           {show? dishList : null}
        </div>
    )
}