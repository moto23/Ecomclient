import React from 'react'
import { Link } from 'react-router-dom'
function GymD() {
  const styles = {
    maxWidth: '1000px', // Use camelCase and provide a value as a string
  };

  return (
    <div style={styles}>
      <h5>Get at the lowest price </h5>
      <div className="card mb-3 p-4 h-30">
        <div className="row g-0">
          <div className="col-md-4">
          <Link to="/dum">
  <img src="https://m.media-amazon.com/images/I/71bVjdpp+NL._SX679_.jpg" className="img-fluid rounded-start" alt="Zeb Reaper Mouse" />
    </Link>

          </div>
          <div className="col-md-8">
            <div className="card-body">
            <Link to="/dum" style={{ textDecoration: 'none', textColor: 'black' }}>
            <h5 className="card-title">
  <Link to="/dum" style={{ textDecoration: 'none'}}>
  Kore 3 in 1 Convertible 20 Kg PVC Dumbbells Set
  </Link>
</h5>

</Link>

              <p className="card-text">3.6 ⭐ 44.7k+</p>
              <span class="badge rounded-pill text-bg-success">Limited Time Deal</span>

              <p>₹756 <h9>M.R.P</h9></p>
              <h6>About this item</h6>
              <p className="card-text">In-box Contents: In-Box Contents: 20 kg of PVC weight (3 kg x 4 12 kg, 2 kg x 4 8 kg), 2 x 14 inch dumbbell rods with nuts</p>
              <p>Highly durable and long lasting</p>
              <p>A perfect muscle builder....</p>
            </div>
          </div>
        </div>
      </div>




      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <Link to="/tm">
            <img src="https://m.media-amazon.com/images/I/61-X6z9Ms4S._SX466_.jpg" className="img-fluid rounded-start" alt="..." />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <Link to="/tm" style={{ textDecoration: 'none',textColor: 'black' }}>
            <h5 className="card-title">
            <Link to="/tm" style={{ textDecoration: 'none', textColor: 'black' }} >
            Lifelong FitPro LLTM09 (2.5 HP Peak) Manual Incline Motorized Treadmill for Home with 12 preset Workouts, Max Speed 12km/hr.
        </Link>

      </h5>

         </Link>
              <p className="card-text">4.4 ⭐ 6.2k+</p>
              <span class="badge rounded-pill text-bg-success">Best At Price</span>
              <p>₹17,699<h9>M.R.P</h9></p>
              
              <h6>About this item</h6>
              
              <p>12 pre-set workout programs to set variable exercise mode for weight loss training and endurance training and 8 rubber pads under deck for shock absorption.</p>
              <p> It is suggested to use a 1000 VA stabilizer. In-Box Contents: 1 treadmill, toolkit, user manual and warranty card....</p>
            </div>
          </div>
        </div>
      </div>



      
    </div>
  );
}

export default GymD
