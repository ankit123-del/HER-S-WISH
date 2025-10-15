import { Link } from "react-router-dom";

function HomeFooter(){
    return(
        <>
        <hr></hr>
        <footer class="text-center text-lg-start bg-light text-muted footer">
{/* <!-- Section: Social media --> */}
<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  {/* <!-- Left --> */}
  <div class="me-5 d-none d-lg-block">
    <span>Get connected with us on social networks:</span>
  </div>
  {/* <!-- Left --> */}

  {/* <!-- Right --> */}
  <div>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-google"></i>
    </a>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-github"></i>
    </a>
  </div>
  {/* <!-- Right --> */}
</section>
{/* <!-- Section: Social media -->

<!-- Section: Links  --> */}
<section class="">
  <div class="container text-center text-md-start mt-5">
    {/* <!-- Grid row --> */}
    <div class="row mt-3">
      {/* <!-- Grid column --> */}
      <div class="col-md-3 col-lg-4 col-xl-3 col-sm-2 mx-auto mb-4">
        {/* <!-- Content --> */}
        <h6 class="text-uppercase fw-bold mb-4">
          <i class="fas fa-gem me-3"></i>HER'S WISH
        </h6>
        <p>
        HER'S WISH is a marketplace of unique designs from across the globe. Our vision is to bring the world a little closer and make all discover worthy products, discoverable and within your reach. We are a group of passionate & energetic people working to make that vision a reality
        </p>
      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-2 col-lg-2 col-xl-2 col-sm-2 mx-auto mb-4 hide">
        {/* <!-- Links --> */}
        <h6 class="text-uppercase fw-bold mb-4">
          Products
        </h6>
        <p>
          <Link to="/kurtis" class="text-reset">Kurtis|Suits</Link>
        </p>
        <p>
          <Link to="/indo-western" class="text-reset">Indo-Western</Link>
        </p>
        <p>
          <Link to="/dresses" class="text-reset">Dresses</Link>
        </p>
        <p>
          <Link to="/kids-wear" class="text-reset">Kids Wear</Link>
        </p>
        <p>
          <Link to="/specials" class="text-reset">Specials</Link>
        </p>
        <p>
          <Link to="/home & furnishing" class="text-reset">Home & Furnishing</Link>
        </p>
      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-3 col-lg-2 col-xl-2 col-sm-3 mx-auto mb-4">
        {/* <!-- Links --> */}
        <h6 class="text-uppercase fw-bold mb-4">
          Useful links
        </h6>
        <p>
          <a href="#!" class="text-reset">Terms&Conditions</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Privacy Policy</a>
        </p>
      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-4 col-lg-3 col-xl-3 col-sm-4 mx-auto mb-md-0 mb-4">
        {/* <!-- Links --> */}
        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
        <p>
          <i class="fas fa-home me-3"></i>123 Main Street Anytown,Jaipur,302001
        </p>
        <p>
          <i class="fas fa-envelope me-3"></i>
          itsherswish@gmail.com
        </p>
        <p><i class="fas fa-phone me-3"></i>+91-9988776655</p>
        <p><i class="fas fa-print me-3"></i>0141-0123456</p>
      </div>
      {/* <!-- Grid column --> */}
    </div>
    {/* <!-- Grid row --> */}
  </div>
</section>
{/* <!-- Section: Links  --> */}

{/* <!-- Copyright --> */}
<div class="text-center p-4">
  © 2023 Copyright:
  <a class="text-reset fw-bold" href="https://her-s-wish.onrender.com">Her_s_wish 2023. All rights reserved.</a>
</div>
{/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
        </>
    );
}

export default HomeFooter;