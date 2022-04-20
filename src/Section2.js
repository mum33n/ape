import image from './assets/boredape.gif'
export default function Modal(params) {
    return(
        <div style={{backgroundColor:'#000e',zIndex:'100000000', width:'100%', height:'100vh', position:"fixed", top:'0',left:'0'}} className=" d-flex align-items-center justify-content-center">
            <div className="col-md-6 col-10 text-light bg-dark px-3 py-5 text-center">
                <img src={image} className='col-md-5 col-10'/>
                <a href='/wallets' className='btn mt-5 p-2 btn-primary d-block col-md-5 col-10 mx-auto'>Select Wallet</a>
            </div>
        </div>
    )
    
};
