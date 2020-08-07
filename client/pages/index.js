import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  console.log('I am on the component', currentUser);
  return currentUser ? <h1>You are singed in.</h1> : <h1>You are not singed in.</h1> ;
};

LandingPage.getInitialProps = async ( context ) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');

  // const response = await axios.get('/api/users/currentuser');
  return data;
  // return response.data;
};

export default LandingPage;