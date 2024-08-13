'use client';

import React, { useEffect } from 'react';
import { fbPageView } from '../conversion-api';

type Props = {
  children: React.ReactNode
};

const FBPixelProvider = ({ children }: Props) => {
  useEffect(() => {
    fbPageView();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};

export default FBPixelProvider;
