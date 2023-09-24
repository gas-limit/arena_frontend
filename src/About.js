import React, { useState, useEffect } from 'react';

const BidderList = [
  { name: 'dave.eth', amount: '1.5 ETH' },
  { name: 'carol.eth', amount: '1.2 ETH' },
  { name: 'bob.eth', amount: '0.8 ETH' },
  { name: 'alice.eth', amount: '0.5 ETH' },
];

const MiladyMetadata = {
  name: 'Milady #6968',
  rarity: 'Legendary',
  attribute: 'Fire',
  power: '9000',
};

function About() {
  const [buttonStyle, setButtonStyle] = useState({
    width: '240px',
    height: '100px',
    color: 'white',
    backgroundColor: 'black',
    border: '1px solid yellow',
    marginLeft: '20px',
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonStyle(prevStyle => ({
        ...prevStyle,
        color: prevStyle.color === 'white' ? 'black' : 'white',
        backgroundColor: prevStyle.backgroundColor === 'black' ? 'white' : 'black',
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleBidClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmBid = () => {
    console.log(`Confirmed bid of ${bidAmount} ETH`);
    setModalOpen(false);
  };

  return (
    <div style={{ marginLeft: window.innerWidth > 500 ? "30%" : "15%", marginRight: window.innerWidth > 540 ? "30%" : "15%", color: "yellow" }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>#6968</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <img src="https://i.imgur.com/JWhDrcY.png" alt="NFT" style={{ maxWidth: '400px' }} />
          <div style={{ border: '1px solid yellow', padding: '20px', marginLeft:"20px" }}>
            <h2>Bids</h2>
            {BidderList.map((bid, index) => (
              <div key={index}>
                {`${1 + index}. ${bid.name} ${bid.amount}`}
                <br/>
                
              </div>
              
            ))}
            more
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
          <div style={{ border: '1px solid yellow', padding: '20px', color: 'yellow' }}>
            <div>Name: {MiladyMetadata.name}</div>
            <div>Rarity: {MiladyMetadata.rarity}</div>
            <div>Attribute: {MiladyMetadata.attribute}</div>
            <div>Power: {MiladyMetadata.power}</div>
          </div>
          <button style={buttonStyle} onClick={handleBidClick}>
            <h1>BID</h1>
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
          <button onClick={handleCloseModal} style={{ float: 'right' }}>X</button>
          <h2>Enter your bid:</h2>
          <input type="number" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} />
          <button onClick={handleConfirmBid}>Confirm Bid</button>
        </div>
      )}
    </div>
  );
}

export default About;
