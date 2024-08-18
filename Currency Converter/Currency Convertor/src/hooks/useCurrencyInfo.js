import { useState, useEffect } from "react";

function useCurrencyInfo (currency){
    useEffect(()=>{
        const [data, setData] = useState({})
        fetch(`https://v6.exchangerate-api.com/v6/19967ef52780f5bf2a77f3aa/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
    
}

export default useCurrencyInfo;