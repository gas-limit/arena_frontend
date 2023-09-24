// Home.js
import React from 'react';
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

function Explore() {
    const NFTData = [
        { image: 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg', name: 'Bored Ape Yacht Club', price: '1.5 ETH' },
        { image: 'https://www.parsehub.com/blog/content/images/2022/01/cp-2338.png', name: 'CryptoPunks', price: '4.2 ETH' },
        { image: 'https://miro.medium.com/v2/resize:fit:1400/1*Fg9-AmnE5X_929CqE1xp9w.png', name: 'Art Blocks', price: '0.8 ETH' },
        { image: 'https://i.imgur.com/JWhDrcY.png', name: 'Milady', price: '2.1 ETH' },
        { image: 'https://www.christies.com/img/LotImages/2022/CKS/2022_CKS_20661_0088_000(world_of_women_woman_5672110206).jpg?mode=max?w=780', name: 'World of Women', price: '1.9 ETH' },
        { image: 'data:image/png;base64,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', name: 'Pudgy Penguins', price: '0.5 ETH' },
      ];
  return (

  <div className='arenaLayout center'>
  <h1>Current Battles</h1>

  <div style={{ width: '80%', margin: 'auto' }}>
    <Link to="/pool" style={{textDecoration: "none", color: "#FF9A20"}}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th></th>
            <th>Collection</th>
            <th>Current Bid</th>
          </tr>
        </thead>
        <tbody>
          {NFTData.map((nft, index) => (
            <tr key={index} style={{ borderBottom: '1px solid black' }}>
              <td>
                <img
                  src={nft.image}
                  alt={nft.name}
                  style={{ width: '100px', height: '100px' }}
                />
              </td>
              <td>{nft.name}</td>
              <td>{nft.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Link>
      <br/>
      <br/>
      Page [1]: 2,3 ....... 17 ->
    </div>


  </div>
  );
}

export default Explore;
