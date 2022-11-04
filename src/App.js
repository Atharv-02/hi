import './style.css';
function App() {
  return (
    <>
      <nav className='navbar'>
        <h3>Our Project</h3>
        <ul>
          <li>Home</li>
          <li>Buy</li>
          <li>About Us</li>
          <li>Sign Up/Sign In</li>
        </ul>
      </nav>
      <div className='main-page'>
        <div className='main-content'>
          <div className='main-heading'>
            <h2>
              DISCOVER SUPER
              <br />
              <span>NFTs</span>
            </h2>
          </div>
          <div className='main-para'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              suscipit tenetur veritatis sequi cum iure. Autem similique,
              consequatur ex rerum, sed aut inventore reprehenderit quis
              repellendus dicta cupiditate, commodi explicabo maxime quia
              consequuntur quod placeat et. Fuga, quasi fugit architecto
              assumenda nesciunt numquam similique adipisci suscipit eligendi
              aut perspiciatis ducimus unde pariatur a sunt culpa delectus eaque
              natus sequi in alias facere excepturi omnis! Rem sequi adipisci
              accusamus sapiente dicta.
            </p>
          </div>
          <div className='btn-container'>
            <button className='btn btn-buy'>BUY</button>
            <button className='btn btn-buy'>SIGN UP/SIGN IN</button>
          </div>
        </div>
        <div className='main-images'>
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/002/144/780/small/gaming-banner-for-games-with-glitch-effect-neon-light-on-text-illustration-design-free-vector.jpg'
            alt=''
            className='img-main'
          />
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/002/144/780/small/gaming-banner-for-games-with-glitch-effect-neon-light-on-text-illustration-design-free-vector.jpg'
            alt=''
            className='img-main'
          />
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/002/144/780/small/gaming-banner-for-games-with-glitch-effect-neon-light-on-text-illustration-design-free-vector.jpg'
            alt=''
            className='img-main'
          />
        </div>
      </div>
    </>
  );
}

export default App;
