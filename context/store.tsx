import { createContext, useContext, useState } from 'react';

const StoreContext = createContext<any>({
  data: [],
  setData: () => {},
  status: '',
  setStatus: () => {},
});

export const StoreProvider = ({ children }: any) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('empty');

  return (
    <StoreContext.Provider value={{ data, setData, status, setStatus }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
