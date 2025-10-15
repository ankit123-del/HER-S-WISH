import { useState } from "react";
import { Link } from "react-router-dom";

function ConfirmOrderForm() {
    const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const isButtonDisabled = !address || !mobile;

  return (
    <>
        <div className="container finaldetails-container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="finaldetails-content">
                <h2 className="confirm-order-head">Confirm Order</h2><br/>
                <form className="left-box">
                  <div class="mb-3">
                    <label for="name" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" name="name" required/>
                    <label for="delivery-address" class="form-label" >
                      Delivery address
                    </label>
                    <input type="text" class="form-control" value={address}
              onChange={handleAddressChange} required/>
                  </div>
                  <div class="mb-3">
                    <label for="contact" class="form-label">
                      Mobile No.
                    </label>
                    <input
                      type="tel"
                      pattern="[1-9]{1}[0-9]{9}"
                      className="form-control"
                      value={mobile}
              onChange={handleMobileChange} required
                    />
                  </div>
                  <Link to={!isButtonDisabled ? "/confirmed":""}style={{textDecoration:"none",color:"white"}} >
                  <button type="submit" class="btn btn-primary confirm-order-btn" disabled={isButtonDisabled}>
                  Confirm Order!
                  </button>
                  </Link>
                </form>
              </div>
            </div>
            <div className="col-lg-6 hide">
              <div>
                <img
                  src={require(`./additional images/confirmOrder.jpg`)}
                  alt=""
                  style={{ width: "80%", height: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
export default ConfirmOrderForm;
