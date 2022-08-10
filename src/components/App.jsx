import { ContactForm } from './ContactForm/ContactForm';
import Container from './Container/Container';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const App = () => {
  return (
    <>
      <Container title="Phone book">
				<ToastContainer />
        <ContactForm />
      </Container>
    </>
  );
};
