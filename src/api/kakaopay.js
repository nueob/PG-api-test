import axios from 'axios';

const handleKakaopayRequest = async (paymentData) => {
  try {
    const apiUrl = 'https://kapi.kakao.com/v1/payment/ready';
    const response = await axios.post(
      apiUrl,
      paymentData,
      {
        headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOPAY}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        }
      }
    );
    return response.data.next_redirect_pc_url;
  } catch (error) {
    console.log('Error making payment request:', error);
    throw error;
  }
};

export default {
    handleKakaopayRequest
};
