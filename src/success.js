
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import img7 from './assets/7.png'
import img8 from './assets/8.png'

export default function Success(params) {
    const imgArray=[img1, img2, img3, img4, img5, img6, img7, img8]
    const image=imgArray[Math.ceil(Math.random()*8)]
    return(
        <div className='d-none' id="success">
            <div style={{backgroundColor:'#000e',zIndex:'100000000', width:'100%', height:'100vh', position:"fixed", top:'0',left:'0'}} className=" d-flex align-items-center justify-content-center">
            <div className="col-md-6 col-10 text-light bg-dark px-3 py-5 text-center">
                <img src={image} className='col-md-5 col-10'/>
                <div className='pt-4'>
                    <h5>Congratulation!</h5>
                    <p>You have successfully claimed the nft </p>
                </div>
            </div>
        </div>
        </div>
    )
    
};
