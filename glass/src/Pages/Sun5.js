import 'bootstrap/dist/css/bootstrap.min.css';
// import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import sun7 from './images/sun7.jpeg'
import kid6 from './images/kid6.jpg'
import kid5 from './images/kid5.jpeg'
import sun3 from './images/sun3.jpg'
import './Sun.css'
function Sun1(){


//   const [quantity, setQuantity] = useState(1); // State to track the quantity

//   // Function to handle quantity increase
//   const increase = () =>
//     setQuantity(quantity+1);
//   // Function to handle quantity decrease
//   const decrease = () => {
//     if (quantity > 1) 
//       setQuantity(quantity-1)
  
// }
  // Function to handle the add to cart button
  const addToCart = () => {
    alert('Item added to cart!');
    // You can add more logic here to add the item to the actual cart
  };

  // Function to handle the order now button
  const orderNow = () => {
    const confirmOrder = window.confirm(`Your total is ₹. Do you want to proceed with the order?`);
    if (confirmOrder) {
      alert('Order confirmed!');
      // Add order processing logic here
    } else {
      alert('Order cancelled.');
    }
  };


return(


<div className='container'>
<h1 className='kids'>stylish sunglass</h1>
<div id='card'>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={sun7} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">sunglass for children</h5>
        <p class="card-text">protect from sunlight</p>
        <p>Quantitty</p>
      <div className='value'>
      <button className='btn'>+</button>
<span id="value"></span>
        <button className='btn' >-</button>
      </div>
      <h2 className="card-text">₹20</h2>
      
      <button id='submit' onClick={addToCart}>Add to cart</button>
      <button id='submit' onClick={orderNow}>Order now</button>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={kid6} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">sunglass for children</h5>
        <p className="card-text">protect from sunlight</p>
        <p>Quantitty</p>
      <div className='value'>
      <button className='btn' >+</button>
<span id="value"></span>
        <button className='btn'>-</button>
      </div>
      <h2 className="card-text">₹40</h2>
      
      <button id='submit' onClick={addToCart}>Add to cart</button>
      <button id='submit' onClick={orderNow}>Order now</button>
      </div>
    </div>
  </div>
</div>

</div>

<div id='card'>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={kid5} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">sunglass for children</h5>
        <p className="card-text">protect from sunlight</p>
        <p>Quantitty</p>
      <div className='value'>
      <button className='btn' >+</button>
<span id="value"></span>
        <button className='btn' >-</button>
      </div>
      <h2 className="card-text">₹20</h2>
      
      <button id='submit' onClick={addToCart}>Add to cart</button>
      <button id='submit' onClick={orderNow}>Order now</button>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={sun3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">sunglass for children</h5>
        <p className="card-text">protect from sunlight</p>
        <p>Quantitty</p>
      <div className='value'>
      <button className='btn' >+</button>
<span id="value"></span>
        <button className='btn'>-</button>
      </div>
      <h2 className="card-text">₹30</h2>
      
      <button id='submit' onClick={addToCart}>Add to cart</button>
      <button id='submit' onClick={orderNow}>Order now</button>
      </div>
    </div>
  </div>
</div>

</div>


<button type='' id='back'><Link to='/' style={{color:"white", textDecoration:"none"}}>Back To Home</Link></button>

</div>

)
}

export default Sun1;


