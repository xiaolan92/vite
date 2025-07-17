import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Router from './routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>
)
