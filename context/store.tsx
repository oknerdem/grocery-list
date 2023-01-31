import { createContext, useContext, useState } from 'react';

const StoreContext = createContext<any>({
  data: [],
  setData: (): any => {},
});

export const StoreProvider = ({ children }: any) => {
  const [data, setData] = useState<[]>([]);

  return (
    <StoreContext.Provider value={{ data, setData }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
