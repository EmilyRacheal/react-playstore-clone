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
    <div className='border parent navBox'>
      <div className='topBg'>
        <ul className='px-10 text-xl menuList1'>
          <li className='my-3'>My apps</li>
          <li className='my-3'>Shop</li>
        </ul>

        <div className='mx-10 rule'></div>

        <ul className='px-10 py-4 menuList'>
          <li>Games</li>
          <li>Kids</li>
          <li>Editor's choice</li>
        </ul>

      </div>

      <div className='btmBg'>
        <ul className='px-5 py-3 nav2'>
          {
            links.map((item, i)=>{
              return (
                <li className='py-1'>{item.name}</li>
              )   
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default index