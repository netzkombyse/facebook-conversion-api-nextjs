import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { fbPageView } from '../conversion-api';

type Props = {
  children: React.ReactNode
};

const FBPixelProvider = ({ children }: Props) => {
  const pathname = usePathname();

  useEffect(() => {
    fbPageView();
  }, [pathname]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};

export default FBPixelProvider;
