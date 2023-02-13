import React from 'react'

function FormikForm() {
  return (
    <div  className='w-[600px]   mx-auto    shadow-lg p-10'>
        <div  >
          <form  className='flex flex-col gap-5'>
            <div>
              <label htmlFor="">Name : </label>
              <input  className='w-full px-3 py-2  font-bold  bg-gray-300'  name='name' type="text"  placeholder='name' />
            </div>
            <div>
              <label htmlFor="">Email : </label>
              <input  className='w-full px-3 py-2  font-bold  bg-gray-300'  name='name' type="text"  placeholder='name' />
            </div>
            <div>
              <label htmlFor="">Channel : </label>
              <input  className='w-full px-3 py-2  font-bold  bg-gray-300'  name='name' type="text"  placeholder='name' />
            </div>
            <div  className='text-right'>
              <button  type='submit'  className='bg-blue-200  rounded-lg px-3 py-2 font-bold'>Submti</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default FormikForm