import { Suspense, use } from "react";

function UseApi(){
    return (
        <div>
            <h2>Best way to call Api in reac 19 is 'use api' its not a hook its a api</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
                <ProductCom />
            </Suspense>
        </div>
    )
}

let serverData = null;
const URL = 'https://dummyjson.com/products'      
const promiseFn = function(){
    return new Promise((resolve)=>{
        fetch(URL).then((res)=>res.json()).then((result)=>{
            serverData = result.products;
           resolve('resolvedData')
        }).catch((e)=>{
            serverData = 'Error Occurred'
          resolve()
        })
    })
}
const pr = promiseFn()


function ProductCom(){
     const resolvedData = use(pr)
     console.log(resolvedData);
     if(typeof serverData === 'string'){
        return <h2>{serverData}</h2>
     }

     return(
        <div>
            <h5>{resolvedData}</h5>
            {serverData?.map((itm)=><p key={itm.id}>{itm.title}</p>)}
        </div>
     )

}

export default UseApi