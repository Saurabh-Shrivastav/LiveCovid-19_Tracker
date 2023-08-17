import React, { useEffect, useState } from "react";
import './covid.css';

function Covid() {

    const [data, setData] = useState([])

    const getData = async () =>{
        const data = await fetch('https://data.covid19india.org/data.json')
        const actualData = await data.json()
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0])
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <>
            <h2>🔴LIVE</h2>
            <h1>COVID-19 CORONAVIRUS TRACKER</h1>
            <div className="main" style={{backgroundColor:"DodgerBlue"}}>
                <div className="inner">
                    <p className="para1"><span>OUR</span>&nbsp;COUNTRY</p>
                    <p className="para2" style={{fontfamily: "Garamond, serif"}}>INDIA</p>
                </div>
            </div>

            <div className="main" style={{backgroundColor:"MediumSeaGreen"}}>
                <div className="inner">
                    <p className="para1"><span>TOTAL</span>&nbsp;RECOVERED</p>
                    <p className="para2" style={{fontfamily: "Garamond, serif"}}>{data.recovered}</p>
                </div>
            </div>

            <div className="main" style={{backgroundColor:"Orange"}}>
                <div className="inner">
                    <p className="para1"><span>TOTAL</span>&nbsp;CONFIRMED</p>
                    <p className="para2" style={{fontfamily: "Garamond, serif"}}>{data.confirmed}</p>
                </div>
            </div>

            <div className="main" style={{backgroundColor:"Tomato"}}>
                <div className="inner">
                    <p className="para1"><span>TOTAL</span>&nbsp;DEATHS</p>
                    <p className="para2" style={{fontfamily: "Garamond, serif"}}>{data.deaths}</p>
                </div>
            </div>

            <div className="main" style={{backgroundColor:"Violet"}}>
                <div className="inner">
                    <p className="para1"><span>TOTAL</span>&nbsp;ACTIVE</p>
                    <p className="para2" style={{fontfamily: "Garamond, serif"}}>{data.active}</p>
                </div>
            </div>

            <div className="main" style={{backgroundColor:"SlateBlue"}}>
                <div className="inner">
                    <p className="para1"><span>LAST</span>&nbsp;UPDATED</p>
                    <p className="para2" style={{fontfamily: "Garamond, serif", display:"relative", fontSize:'2rem'}}>{data.lastupdatedtime}</p>
                </div>
            </div>
            
        </>
    )
}
export default Covid;