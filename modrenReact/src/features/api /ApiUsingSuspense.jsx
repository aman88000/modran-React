import { Suspense } from "react"

function ApiUsingSuspense(){
    return(
        <div>
            <h2>Api calling using suspense</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
                <ProductCom />
            </Suspense>
        </div>
    )
}

let data = null
const URL = 'https://dummyjson.com/products'
const promiseFn = function(){
    return new Promise((resolve)=>{
        fetch(URL).then((res)=>res.json()).then((result)=>{
            data = result.products
          resolve(result.products)
        }).catch((e)=>{
            data = 'Error occured'
           resolve()
        })
    })
}


function ProductCom(){
    if(!data){
        throw promiseFn()
    }
    if(typeof data === 'string'){
        return<h2>{data}</h2>
    }
    return(
        <div>{data?.map((itm)=><p key={itm.id}>{itm.title}</p>)}</div>
        
    )
}
export default ApiUsingSuspense