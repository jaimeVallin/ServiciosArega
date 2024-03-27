import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://192.168.100.7:5000/api/repositories',
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;