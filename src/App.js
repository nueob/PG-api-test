import './App.css';
import axios from "axios";
import kakaopayLogo from "./images/payment_icon_yellow_large.png";

// 결제 요청 생성
const createPaymentRequest = async () => {
  const apiUrl = 'https://kapi.kakao.com/v1/payment/ready';

  try {
    const response = await axios.post(
      apiUrl,
      {
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
      },
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOPAY}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error('Error creating payment request:', error);
  }
};

// 결제 요청 보내기
createPaymentRequest();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kakaopayLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
