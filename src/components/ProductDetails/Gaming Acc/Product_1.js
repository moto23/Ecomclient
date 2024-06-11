import React from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
function Product_1() {
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
      <img src="https://zebronics.com/cdn/shop/products/Zeb-Reaper-pic1.jpg?v=1625919481&width=1024"  id="MainImg" className="img-fluid rounded-start pb-2" alt="..."/>

      <div className="small-img-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
      
      <div className="small-img-col" style={{ flexBasis: '180%', cursor: 'pointer' }}>

        <img src="https://rukminim2.flixcart.com/image/832/832/kura1e80/mouse/k/y/j/f-1-gaming-mouse-wired-for-compute-entwino-original-imag7tykzgjapzgh.jpeg?q=70" width="100%" className="small-img" alt=""/>
        </div>
        <div className="small-img-col" style={{ flexBasis: '224%', cursor: 'pointer' }}>

        <img src="https://rukminim2.flixcart.com/image/832/832/kura1e80/mouse/k/k/b/f-1-gaming-mouse-wired-for-compute-entwino-original-imag7tyk9gqujpfn.jpeg?q=70" width="100%" className="small-img" alt=""/>
        </div>
        <div className="small-img-col" style={{ flexBasis: '224%', cursor: 'pointer' }}>
        <img src="https://rukminim2.flixcart.com/image/832/832/kura1e80/mouse/w/l/v/f-1-gaming-mouse-wired-for-compute-entwino-original-imag7tykeyrxszmm.jpeg?q=70" width="100%" className="small-img" alt=""/>
        </div>
        <div className="small-img-col" style={{ flexBasis: '180%', cursor: 'pointer' }}>
        <img src="https://rukminim2.flixcart.com/image/832/832/kura1e80/mouse/8/6/r/f-1-gaming-mouse-wired-for-compute-entwino-original-imag7tyk93mncsgj.jpeg?q=70" width="100%" className="small-img" alt=""/>
        </div>
      </div>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Redgear A-17 Gaming Mouse with Upto 6400 DPI, RGB Lighting and Braided Cable (Black)</h5>
        <p className="card-text">4.2 ⭐ 2.2k+</p>
        <span class="badge rounded-pill text-bg-success">Very few Left</span>

              <p>₹1,657 <h9>M.R.P</h9></p>
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
{/* <script>
      var MainImg = document.getElementById('MainImg');
      var smallimg = document.getElementsByClassName('small-img');

      smallimg[0].onclick= function(){
      MainImg.src = smallimg[0].src;
      }
      smallimg[1].onclick= function(){
      MainImg.src = smallimg[1].src;
      }
      smallimg[2].onclick= function(){
      MainImg.src = smallimg[2].src;
      }
      smallimg[3].onclick= function(){
      MainImg.src = smallimg[3].src;
      }

</script> */}
export default Product_1
