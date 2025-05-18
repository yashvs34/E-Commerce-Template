import { useState, useEffect } from 'react'
import './App.css'
import Category from './components/Category';
import axios from 'axios';

function App() {
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=194&skip=0")
      .then((res) => {
        const products = res.data.products;

        const grouped = [...new Set(products.map(item => item.category))].map(category => {
          return {
            category,
            items: products.filter(product => product.category === category)
          };
        });

        setGroupedData(grouped);
      });
  }, []);

  return (
    <>
      {groupedData.map((item, index) => {
        return <Category id = {index} name = {item.category} items = {item.items} />
      })}
    </>
  );

}

export default App
