import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const { cart } = useSelector((state) => state.shoppingCart);

  const totalCalculator = () => {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].quantity;
    }

    return sum;
  };

  ////////////////////////////////////////////////////////////////////////

  // Email

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  ///////////////////////////////////////////////////////////////////////

  // Card Number

  const [cardNumber, setCardNumber] = useState('');

  const handleCardNumberChange = (event) => {
    const value = event.target.value;
    setCardNumber(value);
  };

  const validateCardNumber = (cardNumber) => {
    const creditCardRegex =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return creditCardRegex.test(cardNumber);
  };

  ///////////////////////////////////////////////////////////////////////

  // CVV

  const [cvv, setCVV] = useState('');

  const handleCVVChange = (event) => {
    const value = event.target.value;
    setCVV(value);
  };

  const validateCVV = (cvv) => {
    const cvvRegex = /^[0-9]{3}$/;
    return cvvRegex.test(cvv);
  };

  ///////////////////////////////////////////////////////////////////////

  // Expiration

  const [expiration, setExpiration] = useState('');

  const handleExpirationChange = (event) => {
    const value = event.target.value;
    setExpiration(value);
  };

  const validateExpiration = (expiration) => {
    const monthRegex = /^(20[2-4][3-9]|2050)-(0[1-9]|1[0-2])$/;
    return monthRegex.test(expiration);
  };

  ///////////////////////////////////////////////////////////////////////

  // Address

  const [address, setAddress] = useState('');

  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
  };

  const validateAddess = (address) => {
    const addressRegex = /^.{3,}$/;
    return addressRegex.test(address);
  };

  ///////////////////////////////////////////////////////////////////////

  // City

  const [city, setCity] = useState('');

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  const validateCity = (city) => {
    const cityRegex = /^[A-Za-z]{2,}$/;
    return cityRegex.test(city);
  };

  ///////////////////////////////////////////////////////////////////////

  // Billing Address

  const [billingAddress, setBillingAddress] = useState('');

  const handleBillingAddressChange = (event) => {
    const value = event.target.value;
    setBillingAddress(value);
  };

  const validateBillingAddress = (billingAddress) => {
    return ['Albania', 'USA', 'Germany', 'Italy'].includes(billingAddress);
  };

  ///////////////////////////////////////////////////////////////////////

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      return;
    }

    if (!validateCardNumber(cardNumber)) {
      return;
    }

    if (!validateCVV(cvv)) {
      return;
    }

    if (!validateExpiration(expiration)) {
      return;
    }

    if (!validateBillingAddress(billingAddress)) {
      return;
    }

    if (!validateAddess(address)) {
      return;
    }

    if (!validateCity(city)) {
      return;
    }

    window.location.href = '/success';
  };

  ///////////////////////////////////////////////////////////////////////

  return (
    <div className="w-full min-h-full p-4 mx-auto flex flex-col gap-4">
      <h1 className="font-poppins font-bold text-lg">
        Your toal: {totalCalculator()}
      </h1>
      <div className="flex flex-col gap-1">
        <label className="font-poppins font-semibold text-lg" htmlFor="email">
          Email
        </label>
        <input
          onChange={handleEmailChange}
          id="email"
          type="email"
          placeholder="Email"
          className="outline-none border-2 p-1"
        />
        {!validateEmail(email) && (
          <span className="clear-none font-poppins text-sm text-red-600">
            Type a valid email*
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-poppins font-semibold text-lg" htmlFor="card">
          Card Number
        </label>
        <input
          onChange={handleCardNumberChange}
          id="card"
          type="number"
          placeholder="Card Number"
          className="outline-none border-2 p-1"
        />
        {!validateCardNumber(cardNumber) && (
          <span className=" clear-none font-poppins text-sm text-red-600">
            Type a valid card number*
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-poppins font-semibold text-lg" htmlFor="ccv">
          CCV
        </label>
        <input
          onChange={handleCVVChange}
          id="ccv"
          type="number"
          placeholder="CCV"
          className="outline-none border-2 p-1"
        />
        {!validateCVV(cvv) && (
          <span className=" clear-none font-poppins text-sm text-red-600">
            Type a valid ccv*
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="font-poppins font-semibold text-lg"
          htmlFor="expiration"
        >
          Expiration
        </label>
        <input
          onChange={handleExpirationChange}
          id="expiration"
          type="month"
          placeholder="Expiration"
          className="outline-none border-2 p-1"
        />
        {!validateExpiration(expiration) && (
          <span className=" clear-none font-poppins text-sm text-red-600">
            Type a valid expiration date*
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-poppins font-semibold text-lg">
          Billing Address
        </label>

        <div className="flex flex-col gap-2">
          <select
            onChange={handleBillingAddressChange}
            name="Country"
            className="font-poppins outline-none border-2 p-1"
          >
            <option className="font-poppins">Albania</option>
            <option className="font-poppins">USA</option>
            <option className="font-poppins">Italy</option>
            <option className="font-poppins">Germany</option>
          </select>
          {!validateBillingAddress(billingAddress) && (
            <span className=" clear-none font-poppins text-sm text-red-600">
              Pick a country*
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="font-poppins font-semibold text-lg"
            htmlFor="address"
          >
            Address
          </label>
          <input
            onChange={handleAddressChange}
            id="address"
            type="text"
            placeholder="Address"
            className="outline-none border-2 p-1"
          />
          {!validateAddess(address) && (
            <span className=" clear-none font-poppins text-sm text-red-600">
              Type a valid address*
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-poppins font-semibold text-lg" htmlFor="city">
            City
          </label>
          <input
            onChange={handleCityChange}
            id="city"
            type="text"
            placeholder="City"
            className="outline-none border-2 p-1"
          />
          {!validateCity(city) && (
            <span className="clear-none font-poppins text-sm text-red-600">
              Type a valid city*
            </span>
          )}
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="font-poppins font-semibold p-1 text-base bg-transparent hover:text-white hover:bg-black
        ] border border-black rounded-lg cart-button flex justify-center items-center gap-2  transition-all duration-100 ease-linear"
      >
        Pay ${totalCalculator()}
      </button>
    </div>
  );
};
