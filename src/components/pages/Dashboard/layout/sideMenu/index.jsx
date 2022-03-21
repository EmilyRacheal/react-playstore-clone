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
    <div className=''>
      <div className=''>
        <ul>
          <li>My apps</li>
          <li>Shop</li>
        </ul>

        <div></div>

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
)   })
          }

        </ul>
      </div>
    </div>
  )
}

export default index