import React from 'react';
import meditation1 from '../../../yoga/img/meditation1.png'
import meditation2 from '../../../yoga/img/meditation2.png'
import meditation3 from '../../../yoga/img/meditation3.png'
import meditation4 from '../../../yoga/img/meditation4.png'
import yoga1 from '../../../yoga/img/yoga1.png'
import yoga2 from '../../../yoga/img/yoga2.png'
import yoga3 from '../../../yoga/img/yoga3.png'
import yoga4 from '../../../yoga/img/yoga4.png'
import anxiety1 from '../../../yoga/img/anxiety1.png'
import anxiety2 from '../../../yoga/img/anxiety2.png'
import anxiety3 from '../../../yoga/img/anxiety3.png'
import anxiety4 from '../../../yoga/img/anxiety4.png'
import '../../../yoga/yoga.css';

function Yoga (props) {
    return (
        
        <div className='Card1'>
            <div className='c1image'>
                <h3>&nbsp;&nbsp;&nbsp;마음을 편안하게 명상</h3>
                <hr width = "90%"></hr>
                <a href="https://www.youtube.com/watch?v=yiysD0Jl2Wo">
                    <img className='meditation1' alt="image" src={meditation1} />
                </a>
                <a href="https://www.youtube.com/watch?v=dZewQEbQQM0ㄴ">
                    <img className='meditation2' alt="image" src={meditation2} />
                </a>
                <a href="https://www.youtube.com/watch?v=CNYYWuH_Fcc">
                    <img className='meditation3' alt="image" src={meditation3} />
                </a>
                <a href="https://www.youtube.com/watch?v=OF1UccGXPWM">
                    <img className='meditation4' alt="image" src={meditation4} />
                </a>
                <hr width = "90%"></hr>
            </div>
            <div className='c2image'>
                <h3>&nbsp;&nbsp;&nbsp;몸을 유연하게 해볼까요가?</h3>
                <hr width = "90%"></hr>
                <a href="https://www.youtube.com/watch?v=1W9gMxLoW6Q">
                    <img className='yoga1' alt="image" src={yoga1} />
                </a>
                <a href="https://www.youtube.com/watch?v=6bq2uUN-oSY">
                    <img className='yoga2' alt="image" src={yoga2} />
                </a>
                <a href="https://www.youtube.com/watch?v=_aLF5C40hY8">
                    <img className='yoga3' alt="image" src={yoga3} />
                </a>
                <a href="https://www.youtube.com/watch?v=OBTl49bVk94">
                    <img className='yoga4' alt="image" src={yoga4} />
                </a>
                <hr width = "90%"></hr>
            </div>
            <div className='c3image'>
                <h3>&nbsp;&nbsp;&nbsp;불안을 없애는 명상</h3>
                <hr width = "90%"></hr>
                <a href="https://www.youtube.com/watch?v=cvPS_25gRPs">
                    <img className='anxiety1' alt="image" src={anxiety1} />
                </a>
                <a href="https://www.youtube.com/watch?v=kmdqb6Iv5-4">
                    <img className='anxiety2' alt="image" src={anxiety2} />
                </a>
                <a href="https://www.youtube.com/watch?v=7BthVsfkoWU">
                    <img className='anxiety3' alt="image" src={anxiety3} />
                </a>
                <a href="https://www.youtube.com/watch?v=at4NzMuQiP4">
                    <img className='anxiety4' alt="image" src={anxiety4} />
                </a>
                <hr width = "90%"></hr>
            </div>
        </div>
        
    )
}


export default Yoga;