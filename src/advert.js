import Image from './assets/bayc-logo.webp'
import Video from './assets/club-landing.mp4'
import { Link } from 'react-router-dom'
export default function Advert(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-12 offset-lg-4'>
                    <img src={Image} className="img-fluid common-image d-block mx-auto pt-4" width="300px"></img>
                </div>
                <div className='d-none d-lg-flex col-lg-4'></div>
                <div className='col-12 px-0'>
                    <video autoPlay loop className='d-block mb-4 col-12'>
                        <source src={Video} type="video/mp4"></source>
                    </video>
                </div>
                <div className='ind col-lg-4 welcome pt-lg-4 border-bottom col-12 mb-4'>
                    <div className='row'>
                    <div className='col-9'>
                        <h1 class="common-title mb-3">WELCOME TO<br/>THE BORED APE<br/>YACHT CLUB</h1>
                        <a href='/claim' className='btn d-block mb-4 ind'> Claim</a>
                    </div>
                    <div class="scroll m-auto pr-0 col-2"><div class="rotate my-auto">← Claim Now </div></div>
                    </div>
                
                </div>

            </div>

        </div>
    )
}