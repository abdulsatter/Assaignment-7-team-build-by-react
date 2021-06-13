import './App.css';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import Cart from './components/Cart/Cart';
import fakeData from './fakeData/fakeData.json';

function App() {

  const [players, setPlayers] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    setPlayers(fakeData)
    console.log(fakeData.image)
  }, [])
  // event handler
  const addClick = (player) => {
    const newCart = [...cart, player];
    setCart(newCart)
    // console.log('clicked')
  }

  return (
    <div className = 'head'>
      <h1>BENGLE CRICKET TEAM</h1>
    <div className="main-container">
     
      <div className = 'player-container'>
        {
          players.map(player => <Player
            addClick={addClick}
            player={player}>

          </Player>)
        }

      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>

      </div>

    </div>
  );
}

export default App;
