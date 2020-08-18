import React, { useState, useEffect } from 'react'


function Calc(){
    const [firstNumber, setFirstNumber] = useState("0")
    const [secondNumber, setSecondNumber] = useState("0")
    const [symbol, setSymbol] = useState(null)
    const [result, setResult] = useState('')

    function discard(){
        setFirstNumber("0")
        setSymbol(null)
        setSecondNumber("0")
    }

    useEffect(() => {
        setFirstNumber(result)
        setSymbol(null)
        setSecondNumber("0")
    }, [result])

    function setNumber(e) {
        if (symbol === null){
            const num = e.target.value
            firstNumber === "0"  ? setFirstNumber(num) : setFirstNumber(firstNumber + num)    
        }
        else {
            const num = e.target.value
            secondNumber === "0"  ? setSecondNumber(num) : setSecondNumber(secondNumber + num)  
        }
    }

    function toggleSymbol(){
        symbol === null ? String(setFirstNumber(-firstNumber)) : String(setSecondNumber(-secondNumber))
    }

    function handlerResult(){

            if (symbol === "+") {
                setResult( +firstNumber + +secondNumber)
            }
            else if(symbol === "*") {
                setResult( +firstNumber * +secondNumber)
            }

            else if(symbol === "−") {
                setResult( +firstNumber - +secondNumber)

            }

            else if(symbol === "/") {
                setResult( +firstNumber / +secondNumber)
            }

    }

    return(
        <div>
            <div className="d-flex justify-content-center mt-4">
                <div className="col-4 calculator d-flex justify-content-center">
                    <div className="btn-group-vertical my-4 p-3 rounded">
                        <h4>{result}</h4>
                        <input className="form-control mb-2" value={symbol === null ? `${firstNumber}` : `${firstNumber}${symbol}${secondNumber}`} readOnly/>
                        <div className="btn-group">
                            <button type="button" onClick={discard} className="btn btn-outline-secondary rounded m-1  p-4">C</button>
                            <button type="button" onClick={handlerResult} className="btn btn-outline-secondary rounded m-1  p-4">=</button>
                            <button type="button" onClick={toggleSymbol} className="btn btn-outline-secondary rounded m-1  p-4">±</button>
                        </div>
                        <div className="btn-group">
                            <button type="button"  value="7" onClick={setNumber} className="btn btn-outline-secondary  rounded m-1 p-4">7</button>
                            <button type="button"  value="8" onClick={setNumber} className="btn btn-outline-secondary  rounded m-1 p-4">8</button>
                            <button type="button"  value="9" onClick={setNumber} className="btn btn-outline-secondary  rounded m-1 p-4">9</button>
                            <button type="button"  value="*" onClick={() => { setSymbol("*") }} className="btn btn-outline-secondary  rounded m-1 p-4">*</button>
                        </div>
                        <div className="btn-group">
                            <button type="button" value="4" onClick={setNumber} className="btn btn-outline-secondary  rounded m-1  p-4">4</button>
                            <button type="button" value="5" onClick={setNumber} className="btn btn-outline-secondary  rounded m-1  p-4">5</button>
                            <button type="button" value="6" onClick={setNumber} className="btn btn-outline-secondary  rounded m-1  p-4">6</button>
                            <button type="button" value="+" onClick={() => { setSymbol("+") }} className="btn btn-outline-secondary  rounded m-1  p-4">+</button>
                        </div>
                        <div className="btn-group">
                            <button type="button" value="1" onClick={setNumber} className="btn btn-outline-secondary  rounded m-1  p-4">1</button>
                            <button type="button" value="2" onClick={setNumber} className="btn btn-outline-secondary  rounded m-1  p-4">2</button>
                            <button type="button" value="3" onClick={setNumber} className="btn btn-outline-secondary  rounded m-1  p-4">3</button>
                            <button type="button" value="−" onClick={() => { setSymbol("−") }} className="btn btn-outline-secondary  rounded m-1  p-4">−</button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary rounded m-1  p-4">±</button>
                            <button type="button" value="0" onClick={setNumber} className="btn btn-outline-secondary rounded m-1  p-4">0</button>
                            <button type="button" value="." onClick={setNumber} className="btn btn-outline-secondary rounded m-1  p-4">.</button>
                            <button type="button" value="/" onClick={() => { setSymbol("/") }} className="btn btn-outline-secondary rounded m-1  p-4">/</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calc;