import React, { useState } from 'react'

export default function Calculator() {
    let [data, setData]=useState("")
    let [input, setInput] = useState(0)
    let [show, setShow] = useState('')
    console.log(data)
    console.log(typeof(data))
    console.log(input)


    // Duita kore input er jonno ei niyom e banano hoisilo then complexed expression er jonno comment kora code baad diye nicher niyome kora HTMLOListElement. 
    // let getTotal=(event)=>{

    //     // ---------Addition-----------
    //     if(event.includes('+')){
    //         setInput(0)
    //         let numArray = data.split('+')
    //         console.log(numArray)
    //         console.log(numArray.length)

    //         for(let j=0; j<numArray.length;j++){
    //             let numbers = parseInt(numArray[j])
    //             // console.log(numbers)
    //             setInput((prevInput)=>{
    //                 console.log(prevInput)
    //                 let newInput = prevInput+numbers
    //                 // console.log(newInput)
    //                 setShow(data)
    //                 setData(newInput)
    //                 return newInput
    //             })
    //         }
    //     }

    //     // ---------Subtraction-----------        
    //     if(event.includes('−')){
    //         setInput(0)
    //         let numArray = data.split('−')     //minus symbol ta wumbo.net theke neya
    //         console.log(numArray)
    //         console.log(numArray.length)

    //         for(let j=0; j<numArray.length;j++){
    //             let numbers = parseInt(numArray[j])
    //             console.log(numbers)
    //             setInput((prevInput)=>{
    //                 console.log(prevInput)
    //                 let newInput=0
    //                 if(j==0){
    //                     newInput = prevInput+numbers
    //                     return newInput
    //                 }
    //                 if(j>0){
    //                     newInput = prevInput-numbers
    //                     console.log(newInput)
    //                     if(newInput>0){
    //                         setShow(data)
    //                         setData(newInput)
    //                         return newInput
    //                     }
    //                     else if(newInput==0){
    //                         setShow(data)
    //                         setData('')
    //                         return newInput
    //                     }
    //                     else{
    //                         setShow(data)
    //                         setData(newInput)
    //                         return newInput
    //                     }
    //                 }
    //             })
    //         }
    //     }

    //     // ---------Multiplication-----------
    //     if(event.includes('×')){
    //         setInput(0)
    //         let numArray = data.split('×')
    //         console.log(numArray)
    //         console.log(numArray.length)

    //         for(let j=0; j<numArray.length;j++){
    //             let numbers = parseFloat(numArray[j])

    //             setInput((prevInput)=>{
    //                 console.log(prevInput)
    //                 let newInput=0
    //                 if(j==0){
    //                     newInput = prevInput+numbers
    //                     return newInput
    //                 }
    //                 if(j>0){
    //                     newInput = prevInput*numbers
    //                     console.log(newInput)
    //                     if(newInput>0){
    //                         setShow(data)
    //                         setData(newInput)
    //                         return newInput
                        
    //                     }
    //                     else if(newInput==0){
    //                         setShow(data)
    //                         setData('')
    //                         return newInput
    //                     }
    //                     else{
    //                         setShow(data)
    //                         setData(newInput)
    //                         return newInput
    //                     }
    //                 }
    //             })
    //         }
    //     }


    //     // ---------Division----------- 
    //     if(event.includes('÷')){
    //         setInput(0)
    //         let numArray = data.split('÷')
    //         console.log(numArray)
    //         console.log(numArray.length)
    //         for(let j=0; j<numArray.length;j++){
    //                 let numbers = parseFloat(numArray[j])
    //                 setInput((prevInput)=>{
    //                 console.log(prevInput)
    //                 let newInput=0
    //                 if(j==0){
    //                     newInput = prevInput+numbers
    //                     return newInput
    //                 }
    //                 if(j>0){
    //                     newInput = prevInput/numbers
                        
    //                     console.log(newInput)
    //                     if(newInput>0){
    //                         setShow(data)
    //                         setData(newInput)
    //                         return newInput
                        
    //                     }
    //                     else if(newInput==0){
    //                         setShow(data)
    //                         setData('')
    //                         return newInput
    //                     }
    //                     // ei else ta temon kono kajei lagtese na jodio bt rekhe dilam jehetu bakigular ase tai 
    //                     else{
    //                         setShow(data)
    //                         setData('')
    //                         return newInput
    //                     }
    //                 }
    //             })
    //         }
    //     }

    //     // ---------Modulation----------- 
    //     if(event.includes('%')){
    //         setInput(0)
    //         let numArray = data.split('%')
    //         console.log(numArray)
    //         console.log(numArray.length)

    //         for(let j=0; j<numArray.length;j++){
    //                 let numbers = parseFloat(numArray[j])
    //                 setInput((prevInput)=>{
    //                 console.log(prevInput)
    //                 let newInput=0
    //                 if(j==0){
    //                     newInput = prevInput+numbers
    //                     return newInput
    //                 }
    //                 if(j>0){
    //                     newInput = prevInput % numbers
                        
    //                     console.log(newInput)
    //                     if(newInput>0){
    //                         setShow(data)
    //                         setData(newInput)
    //                         return newInput
                        
    //                     }
    //                     else if(newInput==0){
    //                         setShow(data)
    //                         setData('')
    //                         return newInput
    //                     }

    //                     else{
    //                         setShow(data)
    //                         setData('')
    //                         return newInput
    //                     }
    //                 }
    //             })
    //         }
    //     }

    // }


    const precedence = {
        '+': 1,
        '−': 1,
        '×': 2,
        '÷': 2,
        '%': 2,
        '^': 3,
    }

    const associativity ={
        '+': 'L',
        '−': 'L',
        '×': 'L',
        '÷': 'L',
        '%': 'L',
        '^': 'R',   //power er button pore add kore eta kaaje lagaite hobe.
    }

    const infixToPostfix = (expression) => {
        let outputQueue = [];
        let operatorStack = [];
        let tokens = expression.match(/(\d+(\.\d+)?)|[\+\−\×\÷\%\^\(\)]/g);

        tokens.forEach((token)=>{
            if(!isNaN(token)){
                outputQueue.push(token)
            }
            else if(token == '('){
                operatorStack.push(token)
            }
            else if(token == ')'){
                while(operatorStack.length && operatorStack[operatorStack.length-1] !=='('){
                    outputQueue.push(operatorStack.pop())
                }
                operatorStack.pop()
            }
            else{
                while(operatorStack.length  && precedence[token] <= precedence[operatorStack[operatorStack.length-1]] && associativity[token] ==='L'){
                    outputQueue.push(operatorStack.pop())
                }
                operatorStack.push(token)
            }
        })

        while (operatorStack.length){
            outputQueue.push(operatorStack.pop())
        }

        return outputQueue;
    }

    const evaluatePostfix = (postfix) => {
        let stack = [];

        postfix.forEach((token) => {
            if(!isNaN(token)){
                stack.push(parseFloat(token))
            }
            else{
                let b = stack.pop()
                let a = stack.pop()

                switch (token) {
                    case '+' :
                        stack.push(a+b);
                        break

                    case '−' :
                            stack.push(a-b);
                            break

                    case '×' :
                        stack.push(a*b);
                        break

                    case '÷' :
                        stack.push(a/b);
                        break

                    default:
                        break;
                }
            }
        })
        return stack[0]
    }

    let getTotal = () => {
        try{
            let postfix = infixToPostfix(data)
            let result = evaluatePostfix(postfix)

            setShow(data)
            setData(result.toString())
            setInput(result)
        }
        catch(error){
            setData("Error")
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
            <div className='bg-slate-300 border-collapse border-[15px] border-slate-300 rounded-2xl shadow-2xl'>
                    <div className='mb-3 bg-slate-300'>
                        <div type="text" className='bg-[#00342f] h-28 w-[320px] border-2 flex flex-col justify-end font-["./font/DSEG14Modern-RegularItalic_t7zez4.ttf"]'>
                            <div className='text-slate-400 text-right font-semibold text-xl mb-2'>
                                {
                                    (show != '')? 
                                    <p>{show}=</p> 
                                    : ''
                                }
                            </div>
                            <div className='text-white text-right font-semibold text-4xl mb-3 overflow-hidden'>
                                {
                                    (data == input)? input : data
                                }
                            </div> 
                        </div>
                    </div>
                    <div className='h-[440px] w-80 font-semibold text-lg'>
                        <div className=''>
                            <button onClick={()=>{setData(""); setInput(0); setShow('')}}  className='bg-[#efa98f] hover:bg-[#e89c80] m-2 h-14 cursor-pointer border-2 border-[#e1feff] hover:border-black  rounded-xl w-16'>AC</button>
                            <button onClick={()=>setData(data.slice(0,-1))} className='bg-[#efa98f] hover:bg-[#e89c80] m-2 h-14 cursor-pointer border-2 border-[#e1feff] hover:border-black  rounded-xl w-16'>Del</button>
                            <button onClick={(event)=>setData(data + 3.1415926535897932384626433832795) } className='m-2 h-14 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black  rounded-xl w-16'>&#8508;</button>
                            <button onClick={getFactorial} className='m-2 h-14 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black  rounded-xl w-16'>n!</button>
                        </div>

                        <div className=''>
                            <button onClick={(event)=>setData(data + event.target.innerText) }  className='m-2 h-14 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black  rounded-xl w-16 '>&#40;</button>
                            <button onClick={(event)=>setData(data + event.target.innerText) } className='m-2 h-14 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black  rounded-xl w-16'>&#41;</button>
                            <button onClick={(event)=>setData(data + '%') } className='m-2 h-14 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black  rounded-xl w-16'>mod</button>
                            <button onClick={(event)=>setData(data + event.target.innerText) } className='m-2 h-14 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl w-16'>&#xF7;</button>
                        </div>

                        <div className=''>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>7</button>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>8</button>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>9</button>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>&#215;</button>
                        </div>

                        <div className='text-center'>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>4</button>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>5</button>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>6</button>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>&#8722;</button>
                        </div>

                        <div className='text-center'>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>1</button>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>2</button>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>3</button>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>&#43;</button>
                        </div>

                        <div className='text-center'>
                            <button onClick={(event)=>setData(data + '.')} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>&#183;</button>
                            <button onClick={(event)=>setData(data + event.target.innerText)} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>0</button>
                            <button onClick={getParcentage} className='m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:bg-[#e5faf8] hover:border-black rounded-xl'>&#37; </button>
                            <button onClick={()=>getTotal(data)} className='bg-[#efa98f] hover:bg-[#e89c80] m-2 h-14 w-16 cursor-pointer border-2 border-[#e1feff] hover:border-black rounded-xl'>&#61;</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
