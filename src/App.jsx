import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

import './App.css'
function App() {
  const [amount,setAmount] = useState("")
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState('inr')
  const [convertedAmount,setCovertedAmount]=useState("")

  const currencyInfo=useCurrencyInfo(from)
   const options=Object.keys(currencyInfo)

   const swap=()=>{
     setFrom(to)
     setTo(from)
     setCovertedAmount(amount)
     setAmount(convertedAmount)
   }
  const convert=()=>{
     setCovertedAmount(amount*currencyInfo[to])
  }


  return (
    <>
       <div
            className="w-full h-screen flex flex-wrap justify-center items-center m-0 p-0">
              <video autoPlay muted loop className='absolute w-full h-full object-cover -z-10' src='https://videos.pexels.com/video-files/32261093/13758640_2048_1080_30fps.mp4' type=''></video>
           
        
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()

                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                                className='border-blue-600 outline-none'


                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                className='border-blue-600 outline-none'

                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
