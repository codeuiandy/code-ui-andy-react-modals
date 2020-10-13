import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {PresentationModal, SimpleModal, } from './component/react-reusable-modals/index'

function App() {
  const [showReactModal, setShowReactModal] = useState("init")
  const [showReactModal2, setShowReactModal2] = useState("init")
  // console.log(showReactModal)
  return (
   
    <div className="App">
      <SimpleModal 
        disableOverlayClose={false}
        center={true} 
        header={  <h1>hello</h1>} 
        showModal={showReactModal} 
        setShowReactModal={setShowReactModal} 
        overlayColor=""
        header={  <h1>Modal Title </h1>} 
        body={
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, iste quibusdam?
             Veniam maiores veritatis assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quia assumenda voluptates temporibus earum molestiae similique officiis provident necessitatibus nobis,
             esse facere magni. Animi quibusdam, iusto et iste modi fugit qui.</h1>
            } 
  
            footer={
              <div className="footerStyle">
                 <button onClick={()=>{
                console.log("state init",showReactModal)
                setShowReactModal(false)
               
              }
              
              }>Save Modal</button>
  
              <button onClick={()=>{
                console.log("state init",showReactModal)
                setShowReactModal(false)
             
              }
              
              }>Hide Modal</button>
            
              </div>}
        
        />
       

  <PresentationModal 
      header={  <h1>Modal Title </h1>} 
      body={
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, iste quibusdam?
           Veniam maiores veritatis assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quia assumenda voluptates temporibus earum molestiae similique officiis provident necessitatibus nobis,
           esse facere magni. Animi quibusdam, iusto et iste modi fugit qui.</h1>
          } 

          footer={
            <div className="footerStyle">
               <button onClick={()=>{
              console.log("state init",showReactModal)
              setShowReactModal2(false)
             
            }
            
            }>Save Modal</button>

            <button onClick={()=>{
              console.log("state init",showReactModal)
              setShowReactModal2(false)
           
            }
            
            }>Hide Modal</button>
          
            </div>}
           

       showModal={showReactModal2}
       setShowReactModal={setShowReactModal2} />
     
    
      

      <button onClick={()=>{
        console.log("state init",showReactModal)
        setShowReactModal(true)
        console.log(showReactModal)
      }
      
      }>Show Modal</button>

<button onClick={()=>{
        console.log("state init",showReactModal)
        setShowReactModal2(true)
        console.log(showReactModal)
      }
      
      }>Presentation Modal</button>
    </div>
  );
}

export default App;
