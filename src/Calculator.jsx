import React, { useState } from 'react'

export default function Calculator() {
    let [data, setData]=useState("")
    let [input, setInput] = useState(0)
    console.log(data)
    // console.log(typeof(data))

    let getTotal=(event)=>{
        if(event.includes('+')){
            setInput(0)
            let numArray = data.split('+')
            console.log(numArray)
            console.log(numArray.length)

            for(let j=0; j<numArray.length;j++){
                let numbers = parseInt(numArray[j])
                // console.log(numbers)
                setInput((prevInput)=>{
                    console.log(prevInput)
                    let newInput = prevInput+numbers
                    // console.log(newInput)
                    setData(newInput)
                    return newInput
                })
            }
        }
        
        if(event.includes('−')){
            setInput(0)
            let numArray = data.split('−')     //minus symbol ta wumbo.net theke neya
            console.log(numArray)
            console.log(numArray.length)

            for(let j=0; j<numArray.length;j++){
                let numbers = parseInt(numArray[j])
                console.log(numbers)
                setInput((prevInput)=>{
                    console.log(prevInput)
                    let newInput=0
                    if(j==0){
                        newInput = prevInput+numbers
                        return newInput
                    }
                    if(j>0){
                        newInput = prevInput-numbers
                        console.log(newInput)
                        if(newInput>0){
                            setData(newInput)
                            return newInput
                        }
                        else if(newInput==0){
                            setData('')
                            return newInput
                        }
                        else{
                            setData(newInput)
                            return newInput
                        }
                    }
                })
            }
        }


        if(event.includes('×')){
            setInput(0)
            let numArray = data.split('×')
            console.log(numArray)
            console.log(numArray.length)

            for(let j=0; j<numArray.length;j++){
                let numbers = parseFloat(numArray[j])

                setInput((prevInput)=>{
                    console.log(prevInput)
                    let newInput=0
                    if(j==0){
                        newInput = prevInput+numbers
                        return newInput
                    }
                    if(j>0){
                        newInput = prevInput*numbers
                        console.log(newInput)
                        if(newInput>0){
                            setData(newInput)
                            return newInput
                        
                        }
                        else if(newInput==0){
                            setData('')
                            return newInput
                        }
                        else{
                            setData(newInput)
                            return newInput
                        }
                    }
                })
            }
        }



        if(event.includes('÷')){
            setInput(0)
            let numArray = data.split('÷')
            console.log(numArray)
            console.log(numArray.length)
            for(let j=0; j<numArray.length;j++){
                    let numbers = parseFloat(numArray[j])
                    setInput((prevInput)=>{
                    console.log(prevInput)
                    let newInput=0
                    if(j==0){
                        newInput = prevInput+numbers
                        return newInput
                    }
                    if(j>0){
                        newInput = prevInput/numbers
                        
                        console.log(newInput)
                        if(newInput>0){
                            setData(newInput)
                            return newInput
                        
                        }
                        else if(newInput==0){
                            setData('')
                            return newInput
                        }
                        // ei else ta temon kono kajei lagtese na jodio bt rekhe dilam jehetu bakigular ase tai 
                        else{
                            setData('')
                            return newInput
                        }
                    }
                })
            }
        }

    }


    return (
        <div className='bg-gradient-to-r from-[#614385] to-[#516395] h-screen flex justify-center items-center'>
            <table className='border-[15px] border-red-300'>
                    <thead className='border-7 bg-white'>
                        <tr>
                            <th colSpan={4}>
                                <div type="text" className='bg-[#00342f] m-1 h-20 w-[230px] border-2 rounded-' >
                                    <div className='text-white text-right mt-9 font-semibold text-3xl'>
                                        {
                                            // (input!= 0)? input : data
                                            (data == input)? input : data
                                        }
                                    </div> 
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-[#bff1f0] h-72 font-semibold text-lg'>
                        <tr className='text-center'>
                            <td onClick={()=>{setData(""); setInput(0)}}  className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] w-16'>AC</td>
                            <td onClick={()=>setData(data.slice(0,-1))} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] w-16'>Del</td>
                            <td onClick={(event)=>setData(data + 3.1416) } className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#8508;</td>
                            <td onClick={(event)=>setData(data + event.target.innerText) } className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#xF7;</td>
                        </tr>

                        <tr className='text-center'>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-white hover:bg-[#e5faf8]'>1</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>2</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>3</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#215;</td>
                        </tr>

                        <tr className='text-center'>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>4</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>5</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>6</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#43;</td>
                        </tr>

                        <tr className='text-center'>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>7</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>8</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>9</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#8722;</td>
                        </tr>

                        <tr className='text-center'>
                            <td onClick={(event)=>setData(data + '.')} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#183;</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>0</td>
                            <td onClick={()=>getTotal(data)} colSpan={2} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#61;</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}
