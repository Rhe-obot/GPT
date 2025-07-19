import './App.css'
import { Footer, Blog, WhatGPT3, Possibility, Features, Header} from './containers';
import { Cta, Brand, Navbar } from './componenets'


function App() {
    

  return (
    <>
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
    </>
    
  )
}

export default App
