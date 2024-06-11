import React from 'react'
import {Link} from 'react-router-dom';


function Product() {
  return (
    <div className="w-100 p-2 h-30 px-4 ">
  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card ">
    <div className="card-body">
        <h4 className="card-title">Gaming Accessories</h4>
        
      </div>
      <Link to="/games">
      <img src="https://images2.minutemediacdn.com/image/upload/c_crop,w_2071,h_1164,x_0,y_193/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01g8eqh7x3frj93nqfh2.jpg" className="card-img-top" alt="..."/>
      </Link>
      <Link to="/games" class="card-link p-2" style={{ textDecoration: 'none', textColor: 'black' }}>Visit</Link>
    </div>
  </div>
     
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
    <div className="card-body">
        <h4 className="card-title">Deal Of The Day</h4>

      </div>
      <Link to="deal">
      <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/05/29112603/amazon-deal-of-the-day--1600x900.jpg" className="card-img-top" alt="..."/>
      </Link>
      <Link to="deal" class="card-link p-2" style={{ textDecoration: 'none', textColor: 'black' }}>Explore at the end of day</Link>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
    <div className="card-body">
        <h4 className="card-title">Explore the Shop-Tv</h4>
        <p className="card-text"></p>
      </div>
      <Link to="movie">
      <img src="https://tritonvoice.co/wp-content/uploads/2019/03/GKKFYsUV3HipHYUtKTrUPeiz.png" className="card-img-top" alt="..."/>
      </Link>
      <Link to="movie" class="card-link p-2 " style={{ textDecoration: 'none', textColor: 'black' }}>More</Link>
    </div>
  </div>
  
  
  
</div>
</div>

  )
}

export default Product
