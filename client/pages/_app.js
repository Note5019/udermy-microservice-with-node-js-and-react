import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../component/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (<div>
            <Header currentUser={currentUser} />
            <Component {...pageProps} />
          </div>
          );
};

AppComponent.getInitialProps = async appContent => {
  console.log(appContent);

  const client = buildClient(appContent.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps;
  if (appContent.Component.getInitialProps) {
    pageProps = await appContent.Component.getInitialProps(appContent.ctx);
  }

  console.log("pageProps", pageProps);
  return {
    pageProps,
    ...data
  };
};

export default AppComponent;