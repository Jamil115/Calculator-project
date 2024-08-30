import React, { useState } from 'react'

export default function Calculator() {
    let [data, setData]=useState("")
    let [input, setInput] = useState(0)
    let [show, setShow] = useState('')
    console.log(data)
    console.log(typeof(data))
    console.log(input)
    // console.log(typeof(data))

    let getTotal=(event)=>{

        // ---------Addition-----------
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
                    setShow(data)
                    setData(newInput)
                    return newInput
                })
            }
        }

        // ---------Subtraction-----------        
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
                            setShow(data)
                            setData(newInput)
                            return newInput
                        }
                        else if(newInput==0){
                            setShow(data)
                            setData('')
                            return newInput
                        }
                        else{
                            setShow(data)
                            setData(newInput)
                            return newInput
                        }
                    }
                })
            }
        }

        // ---------Multiplication-----------
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
                            setShow(data)
                            setData(newInput)
                            return newInput
                        
                        }
                        else if(newInput==0){
                            setShow(data)
                            setData('')
                            return newInput
                        }
                        else{
                            setShow(data)
                            setData(newInput)
                            return newInput
                        }
                    }
                })
            }
        }


        // ---------Division----------- 
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
                            setShow(data)
                            setData(newInput)
                            return newInput
                        
                        }
                        else if(newInput==0){
                            setShow(data)
                            setData('')
                            return newInput
                        }
                        // ei else ta temon kono kajei lagtese na jodio bt rekhe dilam jehetu bakigular ase tai 
                        else{
                            setShow(data)
                            setData('')
                            return newInput
                        }
                    }
                })
            }
        }

        // ---------Modulation----------- 
        if(event.includes('%')){
            setInput(0)
            let numArray = data.split('%')
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
                        newInput = prevInput % numbers
                        
                        console.log(newInput)
                        if(newInput>0){
                            setShow(data)
                            setData(newInput)
                            return newInput
                        
                        }
                        else if(newInput==0){
                            setShow(data)
                            setData('')
                            return newInput
                        }

                        else{
                            setShow(data)
                            setData('')
                            return newInput
                        }
                    }
                })
            }
        }

    }

    // ---------Parcentage----------- 
    let getParcentage=()=>{

        if(input != 0){
            let newInput = input/100;
            setShow(data)
            setData(newInput)
            setInput(newInput)
        }
        else{
            setInput(0)
            setData('')
        }
    }

    // ---------Factorial----------- 
    let getFactorial=()=>{
        setInput(0)
        let newInput=0
        let number = parseFloat(data)
        // console.log(number)
        // console.log(typeof(number))

        for(let i=1; i<=number; i++){
            setInput((prevInput)=>{
                console.log(prevInput)
        
                if(number>0){
                    
                    if(i==1){
                        newInput = prevInput+i
                        console.log(newInput)
                        if(i==number){
                            setShow(`fact(${number})`)
                            setData(newInput)
                        }
                        return newInput
                    }
                    if(i>1){
                        let newInput=prevInput * i
                        // newInput = value
                        console.log(newInput)
                        setShow(`fact(${number})`)
                        setData(newInput)
                        return newInput
                    }
                }
                
            })
        }
        if(input==0){
            setInput((prevInput)=>{
                let newInput = prevInput+1
                setShow(`fact(${input})`)
                setData(newInput)
                return newInput

            })
        }
        
    }


    return (
        <div className='bg-gradient-to-r from-[#614385] to-[#516395] h-screen flex justify-center items-center'>
            <table className='border-[15px] border-red-300'>
                    <thead className='border-7 bg-white'>
                        <tr>
                            <th colSpan={4}>
                                <div type="text" className='bg-[#00342f] m-1 h-20 w-[230px] border-2 flex flex-col justify-end'>
                                    <div className='text-slate-400 text-right font-semibold text-xl mb-1'>
                                        {
                                            (show != '')? 
                                            <p>{show}=</p> 
                                            : ''
                                        }
                                    </div>
                                    <div className='text-white text-right font-semibold text-xl mb-1 overflow-hidden'>
                                        {
                                            (data == input)? input : data
                                        }
                                    </div> 
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-[#bff1f0] h-72 font-semibold text-lg'>
                        <tr className='text-center'>
                            <td onClick={()=>{setData(""); setInput(0); setShow('')}}  className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] w-16'>AC</td>
                            <td onClick={()=>setData(data.slice(0,-1))} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] w-16'>Del</td>
                            <td onClick={(event)=>setData(data + 3.1415926535897932384626433832795) } className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] w-16'>&#8508;</td>
                            <td onClick={getFactorial} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] w-16'>n!</td>
                        </tr>

                        <tr className='text-center'>
                            <td onClick={(event)=>setData(data + event.target.innerText) }  className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] w-16'>&#40;</td>
                            <td onClick={(event)=>setData(data + event.target.innerText) } className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] w-16'>&#41;</td>
                            <td onClick={(event)=>setData(data + '%') } className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>mod</td>
                            <td onClick={(event)=>setData(data + event.target.innerText) } className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#xF7;</td>
                        </tr>

                        <tr className='text-center'>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-white hover:bg-[#e5faf8]'>7</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>8</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>9</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#215;</td>
                        </tr>

                        <tr className='text-center'>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>4</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>5</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>6</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#8722;</td>
                        </tr>

                        <tr className='text-center'>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>1</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>2</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>3</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#43;</td>
                        </tr>

                        <tr className='text-center'>
                            <td onClick={(event)=>setData(data + '.')} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#183;</td>
                            <td onClick={(event)=>setData(data + event.target.innerText)} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>0</td>
                            <td onClick={getParcentage} className='cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8]'>&#37; </td>
                            <td onClick={()=>getTotal(data)} className='cursor-pointer border-2 border-[#e1feff] bg-cyan-300 hover:bg-cyan-400'>&#61;</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}
