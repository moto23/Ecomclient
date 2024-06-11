import React from 'react'
import {Link} from 'react-router-dom';

function Product_2() {
  return (
    <div className="w-100 p-4 h-30 ">
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Bibliophiles </h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      <Link to="/book">
      <img src="https://bigthink.com/wp-content/uploads/2023/02/AdobeStock_267858509.jpg?w=480&h=270&crop=1" className="card-img-top" alt="..."/>
      </Link>
      <Link to="/book" class="card-link p-2">More</Link>
    </div>
  </div>


  
  <div className="col">
    <div className="card">
    <div className="card-body">
        <h5 className="card-title"> For your Fitness Needs</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      <Link to="/gym">
      <img src="https://st3.depositphotos.com/3383955/33157/i/450/depositphotos_331574238-stock-photo-sporty-couple-workout-dumbbells-muscular.jpg" className="card-img-top" alt="..."/>
      </Link>
      <Link to="/gym" class="card-link p-2">More</Link>
    </div>
  </div>
</div>
</div>
  )
}

export default Product_2
