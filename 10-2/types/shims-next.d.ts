import { DefaultQuery } from 'next-server/router';
import { NextContext } from 'next';
import { AppProps } from 'next/app';
import { ReduxStoreInstance } from '../store';

declare module 'next' {
  interface NextContext<Q extends DefaultQuery = DefaultQuery> {
    store: ReduxStoreInstance;
  }
}

declare module 'next/app' {
  interface AppProps<Q extends DefaultQuery = DefaultQuery> {
    store: ReduxStoreInstance;
  }
}
