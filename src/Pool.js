import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

function Pool() {

const NFTTokenData = [
  { image: 'https://i.seadn.io/gcs/files/b59d784a460628093ff04a09298dea74.png?auto=format&dpr=1&w=1000', tokenId: '#3300' },
  { image: 'https://i.seadn.io/gcs/files/86666a2d59eae2491763d8ae22660983.png?auto=format&dpr=1&w=1080', tokenId: '#9891' },
  { image: 'https://i.seadn.io/s/raw/files/f3850b3bf03d10fce0d291a150f550f0.png?auto=format&dpr=1&w=1000', tokenId: '#582' },
  { image: 'https://i.seadn.io/gcs/files/555666e0e0b00b1cde95fb9e4802526b.png?auto=format&dpr=1&w=1000', tokenId: '#8626' },
  { image: 'https://i.seadn.io/gcs/files/79dbf07423b231f0902387874bc5567d.png?auto=format&dpr=1&w=1000', tokenId: '#9164' },
];


const NFTCard = ({ image }) => {
  return (
    <div style={{
      border: '1px solid yellow',
      width: 'fit-content',
      padding: '20px',
      borderRadius: '5px',
      textAlign: 'center',
      marginLeft: "15px"
    }}>
      <div style={{ marginTop: '10px' }}><h1>#6988</h1></div>
      <img src={image} alt="NFT" style={{ maxWidth: '200px' }} />
      <div style={{ marginTop: '10px' }}>Current Bid: 12.0 ETH</div>
      <div style={{ marginTop: '10px' }}>2 hours remaining</div>
      <div style={{ marginTop: '10px' }}>20 bidders</div>
      
    </div>
  );
};

  return (
    <div className="arenaLayout">
      <div className='center'>
        <h2>Milady Pool</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div style={{ width: '60%', textAlign: 'center' }}>
          <table style={{ width: '100%', margin: 'auto', borderCollapse: 'collapse', border: '1px solid black' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black' }}>Image</th>
                <th style={{ border: '1px solid black' }}>Token ID</th>
              </tr>
            </thead>
            <tbody>
              {NFTTokenData.map((nft, index) => (
                <tr key={index} style={{ border: '1px solid black' }}>
                  <td style={{ border: '1px solid black' }}>
                    <img
                      src={nft.image}
                      alt={nft.tokenId}
                      style={{ maxWidth: '100px' }}
                    />
                  </td>
                  <td style={{ border: '1px solid black' }}>{nft.tokenId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/about" style={{color:"yellow", textDecoration: "none"}}>
        <NFTCard image="https://i.imgur.com/JWhDrcY.png" />
        </Link>
      </div>
    </div>
  );
}

export default Pool;
