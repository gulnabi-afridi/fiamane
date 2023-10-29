import React, { useState, useEffect } from 'react';
import Handler from '@/components/FindCarrier/Handler';
import Offers from '@/components/FindCarrier/offre/offre';
import Depart from '@/components/FindCarrier/depart/depart';
import BannerHeader from '@/components/shared/Headers/BannerHeader';

function FindCarrier() {
  //  this stae will shuffle between offer and depart component
  const [IsOffer, setIsOffer] = useState<boolean>(true);
  // ====> states
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLargeScreen(window.matchMedia('(min-width: 600px)').matches);
      const mediaQuery = window.matchMedia('(min-width: 600px)');
      const handleMediaQueryChange = (e: MediaQueryListEvent) =>
        setIsLargeScreen(e.matches);
      mediaQuery.addEventListener('change', handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    }
  }, []);

  return (
    <div className='w-full'>
      {isLargeScreen ? (
        <BannerHeader
          Title='Une solution de suivi de colis unique'
          Subtitle=' Simple, sécurisé et responsable'
        />
      ) : (
        <div className='w-full h-[220px] bg-[#D9D9D9]'></div>
      )}

      <div className='w-full -translate-y-[60px] sm:-translate-y-[100px]'>
        <Handler setState={setIsOffer} state={IsOffer} />
      </div>
      {IsOffer ? <Offers /> : <Depart />}
    </div>
  );
}

export default FindCarrier;
