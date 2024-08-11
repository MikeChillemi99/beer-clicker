import React, { useState, useEffect } from 'react';
import Text from "./components/Text";
import Button from "./components/Button";
import Shop from "./components/Shop";
import Inventory from './components/Inventory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [beerCount, setBeerCount] = useState(0);
  const [item1Count, setItem1Count] = useState(0);
  const [item2Count, setItem2Count] = useState(0);
  const [item3Count, setItem3Count] = useState(0);
  const [item4Count, setItem4Count] = useState(0);
  const [item5Count, setItem5Count] = useState(0);
  const [item1Price, setItem1Price] = useState(60);
  const [item2Price, setItem2Price] = useState(350);
  const [item3Price, setItem3Price] = useState(670);
  const [item4Price, setItem4Price] = useState(1200);
  const [item5Price, setItem5Price] = useState(3000);

  const handleClickBeer = () => {
    setBeerCount(beerCount + 1);
  };

  const handleClickItem1 = () => {
    if (beerCount >= item1Price) {
      setItem1Count(item1Count + 1);
      setBeerCount(beerCount - item1Price);
      setItem1Price(Math.round(item1Price + item1Price * 0.2));
    }
  };

  const handleClickItem2 = () => {
    if (beerCount >= item2Price) {
      setItem2Count(item2Count + 1);
      setBeerCount(beerCount - item2Price);
      setItem2Price(Math.round(item2Price + item2Price * 0.2));
    }
  };

  const handleClickItem3 = () => {
    if (beerCount >= item3Price) {
      setItem3Count(item3Count + 1);
      setBeerCount(beerCount - item3Price);
      setItem3Price(Math.round(item3Price + item3Price * 0.2));
    }
  };

  const handleClickItem4 = () => {
    if (beerCount >= item4Price) {
      setItem4Count(item4Count + 1);
      setBeerCount(beerCount - item4Price);
      setItem4Price(Math.round(item4Price + item4Price * 0.2));
    }
  };

  const handleClickItem5 = () => {
    if (beerCount >= item5Price) {
      setItem5Count(item5Count + 1);
      setBeerCount(beerCount - item5Price);
      setItem5Price(Math.round(item5Price + item5Price * 0.2));
    }
  };

  useEffect(() => {
    const kitInterval = setInterval(() => {
      if (item1Count > 0) {
        setBeerCount((prevCount) => prevCount + item1Count);
      }
    }, 8000);

    return () => clearInterval(kitInterval);
  }, [item1Count]);

  useEffect(() => {
    const kitProInterval = setInterval(() => {
      if (item2Count > 0) {
        setBeerCount((prevCount) => prevCount + item2Count);
      }
    }, 4000);

    return () => clearInterval(kitProInterval);
  }, [item2Count]);

  useEffect(() => {
    const microbrasserieInterval = setInterval(() => {
      if (item3Count > 0) {
        setBeerCount((prevCount) => prevCount + item3Count);
      }
    }, 1000);

    return () => clearInterval(microbrasserieInterval);
  }, [item3Count]);

  useEffect(() => {
    const brasserieInterval = setInterval(() => {
      if (item4Count > 0) {
        setBeerCount((prevCount) => prevCount + item4Count * 2);
      }
    }, 1000);

    return () => clearInterval(brasserieInterval);
  }, [item4Count]);

  useEffect(() => {
    const usineInterval = setInterval(() => {
      if (item5Count > 0) {
        setBeerCount((prevCount) => prevCount + item5Count * 4);
      }
    }, 1000);

    return () => clearInterval(usineInterval);
  }, [item5Count]);

  return (
    <div className="container-fluid bg-light text-black min-vh-100 d-flex flex-column justify-content-center align-items-center p-5">
      <div className="card shadow text-black p-4 rounded-3" style={{ width: '60%', backgroundColor: '#F6C101', color: 'white' }}>
        <div className="d-flex align-items-start mb-4">
          <div className="me-4">
            <Button
              handleClickBeer={handleClickBeer}
              style={{ width: '120px', height: '120px', fontSize: '1.5rem' }}
            />
          </div>
          <div className="d-flex align-items-center mt-4">
            <h1 className="me-2">Nombre de <FontAwesomeIcon icon={faBeer} /> : </h1>
            <span style={{ minWidth: '100px', textAlign: 'left' }}>
              <Text beerCount={beerCount} />
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="w-70 pe-2">
            <div className="card mb-4 text-black" style={{ backgroundColor: 'white', color: 'black', border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
              <div className="card-body">
                <Shop
                  handleClickItem1={handleClickItem1}
                  handleClickItem2={handleClickItem2}
                  handleClickItem3={handleClickItem3}
                  handleClickItem4={handleClickItem4}
                  handleClickItem5={handleClickItem5}
                  item1Price={item1Price}
                  item2Price={item2Price}
                  item3Price={item3Price}
                  item4Price={item4Price}
                  item5Price={item5Price}
                />
              </div>
            </div>
          </div>
          <div className="w-30 ps-2">
            <div className="card" style={{ backgroundColor: '#white', color: 'black', border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
              <div className="card-body">
                <Inventory
                  item1Count={item1Count}
                  item2Count={item2Count}
                  item3Count={item3Count}
                  item4Count={item4Count}
                  item5Count={item5Count}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
