import { createContext, useState } from 'react';

export const TheUserContext = createContext();

export const TheUserProvider = ({ children }) => {
  const [theUser, setTheUser] = useState(null);

  return (
    <TheUserContext.Provider value={{ theUser, setTheUser }}>
      {children}
    </TheUserContext.Provider>
  );
};