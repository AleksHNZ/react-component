import './App.css';

const imgStyle = {
  borderRadius: '20px',
}

function App() {
  return(

    <div className='container'>

      <div className='wrapper'>

         <div className='logo'>
             <img className='main-image' src={require('./images/image-qr-code.png')} style={imgStyle}  />
          </div>
        <main className='main-txt'>
            <h2 className='main-header'>Improve your front-end skills by building projects</h2>
             <p className='main-para'>
            Scan the QR code to visit my GitHub repository to check my projects!
          </p>
        </main>
      </div>
    </div>
  )
}

export default App;
