import React, {useState} from 'react'


export default function About() {
  const [btntext,newbtntext]=useState("Dark")
const [btnstyle1,afterbtnstyle1]=useState({
    color:"white",
    backgroundColor:"black"
  })
  
  const [style1,setstyle]=useState({
    color:"White",
    backgroundColor:"Black"
})

const togglestyle=()=>{
  if(style1.color==="White"){
    setstyle({
      color:"black",
      backgroundColor:"white"
    })
    newbtntext("Light")
    afterbtnstyle1({
      color:"black",
      backgroundColor:"white",
      border:"solid 2px black"
    })
  }
  else{
    setstyle({
      color:"White",
    backgroundColor:"Black"
    })
    newbtntext("Dark")
    afterbtnstyle1({
      color:"White",
      backgroundColor:"Black",
      border:"solid 2px white"
    })
  }
}


  return (
    <>
    <div className='container' style={style1}>
        <h1>About us</h1>
    <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        What we do?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={style1}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
    <button type="button" onClick={togglestyle} className="btn my-4" style={btnstyle1}>{btntext}</button>
    
</>
  )
}
