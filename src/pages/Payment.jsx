import { useEffect } from 'react';
import useAppStore from '../store';
import { loadStripe } from '@stripe/stripe-js';
import { StripeKey } from '../components/PaymentOffcanvas';

const Payment = () => {
  const { paymentInfo } = useAppStore();

  useEffect(() => {
    const loadPaymentInfo = async () => {
      const stripe = await loadStripe(StripeKey);

      const elements = stripe.elements({
        clientSecret: paymentInfo?.clientSecret,
      });
      const paymentElement = elements.create('payment');
      paymentElement.mount('#payment-element');
      const submitButton = document.getElementById('submit-button');
      submitButton.addEventListener('click', async () => {
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: 'https://jenari.co.uk/orders', // Add your return URL here
          },
        });

        if (error) {
          document.getElementById('payment-errors').textContent = error.message;
        } else {
          submitButton.disabled = true;
        }
      });
    };

    loadPaymentInfo();
  });
  return (
    <div className="min-h-screen mt-40 lg:mt-48 lg:px-16 py-4">
      <div id="payment-element"></div>

      <div id="payment-errors" role="alert"></div>
      <button
        id="submit-button"
        type="button"
        className="mt-6 w-full bg-primary-bg p-2 rounded-md text-white"
      >
        Pay
      </button>
    </div>
  );
};

export default Payment;
