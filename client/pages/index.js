import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log('I am on the component', currentUser);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  console.log(req.headers);
  if ( typeof window === 'undefined') {
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers
      });

    return data;
  } else {
    const { data } = await axios.get('/api/users/currentuser');

    return data;
  }

  // const response = await axios.get('/api/users/currentuser');
  return {};
  // return response.data;
};

export default LandingPage;