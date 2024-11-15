import React, { useState } from 'react'


function ColorPicker() {
    const [color,setColor]=useState("#FFFFFF")
    const handleColorchange=(e)=>{
        setColor(e.target.value)
    }
  return (
    <>
    <div className='color-pick-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor:color}}>
            <p>Selected Color : {color}</p>
        </div>
        <label htmlFor="">select a color</label>
        <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} />
    </div>
    </>
  )
}

export default ColorPicker
// onChange={(e)=>handleColorchange(e)}