import React from 'react';
import './Promotion.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../assets/about/about1.png';
import image2 from '../../assets/about/about2.png';
import image3 from '../../assets/about/about3.png';
import Footer from '../../components/Footer/Footer';

function Promotion() {

  return (
    <>
      <div>
        <section>
          <div class="container">
            <div class="row col-md-12" >
              <div class="promotion-wrapper">
                <div class="title-wrap text-center one-of-two">
                  <h2 class="h1 text-secondary text-uppercase">Local Deal</h2>
                  <p class="fs-3 font-weight-500">Promotion </p>
                </div>
                <div class="timeline-box one-of-two">
                  <img class="mb-1-6 rounded" src={image2} alt="..." style={{ width: 320, height: 260 }} />
                  <div class="content">
                    <h3 class="h4 mb-2 mb-md-3">Promotion 1</h3>
                    <p class="mb-0"> Unlock unbeatable savings and elevate your local experience with our exclusive deals! Discover the best in town at prices that make you smile. Don't miss out – shop local, save big!</p>
                  </div>
                  <div class="year">2024</div>
                </div>
                <div class="timeline-box one-of-two">
                  <img class="mb-1-6 rounded" src={image3} alt="..." style={{ width: 320, height: 260 }} />
                  <div class="content">
                    <h3 class="h4 mb-2 mb-md-3">Promotion 2</h3>
                    <p class="mb-0"> Unlock unbeatable savings and elevate your local experience with our exclusive deals! Discover the best in town at prices that make you smile. Don't miss out – shop local, save big!</p>
                  </div>
                  <div class="year">2024</div>
                </div>
                <div class="timeline-box one-of-two">
                  <img class="mb-1-6 rounded" src={image1} alt="..." style={{ width: 320, height: 260 }} />
                  <div class="content">
                    <h3 class="h4 mb-2 mb-md-3">Promotion 3</h3>
                    <p class="mb-0"> Unlock unbeatable savings and elevate your local experience with our exclusive deals! Discover the best in town at prices that make you smile. Don't miss out – shop local, save big!</p>
                  </div>
                  <div class="year">2024</div>
                </div>
                <div class="timeline-box one-of-two">
                  <img class="mb-1-6 rounded" src={image2} alt="..." style={{ width: 320, height: 260 }} />
                  <div class="content">
                    <h3 class="h4 mb-2 mb-md-3">Promotion 4</h3>
                    <p class="mb-0"> dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum</p>
                  </div>
                  <div class="year">2024</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default Promotion;