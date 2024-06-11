import React from 'react'
import { Link } from 'react-router-dom'

function Books() {
    const styles = {
        maxWidth: '1000px', // Use camelCase and provide a value as a string
      };
    
      return (
        <div style={styles}>
          <h5>Get at the lowest price </h5>
          <div className="card mb-3 p-4 h-30">
            <div className="row g-0">
              <div className="col-md-4">
              <Link to="/pom">
      <img src="https://checkfirst.in/wp-content/uploads/2022/05/Checkfirst_The_Psychology_Of_Money.webp" className="img-fluid rounded-start" alt="Zeb Reaper Mouse" />
        </Link>
    
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <Link to="/pom" style={{ textDecoration: 'none', textColor: 'black' }}>
                <h5 className="card-title">
      <Link to="/pom" style={{ textDecoration: 'none'}}>
      The Psychology Of Money
      </Link>
    </h5>
    
    </Link>
    
                  <p className="card-text">4.6 ⭐ 98.7k+</p>
                  <span class="badge rounded-pill text-bg-success">Limited Time Deal</span>
    
                  <p>₹267 <h9>M.R.P</h9></p>
                  <p className="card-text">FREE delivery Wed, 30 Aug on ₹1299 of items fulfilled by ShopEasy
    Or fastest delivery Tomorrow, 29 Aug</p>
                </div>
              </div>
            </div>
          </div>
    


    
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <Link to="/bye" style={{ textDecoration: 'none'}}>
                <img src="https://images-eu.ssl-images-amazon.com/images/I/71QKQ9mwV7L._AC_UL600_SR600,600_.jpg" className="img-fluid rounded-start" alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <Link to="/bye" style={{ textDecoration: 'none',textColor: 'black' }}>
                <h5 className="card-title">
                <Link to="/bye" style={{ textDecoration: 'none', textColor: 'black' }} >
                The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life
            </Link>
    
          </h5>
    
             </Link>
                  <p className="card-text">4.9 ⭐ 199k+</p>
                  <span class="badge rounded-pill text-bg-success">Get At Lowest</span>
                  <p>₹240<h9>M.R.P</h9></p>
                  
                  <p>Most Selled</p>
                  
                  <p>In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be “positive” all the time so that we can truly become better, happier people....</p>
                  
                </div>
              </div>
            </div>
          </div>
    
    
    
          
        </div>
      );
}

export default Books
