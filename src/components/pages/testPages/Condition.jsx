import React from 'react';
import "./Condition.css"

function Condition(props) {
    let count = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let total = 0;
    const very_dissatisfied = () => {
        count = count + 1;
        console.log(count);
    }
    const dissatisfied = () => {
        count = count + 2;
        console.log(count);
    }
    const normal = () => {
        count = count + 3;
        console.log(count);
    }
    const satisfaction = () => {
        count = count + 4;
        console.log(count);
    }
    const very_satisfaction = () => {
        count = count + 5;
        console.log(count);
    }
    const count_total = () => {
        console.log(count);
    }
    return (
        <div>
            <h2>컨디션</h2>
            <div className='test1'>
                <h3>&nbsp;&nbsp;&nbsp;피로한 정도는 어떠신가요</h3>
                <button onClick={very_dissatisfied} className='very_dissatisfied'></button>
                <button onClick={dissatisfied} className='dissatisfied'></button>
                <button onClick={normal} className='normal'></button>
                <button onClick={satisfaction} className='satisfaction'></button>
                <button onClick={very_satisfaction} className='very_satisfaction'></button>
            </div>
            <h5>나쁨&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보통&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;좋음</h5>
            
            
            <div className='test2'>
                <h3>&nbsp;&nbsp;&nbsp;잘 주무셨나요</h3>
                <button onClick={very_dissatisfied} className='very_dissatisfied'></button>
                <button onClick={dissatisfied} className='dissatisfied'></button>
                <button onClick={normal} className='normal'></button>
                <button onClick={satisfaction} className='satisfaction'></button>
                <button onClick={very_satisfaction} className='very_satisfaction'></button>
            </div>
            <h5>나쁨&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보통&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;좋음</h5>
            <div className='test3'>
                <h3>&nbsp;&nbsp;&nbsp;현재 기분은 어떠신가요</h3>
                <button onClick={very_dissatisfied} className='very_dissatisfied'></button>
                <button onClick={dissatisfied} className='dissatisfied'></button>
                <button onClick={normal} className='normal'></button>
                <button onClick={satisfaction} className='satisfaction'></button>
                <button onClick={very_satisfaction} className='very_satisfaction'></button>
            </div>
            <h5>나쁨&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보통&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;좋음</h5>
            <div className='test4'>
                <h3>&nbsp;&nbsp;&nbsp;스트레스 수준은 어느 정도이신가요</h3>
                <button onClick={very_dissatisfied} className='very_dissatisfied'></button>
                <button onClick={dissatisfied} className='dissatisfied'></button>
                <button onClick={normal} className='normal'></button>
                <button onClick={satisfaction} className='satisfaction'></button>
                <button onClick={very_satisfaction} className='very_satisfaction'></button>
            </div>
            <h5>나쁨&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보통&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;좋음</h5>
            <div>
                <button onClick={count_total} className='count_total'>확인</button>
            </div>
        </div>

            
    )
}

export default Condition;