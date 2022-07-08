// import React, { useEffect, useState } from 'react';
// import './App.css';
// import CurrencyRow from './CurrencyRow';

// const BASE_URL = 'https://api.exchangeratesapi.io/v1/latest? access_key = "FY3GvH2SIVamorbj3RCVp2AB0HLWpPnw"';

// function App() {
//   const [currencyOptions, setCurrencyOptions] = useState([])
//   const [fromCurrency, setFromCurrency] = useState()
//   const [toCurrency, setToCurrency] = useState()
//   const [exchangeRate, setExchangeRate] = useState()
//   const [amount, setAmount] = useState(1)
//   const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

//   let toAmount, fromAmount
//   if (amountInFromCurrency) {
//     fromAmount = amount
//     toAmount = amount * exchangeRate
//   } else {
//     toAmount = amount
//     fromAmount = amount / exchangeRate
//   }

//   useEffect(() => {
//     fetch(BASE_URL)
//       .then(res => res.json())
//       .then(data => {
//         const firstCurrency = Object.keys(data.rates)[0]
//         setCurrencyOptions([data.base, ...Object.keys(data.rates)])
//         setFromCurrency(data.base)
//         setToCurrency(firstCurrency)
//         setExchangeRate(data.rates[firstCurrency])
//       })
//   }, [])

//   useEffect(() => {
//     if (fromCurrency != null && toCurrency != null) {
//       fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
//         .then(res => res.json())
//         .then(data => setExchangeRate(data.rates[toCurrency]))
//     }
//   }, [fromCurrency, toCurrency])

//   function handleFromAmountChange(e) {
//     setAmount(e.target.value)
//     setAmountInFromCurrency(true)
//   }

//   function handleToAmountChange(e) {
//     setAmount(e.target.value)
//     setAmountInFromCurrency(false)
//   }

//   return (
//     <>
//       <h1>Converts</h1>
//       <CurrencyRow
//         currencyOptions={currencyOptions}
//         selectedCurrency={fromCurrency}
//         onChangeCurrency={e => setFromCurrency(e.target.value)}
//         onChangeAmount={handleFromAmountChange}
//         amount={fromAmount}
//       />
//       <div className="equals">=</div>
//       <CurrencyRow
//         currencyOptions={currencyOptions}
//         selectedCurrency={toCurrency}
//         onChangeCurrency={e => setToCurrency(e.target.value)}
//         onChangeAmount={handleToAmountChange}
//         amount={toAmount}
//       />
//     </>
//   );
// }

// export default App;

// import React, { useState } from 'react'
// import axios from 'axios'
// function App() {

//   const [news, setNews] = useState([])

//   const fetchNews = () => {
//     axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
//       .then((response) => {
//         console.log(response);
//         setNews(response.data.articles)
//       })
//   }
//   return (
//     <>
//       <div className="container my-3">
//         <div className="row">
//           <div className="col-4">
//             <button className='btn btn-primary' onClick={fetchNews}>FetchNews</button>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="row">
//           {
//             news.map((value,index) => {
//               return (
//                 <div key={index} className="col-4">
//                   <div className="card" style={{ width: "18rem" }}>
//                     <img src={value.urlToImage} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                       <h5 className="card-title">{value.title}</h5>
//                       <p className="card-text">{value.description}</p>
//                       <a href="#" className="btn btn-primary">Main</a>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           }
//         </div>
//       </div>
//     </>
//   )
// }
// export default App;
// ////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';
// import Coin from './Coin';

// function App() {
//   const [coins, setCoins] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     axios
//       .get(
//         'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
//       )
//       .then(res => {
//         setCoins(res.data);
//         console.log(res.data);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   const handleChange = e => {
//     setSearch(e.target.value);
//   };

//   const filteredCoins = coins.filter(coin =>
//     coin.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className='coin-app'>
//       <div className='coin-search'>
//         <h1 className='coin-text'>Search a currency</h1>
//         <form>
//           <input
//             className='coin-input'
//             type='text'
//             onChange={handleChange}
//             placeholder='Search'
//           />
//         </form>
//       </div>
//       {filteredCoins.map(coin => {
//         return (
//           <Coin
//             key={coin.id}
//             name={coin.name}
//             price={coin.current_price}
//             symbol={coin.symbol}
//             marketcap={coin.total_volume}
//             volume={coin.market_cap}
//             image={coin.image}
//             priceChange={coin.price_change_percentage_24h}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default App;
// ///////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { Card, Button } from 'antd';
import axios from 'axios';
const { Meta } = Card;


function Business() {

  const [business, setbusiness] = useState([]);

  useEffect(() => {
    const loadbusiness = async () => {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d8a14f5d0a7d45f395a26e95e34050b0  ");

      setbusiness(response.data.articles);
    };
    loadbusiness();
  }, []);

  console.log('business', business);
  return (

    <div className="container-fluid" style={{ width: '60%' }}>
      <div class="line top">
        <div>Business News</div>
      </div>
      {business && business.map((item, index) => {
        return (
          // <Card
          // key={index}
          // hoverable style={{width: "70%"}}
          // cover={<img alt="image" src= {item.image_url}/>}>

          //     <Meta title={item.title} description={item.image_url}/>
          //     <a href={item.link} target='blank' rel="noopener noreferrer">
          //         <Button type="primary" style={{marginTop: '10px'}}>Read More</Button>
          //     </a>
          // </Card>
          <div key={index}>
            <div class="row" >
              <article class="col-md-12 article-list">
                {item.urlToImage && (
                  <div class="inner">
                    <figure>
                      <a href="single.html">
                        <img src={item.urlToImage} alt="Sample Article" />
                      </a>
                    </figure>
                    <div class="details">
                      <div class="detail">
                        <div class="category">
                          <a href="#">News</a>
                        </div>
                        <div class="time">{item.publishedAt}</div>
                        {/* <div class="time">December 19, 2016</div> */}
                      </div>
                      <h1><a href="single.html">{item.title} </a></h1>
                      <p>
                        {item.description}
                      </p>
                      <footer>
                        <a href="#" class="love"><i class="ion-android-favorite-outline"></i> <div>273</div></a>
                        <a class="btn btn-primary more" href={item.url}>
                          <div>More</div>
                          <div><i class="ion-ios-arrow-thin-right"></i></div>
                        </a>
                      </footer>
                    </div>
                  </div>
                )}
              </article>
            </div>
            <br />
          </div>
        )

      })}
    </div>
  )
}
export default Business;