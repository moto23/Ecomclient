import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Equi = ({ product }) => {
  const styles = {
    maxWidth: '1000px',
  };

  const { id } = product || {};

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/cart');
  };


  
  return (
    <div>
      <div style={styles}></div>
      <nav aria-label="breadcrumb ">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Library</a></li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
            <img src="https://m.media-amazon.com/images/I/41cpJouJrwL.jpg" id="MainImg" className="img-fluid rounded-start pb-2" alt="..." />

            <div className="small-img-group" style={{ display: 'flex', justifyContent: 'space-between' }}>

              <div className="small-img-col" style={{ flexBasis: '260%', cursor: 'pointer' }}>
                <img src="https://m.media-amazon.com/images/I/71bVjdpp+NL._SX679_.jpg" width="100%" className="small-img" alt="" />
              </div>
              <div className="small-img-col" style={{ flexBasis: '170%', cursor: 'pointer' }}>
                <img src="https://m.media-amazon.com/images/I/51tD5ZeAZ2L._SX679_.jpg" width="100%" className="small-img" alt="" />
              </div>
            </div>
          </div>
          

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Kore 3 in 1 Convertible 20 Kg PVC Dumbbells Set </h5>
              <p className="card-text">3.6 ⭐ 44.7k+ rating</p>
              <span className="badge rounded-pill text-bg-success">Limited Time Deal</span>

              <p>₹756  <span>M.R.P</span></p>

              <div className="container text-center" style={{ backgroundColor: "white" }}>
  <div className="row align-items-start">
    <div className="col-lg-1">
      <img src="https://cdn-icons-png.flaticon.com/128/6831/6831000.png" class="img-fluid" alt="Free Delivery"/>
      <h8>Free Delive-ry</h8>
    </div>
    <div className="col-lg-1">
      <img src="https://cdn-icons-png.flaticon.com/128/754/754616.png" class="img-fluid" alt="30 Days Replacement"/>
      <h8>30 Days</h8>
    </div>
    <div className="col-lg-1">
      <img src="https://cdn-icons-png.flaticon.com/128/6491/6491515.png" class="img-fluid" alt="Pay on delivery"/>
      <h8>POD</h8>
    </div>
    <div className="col-lg-1">
      <img src="https://cdn-icons-png.flaticon.com/128/11526/11526511.png" class="img-fluid" alt="Secure Transaction"/>
      <h8>Safe Trans-action</h8>
    </div>
  </div>
</div>

              <div className="p-2">
              <button type="button" onClick={() => handleAddToCart()} className="btn btn-primary btn-lg m-4">Add to Cart 🛒</button>
                <button type="button" className="btn btn-secondary btn-lg">Buy Now⚡</button>
              </div>

              <div className="pd">
                <h4>Product details</h4>
                <p>Publisher ‏ : ‎ Jaico Publishing House (1 September 2020); Jaico Publishing House, JA-1, Jash Chambers, Off Sir Phirozshah Mehtra Road, Fort, Mumbai, Maharashtra 400023 Phone: 022 4030 6767</p>
                <p>Language ‏ : ‎ English</p>
                <p>Paperback ‏ : ‎ 252 pages</p>
                <p>Reading age ‏ : ‎ Customer suggested age: 16 years and up</p>
                <p>Best Sellers Rank: #3 in Books</p>
                <p>Item Weight ‏ : ‎ 220 g</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equi;