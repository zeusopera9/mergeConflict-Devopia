import React from 'react'

const Profile = () => {
  return (
    <div>
      <form action="">
        <div>
          <div style={{display: 'flex', justifyItems: 'space-between', width: '500px'}}>
            <label htmlFor="">{" "}</label>
            <label htmlFor="">Year 1</label>
            <label htmlFor="">Year 2</label>
            <label htmlFor="">Year 3</label>
          </div>
          <div style={{display: 'flex', justifyItems: 'space-between', width: '500px'}}>
            <label htmlFor="english">English</label>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
          </div>
          <div style={{display: 'flex', justifyItems: 'space-between', width: '500px'}}>
            <label htmlFor="Hindi">Hindi</label>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
          </div>
          <div style={{display: 'flex', justifyItems: 'space-between', width: '500px'}}>
            <label htmlFor="science">Science</label>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
          </div>
          <div style={{display: 'flex', justifyItems: 'space-between', width: '500px'}}>
            <label htmlFor="maths">Maths</label>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
          </div>
          <div style={{display: 'flex', justifyItems: 'space-between', width: '500px'}}>
            <label htmlFor="history">History</label>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
          </div>
          <div style={{display: 'flex', justifyItems: 'space-between', width: '500px'}}>
            <label htmlFor="geography">Geography</label>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
            <input type="text" placeholder='Marks'/>
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Profile