import React from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
function GamesD() {
  useParams(); // Make sure to replace 'gameId' with the actual parameter name
  const styles = {
    maxWidth: '1000px', // Use camelCase and provide a value as a string
  };

  return (
    <div style={styles}>
      <h5>Get at the lowest price </h5>
      <div className="card mb-3 p-4 h-30">
        <div className="row g-0">
          <div className="col-md-4">
          <Link to="/mouse">
  <img src="https://zebronics.com/cdn/shop/products/Zeb-Reaper-pic1.jpg?v=1625919481&width=1024" className="img-fluid rounded-start" alt="Zeb Reaper Mouse" />
    </Link>

          </div>
          <div className="col-md-8">
            <div className="card-body">
            <Link to="/mouse" style={{ textDecoration: 'none', textColor: 'black' }}>
            <h5 className="card-title">
  <Link to="/mouse" style={{ textDecoration: 'none'}}>
    Redgear A-17 Gaming Mouse with Upto 6400 DPI, RGB Lighting and Braided Cable (Black)
  </Link>
</h5>

</Link>

              <p className="card-text">4.2 ⭐ 2.2k+</p>
              <span class="badge rounded-pill text-bg-success">Very few Left</span>

              <p>₹1,657 <h9>M.R.P</h9></p>
              <p className="card-text">FREE delivery Wed, 30 Aug on ₹1299 of items fulfilled by ShopEasy
Or fastest delivery Tomorrow, 29 Aug</p>
            </div>
          </div>
        </div>
      </div>


      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <Link to="/pad">
            <img src="https://m.media-amazon.com/images/I/61BGGGuSePL._SX679_.jpg" className="img-fluid rounded-start" alt="..." />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <Link to="/pad" style={{ textDecoration: 'none',textColor: 'black' }}>
            <h5 className="card-title">
            <Link to="/pad" style={{ textDecoration: 'none', textColor: 'black' }} >
  Amkette EvoFox Elite X Wireless Gamepad for PC with Dual Vibration Motors, 2 Macro Back Buttons, Low Latency Plug and Play, Free USB Extender, Translucent Shell
        </Link>

      </h5>

         </Link>
              <p className="card-text">3.8 ⭐ 1k+</p>
              <span class="badge rounded-pill text-bg-success">Get At Lowest</span>
              <p>₹1,299 <h9>M.R.P</h9></p>
              
              <p>About this item</p>
              <p className="card-text">Wireless connectivity: A clutter-free gaming experience with wireless connectivity .</p>
              <p>Macro Functions: Customise your Moves with EZ On the Fly Macro . With the ability to program complex sequences of commands, you can perform complex moves with a single click....</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>



      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://m.media-amazon.com/images/I/61Az2uOUbqL.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Ant Esports MK1400 Pro Backlit Membrane Wired Gaming Keyboard with Mixed Colour Lighting, White & Black Keycaps, Double Injection Key Caps - Black</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesD;
