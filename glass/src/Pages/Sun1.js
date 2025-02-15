import 'bootstrap/dist/css/bootstrap.min.css';
// import React,{useState} from 'react';


import kid1 from './images/kid1.jpg'
import kid2 from './images/kid2.jpg'
import kid3 from './images/kid3.jpg'
import kid4 from './images/kid4.jpeg'

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
<h1 className='kids'>Kids Collection</h1>
<div id='card'>
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={kid1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">sunglass for children</h5>
        <p class="card-text">protect from sunlight</p>
        <p>Quantitty</p>
      <div className='value'>
      <button className='btn'>+</button>
<spam id="value"></spam>
        <button className='btn' >-</button>
      </div>
      <h2 className="card-text">₹20</h2>
      
      <button id='submit' onClick={addToCart}>Add to cart</button>
      <button id='submit' onClick={orderNow}>Order now</button>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={kid2} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">sunglass for children</h5>
        <p class="card-text">protect from sunlight</p>
        <p>Quantitty</p>
      <div className='value'>
      <button className='btn' >+</button>
<spam id="value"></spam>
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
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={kid4} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">sunglass for children</h5>
        <p class="card-text">protect from sunlight</p>
        <p>Quantitty</p>
      <div className='value'>
      <button className='btn'>+</button>
<spam id="value"></spam>
        <button className='btn'>-</button>
      </div>
      <h2 className="card-text">₹20</h2>
      
      <button id='submit' onClick={addToCart}>Add to cart</button>
      <button id='submit' onClick={orderNow}>Order now</button>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={kid3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">sunglass for children</h5>
        <p class="card-text">protect from sunlight</p>
        <p>Quantitty</p>
      <div className='value'>
      <button className='btn'>+</button>
<spam id="value"></spam>
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


</div>

)
}

export default Sun1;


