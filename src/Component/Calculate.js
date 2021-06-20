import React, { useState } from 'react';

const Calculate = () => {
    // console.log(input.value)
    let [word,setWord] = useState('');
    let [sum,setSum] = useState(0);
    let [dest,setDest] = useState(0);
    let [soul,setSoul] = useState(0);
    let [pers,setPers] = useState(0);

    const chart = {
        a:1,b:2,c:3,d:4,e:5,f:8,g:3,h:5,
        i:1,j:1,k:2,l:3,m:4,n:5,o:7,p:8,q:1,r:2,
        s:3,t:4,u:6,v:6,w:6,x:5,y:1,z:7
    };

    const vowels = {
        a:1,e:5,i:1,o:7,u:6
    }

    const constants = {
        b:2,c:3,d:4,f:8,g:3,h:5,j:1,
        k:2,l:3,m:4,n:5,p:8,q:1,r:2,
        s:3,t:4,v:6,w:6,x:5,y:1,z:7
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        // console.log(word,word.toLowerCase());
        event.target.reset();
        if(word==''){
            sum=0;
        }else{
            word = word.toLowerCase();
            let sum1 = [...word].map(c => chart[c] || 0).reduce((a,b) => a+b,0);
            setSum(sum1);
            let sum2=sum1.toString();
            let sum3=sum2.split('').reduce((a,b)=> +a+ +b);
            setDest(sum3);
            let sum4=[...word].map(c => vowels[c] || 0).reduce((a,b) => a+b,0);
            setSoul(sum4);
            let sum5=[...word].map(c => constants[c] || 0).reduce((a,b) => a+b,0);
            setPers(sum5);
            // console.log(word,sum,dest,soul,pers);
        }
    }
 
    return (
        <div>
            <div className="img"></div>
            <h3 className="heading">Word Number Numerology</h3>
            <div className="input">
                <form onSubmit={handlesubmit} className="Form">
                    <div className="input-div">
                        <label className="label">Enter Word</label>
                        <input type='text' 
                            name="word"
                            placeholder="Enter any word"
                            onChange={evt => setWord(evt.target.value)}
                            className="input-field"
                        ></input>
                    </div>
                    <button className="calc-btn">Calculate</button>
                </form>
            </div>
            { sum>0 &&
                <div className="output">
                    <h3 className="greeting">Hello <span className="word">{word}</span></h3>
                    <p>Compound Name Number/Namank (Numerology Total of Your Name) - <span className="pts">{sum}</span></p>
                    <p>Destiny/Expression Number or Namank - <span className="pts">{dest}</span></p>
                    <p>Soul Urge/Heart Desire Number - <span className="pts">{soul}</span></p>
                    <p>Personality Number - <span className="pts">{pers}</span></p>
                </div>
            }
            <div>
                <p className="link">For details of how calculation is done visit- <a href="https://astrologyfutureeye.com/fortune-tellers/name-numerology-calculator?report">here</a></p>
            </div>
        </div>
    );
}

export default Calculate;