import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import d1 from './images/d1.jpeg'
import d2 from './images/d2.jpg'
import d3 from './images/d3.jpg'
import d4 from './images/d4.jpeg'
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
<h1 className='kids'>Driving sunglass</h1>
<div id='card'>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={d1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Good for Ride</h5>
        <p class="card-text">Best to use while driving night</p>
        <p>Quantitty</p>
      <div className='value'>
      <button className='btn'>+</button>
<span id="value"></span>
        <button className='btn'>-</button>
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
      <img src={d2} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">360 view HD prrof</h5>
        <p class="card-text">yellow and black</p>
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
      <img src={d3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Hd sunglass</h5>
        <p class="card-text">use for night driving</p>
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
      <img src={d4} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Two combo</h5>
        <p class="card-text">Yellow and black</p>
        <p>Quantitty</p>
      <div className='value'>
      <button className='btn'>+</button>
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


