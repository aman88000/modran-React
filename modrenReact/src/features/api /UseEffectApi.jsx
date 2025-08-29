import { use, useEffect, useState } from 'react'
function UseEffectApi(){
    const URL = 'https://dummyjson.com/products'

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

 useEffect(()=>{
   fetch(URL).then((res)=>{
    setLoading(true);
    return res.json()
   }).then((result)=>{
    setLoading(false);
    setData(result.products)
   }).catch((error)=>{
    setLoading(false)
    setError(error)
   })
 }, [])

if(loading){
    return(<h2>loading....</h2>)
}
if(error){
    return(<h2>{error}</h2>)
}

    return <div>
        {console.log('testing')}
        <h3>API call using useEffect which not recomendent in 2025 or react 19</h3>
        {data?.map((itm)=><p key={itm.id}>{itm.title}</p>
        )}
    </div>
}

export default UseEffectApi