import React,{useContext} from 'react'
import './CompanyInfo.css'

import {themeContext} from './App.js'
function CompanyInfo() {

    const darkMode=useContext(themeContext)
    return (
        <div className='companyInfo'>
            <div className={`copyright ${darkMode&&`copyright-dark`}`}>
                <p>Copyright © 2019</p>          
                <p>HodlInfo.com</p>         
                <p>Developed By <span className={`span ${darkMode&&`span-dark`}`}>QuadBTech</span></p>
            </div>
            <div className={`support ${darkMode&&`support-dark`}`}>
                Support
            </div>
        </div>
    )
}

export default CompanyInfo
