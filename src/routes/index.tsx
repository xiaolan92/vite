import React from 'react';
import { useRoutes } from 'react-router-dom';
import { App } from '@/App';

const routeList = [
    { path: '/', element: <App /> }
]

export default function routes() {
  return useRoutes(routeList);
}
