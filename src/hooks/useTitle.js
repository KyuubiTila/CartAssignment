import { useEffect } from 'react';

export const useTitle = (tittle) => {
  useEffect(() => {
    document.title = `${tittle} | Cart Assignment`;
  }, [tittle]);
  return null;
};
