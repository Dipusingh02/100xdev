import React from 'react'

const FlexGrid = () => {
  return (
    <div>
    <div className="flex justify-center">
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
  </div>
  <div className="flex justify-evenly">
    <div className='bg-yellow-500'>Hi there from the first div</div>
    <div style={{ background: "red" }}>Hi there from the second div</div>
    <div style={{ background: "pink" }}>Hi there from the third</div>
  </div>
  <div className="grid grid-cols-10">
    <div className='bg-yellow-500 col-span-2'>Hi there from the first div</div>
    <div className="bg-red-900 col-span-3">Hi there from the second div</div>
    <div className="col-span-4 bg-blue-500">hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div className="bg-green-200">Hi there from the third</div>
  </div>
    </div>
  )
}

export default FlexGrid
