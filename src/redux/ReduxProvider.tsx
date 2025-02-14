/* eslint-disable @typescript-eslint/no-require-imports */
"use client";

import React, { useEffect } from 'react'
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { ToastContainer } from 'react-toastify';
import 'tw-elements';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
 
  useEffect(() => {
    require('tw-elements');
  }, []);
 
  return (
  <Provider store={store}>
    <Header />
      {children}
      <ToastContainer />
    <Footer />
  </Provider>);
};

export default ReduxProvider;