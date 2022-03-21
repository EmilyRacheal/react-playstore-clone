import React from 'react'
import "./sideMenu.css"

const links = [
  {name: "Accounts"}, 
  {name: "Payment Methods"}, 
  {name: "My subscriptions"}, 
  {name: "Redeem"}, 
  {name: "My whilist"}, 
  {name: "My plan activity"},
  {name: "Parent guide"},
]

function index() {
  return (
    <div className='w-1/5 border border-blue-600'>
      <div className='mx-10'>
        <ul className=''>
          <li className='my-2'>My apps</li>
          <li className='my-2'>Shop</li>
        </ul>

        <div className='border-blue-600 boder'></div>

        <ul>
          <li>Games</li>
          <li>Kids</li>
          <li>Editor's choice</li>
        </ul>

      </div>

      <div className=''>
        <ul>
          {
            links.map((item, i)=>{
              return (
                <li>{item.name}</li>
              )   
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default index