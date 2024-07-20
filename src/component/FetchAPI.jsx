import React from 'react'

function FetchAPI() {
    let [api_data,setApi_data]=useState([])
    useEffect(()=>{fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setApi_data(data))},[])
        console.log(api_data);
  return (
    <>
    <h1>Example of API</h1>

    {api_data.map((ad)=>
    <div>
        <h1>{ad.title}</h1>
        <img src={ad.image} alt="" style={{width:100}} />
        <p>{ad.description}</p>

        </div>
    )}

    
      
    </>
  )
}

export default FetchAPI
