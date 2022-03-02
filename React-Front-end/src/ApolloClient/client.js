import { ApolloClient, InMemoryCache } from "@apollo/client";



export const client = new ApolloClient({
    uri: 'http://127.0.0.1:8000',
    cache: new InMemoryCache()
  });



// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
//   uri: 'http://127.0.0.1:8000',
// });
// // const lin="http://127.0.0.1:8000"

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImhlbGxvIiwiZXhwIjoxNjQ2MjI1NDU2LCJvcmlnSWF0IjoxNjQ2MjI1MTU2fQ.P9Rmo19mEn_cY933YjPBSMwIQS1U4lgVd3gCiNa8-GQ";
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${console.log(token)}` : "",
//     }
//   }
// });

// export const client = new ApolloClient({
//   uri: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });
