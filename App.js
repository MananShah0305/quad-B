import { useState, createContext } from 'react'
import './App.css';
import Header from './Header.js'
import Price from './Price.js'
import Banner from './Banner.js'
import PriceInfo from './PriceInfo.js'
import FooterBanner from './FooterBanner.js';
import Footer from './Footer.js';
import CompanyInfo from './CompanyInfo.js';

export const themeContext = createContext(false)

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? (`app-dark`) : (`app`)}>
      <themeContext.Provider value={darkMode}>
       <Header></Header>
        <label className="switch" >
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          <span className="slider round"></span>
        </label>
        <Price></Price>
        <Banner></Banner>
        <PriceInfo></PriceInfo>
        <FooterBanner></FooterBanner>
        <CompanyInfo></CompanyInfo>
        <Footer></Footer>
      </themeContext.Provider>
    </div>
  );
}

export default App;
