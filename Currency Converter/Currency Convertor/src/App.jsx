import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState("usd")
  const [currencyTo, setCurrencyTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(currencyFrom)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount *currencyInfo(currencyTo))
  }
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage: `url('https://images.pexels.com/photos/4588678/pexels-photo-4588678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={currencyFrom}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button 
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' 
              type='button'
              onClick={swap}              
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setCurrencyTo(amount)}
                selectCurrency={currencyFrom}
                amountDisable
              />
            </div>
            <button type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
