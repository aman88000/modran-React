import { useState } from "react"

function AutoCompleteCom(){
    const [inputData, setInputData] = useState('')
    const data = ['Apple', 'Mango', 'Kiwi', 'Banana', 'Gauva']

    const filterdata = data.filter(d=> d.toLocaleLowerCase().includes(inputData.toLocaleLowerCase()))

    const handleChange = (e)=>{
        setInputData(e.target.value)
    }

    const clearData = ()=>{
        setInputData('')
    } 
    // const handleSeleted = (val)=>{
    //         console.log('val', val)
    //         setInputData(val)
    // }

    const handleSeleted = (val)=>{
        return function(){
            setInputData(val)
        }
    }
    return <div>
        <h3>Auto Complete search bar</h3>
        <input type="text" value={inputData} onChange={handleChange}/>
       {inputData && <button onClick={clearData}>Close</button>}  
        {inputData && <div>
            {filterdata?.map(val=><button key={val} onClick={handleSeleted(val)}>{val}</button>)}
        </div>}
        {inputData && filterdata.length === 0 && <div>No Item Found</div>}
    </div>
}

export default AutoCompleteCom