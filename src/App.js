import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import React from 'react';
import './App.css';
import GetQuotes from './components/GetQuotes';
import Header from './components/Header';
require('dotenv').config();

const uri = 'http://localhost:4002/api';
const httpLink = createHttpLink({uri});
const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
    
});

const App = () => {
    return(
        <ApolloProvider client={client}>
            {" "}
            <div className="container">
                {/* <img src={TR} alt="" /> */}
            </div>
            <Header/>
            <GetQuotes/>
            
        </ApolloProvider>
    );
};
export default App