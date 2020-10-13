import React,{useState,useEffect} from 'react'
import  './index.css'
import CancelModal from './cancelModal.png'
/**
 * 
 * @param {Object} props 
 * @param {React.ReactNode} props.header
 *  @param {boolean} props.center
 * @param {string} props.overlayColor
 * @param {boolean} props.disableOverlayClose
 */




export const PresentationModal=(props)=> {
  const [showReactModal, setShowReactModal] = useState(false)
  const [modalFirstLoad, setModalFirstLoad] = useState("modal-init-state-codeuiandy-team")
  const [overlayInit, setoverlayInit] = useState("")
  useEffect(()=>{
    openModal()
  },[props.showModal])

  const hideModalHandler=()=>{

setShowReactModal(false)
setModalFirstLoad("init")
setoverlayInit("modal-overlay-codeuiandy-hide-team")
 props.setShowReactModal(false)
  }

  const setReactModalhide=()=>{
    setShowReactModal(false)
    setModalFirstLoad("init")
    setoverlayInit("modal-overlay-codeuiandy-hide-team")
     props.setShowReactModal(false)
  }

  const openModal=async()=>{
    console.log("props passed>>> function ",props.showModal)
    setShowReactModal( await props.showModal === false ? setReactModalhide() : props.showModal)
  }

  return (
     <div>
         <div >

              <div onClick={()=>hideModalHandler() } 
              className={`${showReactModal===true ? "modal-overlay-codeuiandy-team" :
              overlayInit}`}>
              </div>
              <div className={`${showReactModal===true ? "" : modalFirstLoad}`}>

         
              <div className={`modal-container-codeuiandy-team

               ${showReactModal===true ? "showModal" : ""}`}>

                <div className="modalText">

                <div className="cancelModal-code-ui-andy-team">
                <span onClick={()=>hideModalHandler() } className="x-modal"><img style={{width:"20px",height:"20px"}} src={CancelModal} /></span>
              </div>

              <div className="modal-head-code-ui-andy-team">
              {props.header}
              </div>

              
               <div className="modal-body-code-ui-andy-team">
               {props.body}
               </div>

               <div className="modal-footer-code-ui-andy-team">
                 <div className="footer-code-ui-andy-team">
                    {props.footer}
                 </div>
              
               </div>


                </div>
                
              </div>
              </div>
</div>
     </div>
   

   
       
   
  )
}


export const SimpleModal = (props)=>{
  const [showReactModal, setShowReactModal] = useState(false)
  const [modalFirstLoad, setModalFirstLoad] = useState("modal-init-state-codeuiandy-team")
  const [overlayInit, setoverlayInit] = useState("")
  useEffect(()=>{
    openModal()
  },[props.showModal])

 const hideModalHandler=()=>{

setShowReactModal(false)
setModalFirstLoad("init")
setoverlayInit("simple-modal-overlay-codeuiandy-hide-team")
 props.setShowReactModal(false)
  }

  const setReactModalhide=()=>{
    setShowReactModal(false)
    setModalFirstLoad("init")
    setoverlayInit("simple-modal-overlay-codeuiandy-hide-team")
     props.setShowReactModal(false)
  }

  const openModal=async()=>{
    console.log("props passed>>> function ",props.showModal)
    setShowReactModal( await props.showModal === false ? setReactModalhide() : props.showModal)
  }

  return (
     <div>
         <div>

 <div  onClick={props.disableOverlayClose===true ? console.log("overlayClose Disabled"):()=>hideModalHandler() }   className={`${showReactModal===true ? "simple-modal-overlay-codeuiandy-show-team" :
 overlayInit}`}
 style={props.overlayColor === "" ? {} : {backgroundColor:props.overlayColor}}
 >
    </div>
    <div className={`${showReactModal===true ? "" : modalFirstLoad}`}>

         
              <div className={`simple-modal-container-codeuiandy-team
               ${showReactModal===true ? "showModal" : ""}`}
               style={props.center===true? {top:0,bottom:0, } :{}}>
                <div className="modalText">
                <div className="cancelModal-code-ui-andy-team">
                <span onClick={()=>hideModalHandler() } className="x-modal"><img style={{width:"20px",height:"20px"}} src={CancelModal} /></span>
              </div>

              <div className="modal-head-code-ui-andy-team">
              {props.header}
              </div>

              
               <div className="modal-body-code-ui-andy-team">
               {props.body}
               </div>

               <div className="modal-footer-code-ui-andy-team">
                 <div className="footer-code-ui-andy-team">
                    {props.footer}
                 </div>
              
               </div>

                </div>
                
              </div>
              </div>
</div>
     </div>
   
  )}


