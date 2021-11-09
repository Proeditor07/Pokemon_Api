import React, { useEffect, useState } from "react";
import axios from "axios";
          
const CompA = ()=>{
    const [num , setNum] = useState();
    const [name , setName] = useState();
    const [moves , setMoves] = useState();



    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
          
        }
        getData();
    });
  
    return(
        <>
        <h2>Pokemon Api</h2>
        <div className="jokeContainer">
        <div className="innerText">
        <h1 >The value you chosed: {num}</h1>
        <h1>The Name of Pokemon: {name}</h1>
        <h1>The Moves he/she can do: {moves}</h1> 


        <div className="slector">
        <p>Select The Number From Below</p>
        </div>
        </div>
        </div>
       
        <select onChange={(event)=>{
        setNum(event.target.value);
        }}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
        <option value='13'>13</option>
        <option value='14'>14</option>
        <option value='15'>15</option>
        <option value='16'>16</option>
        <option value='17'>17</option>
        <option value='18'>18</option>
        <option value='19'>19</option>
        <option value='20'>20</option>
        </select>
        
        </>
    )

}

export default CompA;
