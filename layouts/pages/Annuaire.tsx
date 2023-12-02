import React, { useState, useEffect } from 'react';
import Annuaire from '@/components/Annuaire/Annuaire';
import BannerHeader from '@/components/shared/Headers/BannerHeader';

function AnnuaireView() {
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
        <BannerHeader Title='Annuaire' />
      ) : (
        <div className='w-full h-[220px] bg-[#D9D9D9]'></div>
      )}

      <Annuaire />
    </div>
  );
}

export default AnnuaireView;
