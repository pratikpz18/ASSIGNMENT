import React, { useEffect, useState } from 'react';

const Calculate = () => {
    // console.log(input.value)
    let [word,setWord] = useState('');
    let [sum,setSum] = useState(0);
    let [dest,setDest] = useState(0);
    
    const chart = {
        a:1,b:2,c:3,d:4,e:5,f:8,g:3,h:5,
        i:1,j:1,k:2,l:3,m:4,n:5,o:7,p:8,q:1,r:2,
        s:3,t:4,u:6,v:6,w:6,x:5,y:1,z:7
    };

    let handlesubmit = (event) => {
        event.preventDefault();
        console.log(word,word.toLowerCase());
        word = word.toLowerCase();
        let sum1 = [...word].map(c => chart[c] || 0).reduce((a,b) => a+b,0);
        setSum(sum1);
        let sum2=sum1.toString();
        let sum3=sum2.split('').reduce(function(a,b){ return +a+ +b; });
        setDest(sum3);
        console.log(sum,dest);
        setWord(' ');
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label >Enter Word</label>
                <input type='text' 
                value={word} 
                name="word"
                placeholder="Enter any word"
                onChange={event => setWord(event.target.value)}
                ></input>
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
}

export default Calculate;