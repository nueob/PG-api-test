import './Payment.css';
import React, { useState } from 'react';
import kakaopayLogo from "../images/payment_icon_yellow_large.png";
import kakaopayApi from '../api/kakaopay';

function PaymentComponent() {
  const [paymentUrl, setPaymentUrl] = useState('');

  const handlePayment = async () => {
    try {
      const paymentData = {
        cid: 'TC0ONETIME',
        partner_order_id: 'partner_order_id',
        partner_user_id: 'partner_user_id',
        item_name: 'Example Item',
        quantity: 1,
        total_amount: 10000,
        tax_free_amount: 0,
        approval_url: 'https://nueob.github.io/PG-api-test/',
        cancel_url: 'https://nueob.github.io/PG-api-test/',
        fail_url: 'https://nueob.github.io/PG-api-test/'
      };
      const response = await kakaopayApi.handleKakaopayRequest(
        paymentData
      );

      setPaymentUrl(response);
    } catch (error) {
      console.log('Error making payment request:', error);
    }
  };

  return (
    <div className='Kakaopay-payment'>
      <button className="Kakaopay-logo" onClick={handlePayment}>
        <img src={kakaopayLogo} />  
      </button>
      {
        paymentUrl &&
        <a href={paymentUrl}>결제 페이지로 이동</a>
      }
    </div>
  );
}

export default PaymentComponent;
