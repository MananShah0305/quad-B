import React,{useState,useEffect,useContext} from 'react'
import './PriceInfoCompany.css'
import {themeContext} from './App.js'

function PriceInfoCompany({ serial, platform, lastTradePrice, buySellPrice, difference, savings, imgSrc,link }) {
    const darkMode=useContext(themeContext)
    const [color,setColor]=useState('green')

    useEffect(()=>{
        if(difference.charAt(0)=='-'){
            setColor('red')
        }
        else{
            setColor('green')
        }
    },[])
    return (
        <div className={`priceInfoCompany ${darkMode&&`priceInfoCompany-dark`}`}>
            <div className={darkMode?(`details-dark`):(`details`)}>{serial}</div>
            <div className={darkMode?(`details-dark`):(`details`)}>
                <a className='companyInfo' href={link} target='_blank'>
                    <img className='logo' src={imgSrc} alt="Logo" />
                    <h4 className={darkMode?(`platform-dark`):(`platform`)}>{platform}</h4>
                </a>
            </div>
            <div className={darkMode?(`details-dark`):(`details`)}>{lastTradePrice}</div>
            <div className={darkMode?(`details-dark`):(`details`)}>{buySellPrice}</div>
            <div className={`${color} ${darkMode?(`details-dark`):(`details`)}`}>{difference}</div>
            <div className={`${color} ${darkMode?(`details-dark`):(`details`)}`}>{savings}</div>
        </div >
    )
}

export default PriceInfoCompany
