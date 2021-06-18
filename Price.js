import React,{useContext} from 'react'
import './Price.css'
import {themeContext} from './App.js'

function Price() {

    const darkMode=useContext(themeContext)

    return (
        <div className='price'>
            <div className="percentVsTime">
                <h1 className="percentage">0.87 %</h1>
                <p className="time">5 mins</p>
            </div>
            <div className="percentVsTime">
                <h1 className="percentage">1.02 %</h1>
                <p className="time">1 Hour</p>
            </div>
            <div className="priceToTrade">
                <p className={`tradeTitle ${darkMode&&`tradeTitle-dark`}`}>Best Price to trade</p>
                <p className={`priceVsINR ${darkMode&&`priceVsINR-dark`}`}>₹ 29,83,604</p>
                <p className={`commission ${darkMode&&`commission-dark`}`}>Average BTC/INR net price including commission</p>
            </div>
            <div className="percentVsTime">
                <h1 className="percentage">7.22 %</h1>
                <p className="time">1 Day</p>
            </div>
            <div className="percentVsTime">
                <h1 className="percentage">10.86 %</h1>
                <p className="time">7 Days</p>
            </div>
        </div>
    )
}

export default Price
