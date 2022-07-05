import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root'
import {BrowserRouter} from 'react-router-dom'
import { QueryClientProvider,QueryClient } from 'react-query';
import 'antd/dist/antd.css';

const query = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <QueryClientProvider client={query}>
        <Root/>
      </QueryClientProvider>
    </BrowserRouter>
  </>
);





