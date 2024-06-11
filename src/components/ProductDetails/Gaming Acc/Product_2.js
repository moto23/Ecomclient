import React from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Product_2() {
  useParams();
  const styles = {
    maxWidth: '1000px', // Use camelCase and provide a value as a string
  };
  return (
    <div>
       <div style={styles}></div>
       <nav aria-label="breadcrumb ">
  <ol class="breadcrumb p-3">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
       <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://m.media-amazon.com/images/I/61BGGGuSePL._SX679_.jpg"  id="MainImg" className="img-fluid rounded-start pb-2" alt="..."/>

      <div className="small-img-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
      
      <div className="small-img-col" style={{ flexBasis: '180%', cursor: 'pointer' }}>

        <img src="https://m.media-amazon.com/images/I/61BGGGuSePL._SX679_.jpg" width="100%" className="small-img" alt=""/>
        </div>
        <div className="small-img-col" style={{ flexBasis: '180%', cursor: 'pointer' }}>

        <img src="https://m.media-amazon.com/images/I/61nbv1OPNFL._SX679_.jpg" width="100%" className="small-img" alt=""/>
        </div>
        <div className="small-img-col" style={{ flexBasis: '180%', cursor: 'pointer' }}>
        <img src="https://m.media-amazon.com/images/I/61SO9TsabDL._SX679_.jpg" width="100%" className="small-img" alt=""/>
        </div>
        <div className="small-img-col" style={{ flexBasis: '180%', cursor: 'pointer' }}>
        <img src="https://m.media-amazon.com/images/I/61MR3Iza2sL._SX679_.jpg" width="100%" className="small-img" alt=""/>
        </div>
      </div>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Amkette EvoFox Elite X Wireless Gamepad for PC with Dual Vibration Motors, 2 Macro Back Buttons, Low Latency Plug and Play, Free USB Extender, Translucent Shell</h5>
        <p className="card-text">3.8 ⭐ 1k+</p>
        <span class="badge rounded-pill text-bg-success">Get At Lowest</span>
        <p>₹1,299 <h9>M.R.P</h9></p>

        <div class="container text-center">
  <div class="row align-items-start h-20">
    <div class="col">
    <img src='https://cdn-icons-png.flaticon.com/128/6831/6831000.png'></img>
    <h6>Free Delivery</h6>
    </div>
    <div class="col">
    <img src='https://cdn-icons-png.flaticon.com/128/754/754616.png'></img>
    <h6>30 Days Replacement</h6>
    </div>
    <div class="col">
    <img src='https://cdn-icons-png.flaticon.com/128/6491/6491515.png'></img>
    <h6>Pay on delivery</h6>
    </div>
    <div class="col">
    <img src='https://cdn-icons-png.flaticon.com/128/11526/11526511.png'></img>
    <h6>Secure Transaction</h6>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
</div>



    </div>

    
  )
}

export default Product_2
