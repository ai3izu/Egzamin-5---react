import './App.css';
import menu from './menu.json'
import { Category } from './categories/category';
import { useState } from 'react';
function App() {
  const [order, setOrder] = useState([])
  const [price, setPrice] = useState(0)
  const addOrder = (dish) => {
    setPrice(price + dish.cena)
    setOrder([...order, dish])
  }
  const menuList = menu.map((el)=>{
    return(<Category cat={el} ord={addOrder}></Category>)
  })
  const orderLst = order.map((el)=>{
    return(<li>{el.nazwa} {el.cena} zł</li>)
  })
  const handleRemove = () => {
    setOrder([])
    setPrice(0)
  }
  return (
    <div className="App">
      <div className='banner'>
        <h1>Restauracja "Programista"</h1>
      </div>
      <div className='container'>
         <div className='left'>
            {menuList}
         </div>
         <div className='right'>
            <h3>Twoje Zamowienia</h3>
            <hr></hr>
            <ul>
              {orderLst}
            </ul>
            <h4>Suma {price}</h4>
            <button onClick={handleRemove}>Wyczysc Zamowienie</button>
         </div>
      </div>
    </div>
  );
}

export default App;
