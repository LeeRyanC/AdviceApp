import React, {useState, useEffect} from 'react'
import axios from 'axios'

import '../App.css'

const Main = () => {
    
    const [advice, setAdvice] = useState("")

    const slipID = Math.floor(Math.random() * (101 - 1) + 1)
    const url = `https://api.adviceslip.com/advice/${slipID}`
    
    const clickHandler = (e) => {
        e.preventDefault()
        axios.get(url)
            .then(res => {
                if(typeof res.data === 'object'){
                    setAdvice(res.data.slip.advice)
                }
                else{
                    var data = JSON.parse(res.data + "}")
                    setAdvice(data.slip.advice)
                }
            })
            .catch(err => {
                console.log(err)
                console.log(slipID)
            })
    }

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res)
                setAdvice(res.data.slip.advice)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div className="app">
            <div className="component">
                <h1 className="advice">{advice}</h1>
                <button type="submit" onClick={clickHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Give Me Insight
                </button>
            </div>
        </div>
    )
}
export default Main;