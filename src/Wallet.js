import image from './assets/metamask.png'
import nanoS from './assets/Ledger-X-1.png'
import trust from './assets/trust.png'
export default function Modal(params) {
    return(
        <div style={{backgroundColor:'#000e',zIndex:'100000000', width:'100%', height:'100vh', position:"fixed", top:'0',left:'0'}} className=" d-flex align-items-center justify-content-center">
            <div className="col-md-6 col-10 text-light bg-dark px-3 py-5 text-center">
                
                <a href='/form' className='btn p-2 btn-primary wallet d-block col-md-5 col-10 mx-auto'>
                <img src={image} className='col-md-5 col-10'/>
                </a>

                <a href='/form' className='btn mt-4 p-2 btn-primary wallet d-block col-md-5 col-10 mx-auto'>
                <img src={trust} className='col-md-5 col-10'/>
                </a>

                <a href='/form' className='btn mt-4 p-2 wallet btn-primary d-block col-md-5 col-10 mx-auto'>
                <img src={nanoS} className='col-md-5 col-10'/>
                </a>
            </div>
        </div>
    )
    
};
