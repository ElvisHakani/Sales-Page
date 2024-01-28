import { createContext, useState } from 'react';

export const ProductsAddContext = createContext();

export const ProductsAddProvider = ({ children }) => {
  const [productsAdd, setProductsAdd] = useState([]);

  return (
    <ProductsAddContext.Provider value={{ productsAdd, setProductsAdd }}>
      {children}
    </ProductsAddContext.Provider>
  );
};