import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './Signup.css'; // Import the CSS file

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    // Simple validation
    const newErrors = {};
    if (!name) newErrors.name = "Full Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phone) newErrors.phone = "Phone Number is required";
    if (!password) newErrors.password = "Password is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!country) newErrors.country = "Country is required";
    if (!zip) newErrors.zip = "Zip/Postal code is required";
    if (!terms) newErrors.terms = "You must agree to the terms and conditions";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    axios.post('http://localhost:3001/SignUp', {
      name, email, phone, password, address, city, country, zip
    })
    .then(result => {
      console.log(result);
      navigate('/SignIn');
    })
    .catch(error => console.log(error));
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="eg. John Doe"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Work Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="john@workemail.com"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder="008801234567891"
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Create password"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`form-input ${errors.address ? 'error' : ''}`}
              placeholder="road-001, house-115, example area"
            />
            {errors.address && <p className="error-text">{errors.address}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={`form-input ${errors.city ? 'error' : ''}`}
              placeholder="Your city"
            />
            {errors.city && <p className="error-text">{errors.city}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={`form-input ${errors.country ? 'error' : ''}`}
              placeholder="Your country"
            />
            {errors.country && <p className="error-text">{errors.country}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="zip">Zip/Postal code</label>
            <input
              type="text"
              id="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className={`form-input ${errors.zip ? 'error' : ''}`}
              placeholder="Your zip code"
            />
            {errors.zip && <p className="error-text">{errors.zip}</p>}
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={() => setTerms(!terms)}
            />
            <label htmlFor="terms">
              I agree to the <Link to="/">GAZI Terms of Service</Link> and <Link to="/">Privacy Policy</Link>.
            </label>
            {errors.terms && <p className="error-text">{errors.terms}</p>}
          </div>

          <button type="submit" className="submit-button">Create Account</button>
        </form>
        <div className="footer">
          <p>Don't have an Account? <Link to="/SignIn">Sign in</Link></p>
          <Link to="/shop">
            <button className="continue-shopping-button">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
