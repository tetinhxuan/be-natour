import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51Oru2N094FcsmDOVvAPETAbH31kiXVZTtWudoWeOSNw5ib98JRNmLLbkVXnObCvaU9djvIs9uej85AjwMFUADeBq00Noq6b7LN',
    );
    // 1. Get checkout session from API
    const session = await axios(
      `http://localhost:4000/api/v1/bookings/checkout-session/${tourId}`,
    );
    // 2. Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
