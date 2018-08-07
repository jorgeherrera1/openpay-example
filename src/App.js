import React, { Component } from 'react';
import './App.css';

function onSuccess() {
  alert('success');
}

function onError() {
  alert('error');
}

class App extends Component {
  pay() {
    window.OpenPay.token.create({
      "card_number":"4111111111111111",
      "holder_name":"Juan Perez Ramirez",
      "expiration_year":"20",
      "expiration_month":"12",
      "cvv2":"110",
      "address":{
         "city":"Querétaro",
         "line3":"Queretaro",
         "postal_code":"76900",
         "line1":"Av 5 de Febrero",
         "line2":"Roble 207",
         "state":"Queretaro",
         "country_code":"MX"
      }
    }, onSuccess, onError);
  }

  render() {
    return (
      <div className="App">
        <form id="processCard" name="processCard">
          <p>Holder Name:</p><input data-openpay-card="holder_name" size="50" type="text" />
          <p>Card number:</p><input data-openpay-card="card_number" size="50" type="text" />
          <p>Expiration year:</p><input data-openpay-card="expiration_year" size="4" type="text" />
          <p>Expiration month:</p><input data-openpay-card="expiration_month" size="4" type="text" />
          <p>cvv2:</p><input data-openpay-card="cvv2" size="5" type="text" />
          <p>Street:</p><input data-openpay-card-address="line1" size="20" type="text" />
          <p>Number:</p><input data-openpay-card-address="line2" size="20" type="text" />
          <p>References:</p><input data-openpay-card-address="line3" size="20" type="text" />
          <p>Postal code:</p><input data-openpay-card-address="postal_code" size="6" type="text" />
          <p>City:</p><input data-openpay-card-address="city" size="20" type="text" />
          <p>State:</p><input data-openpay-card-address="state" size="20" type="text" />
          <p>Country code:</p><input data-openpay-card-address="country_code" size="3" type="text" />
          <input id="makeRequestCard" type="button" value="Pay" onClick={this.pay}/>
        </form>
      </div>
    );
  }
}

export default App;
