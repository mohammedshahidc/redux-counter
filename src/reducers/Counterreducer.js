import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Counterreducer = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
    return (
        <div className='justify-center justify-items-center w-screen h-screen bg-gray-500 pt-[180px]'>

            <div className='bg-black text-white justify-center justify-items-center ml-[550px] w-[250px] h-[250px] pt-5'>

                <div className='ml-[70px] pt-3 bg-slate-400 w-[120px] h-[40px] justify-items-center pl-5 pb-10 text-black text-2xl]'>
                    <h1>Count : {count}</h1>
                </div>
                <div className='flex ml-[80px] relative right-5 pt-5'>
                    <div className='relative right-4'><button onClick={() => dispatch({ type: 'increament' })} className='bg-blue-800 text-white text-2xl w-[70px] rounded-md hover:bg-amber-300 cursor-pointer'>+</button></div>
                    <div className='relative left-4'>
                        <button onClick={() => dispatch({ type: 'decreament' })} className='bg-blue-800 text-white text-2xl w-[70px] rounded-md hover:bg-amber-300 cursor-pointer'>-</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Counterreducer
