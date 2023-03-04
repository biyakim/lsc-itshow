import React from 'react';
import "./Condition.css"

function Condition(props) {
    return (
        <div>
            <h2>컨디션</h2>
            <div className='test1'>
                <h3>&nbsp;&nbsp;&nbsp;피로한 정도는 어떠신가요</h3>
                <button className='very_dissatisfied'></button>
                <button className='dissatisfied'></button>
                <button className='normal'></button>
                <button className='satisfaction'></button>
                <button className='very_satisfaction'></button>
            </div>
            <h5>나쁨&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보통&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;좋음</h5>
            
            
            <div className='test2'>
                <h3>&nbsp;&nbsp;&nbsp;잘 주무셨나요</h3>
                <button className='very_dissatisfied'></button>
                <button className='dissatisfied'></button>
                <button className='normal'></button>
                <button className='satisfaction'></button>
                <button className='very_satisfaction'></button>
            </div>
            <h5>나쁨&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보통&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;좋음</h5>
            <div className='test3'>
                <h3>&nbsp;&nbsp;&nbsp;현재 기분은 어떠신가요</h3>
                <button className='very_dissatisfied'></button>
                <button className='dissatisfied'></button>
                <button className='normal'></button>
                <button className='satisfaction'></button>
                <button className='very_satisfaction'></button>
            </div>
            <h5>나쁨&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보통&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;좋음</h5>
            <div className='test4'>
                <h3>&nbsp;&nbsp;&nbsp;스트레스 수준은 어느 정도이신가요</h3>
                <button className='very_dissatisfied'></button>
                <button className='dissatisfied'></button>
                <button className='normal'></button>
                <button className='satisfaction'></button>
                <button className='very_satisfaction'></button>
            </div>
            <h5>나쁨&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보통&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;좋음</h5>
        </div>
    )
}

export default Condition;