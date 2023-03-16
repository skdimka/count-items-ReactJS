import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id:0, value: 1, name: "Форель Охлажденная", price: "790", },
        {id:1, value: 2, name: "Форель шоковой заморозки", price: "600", },
        {id:2, value: 3, name: "Медальоны", price: "640", },
    ];

    const [counters, setCounters] = useState(initialState); 

    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    };

    const handleReset = () => {
        setCounters(initialState);
        console.log("handleReset");
    }; 

    const handleIncrement =(id)=>{
        console.log('handleIncrement', id);
        const elementIdnex = counters.findIndex(c => c.id === id);
        const newCounters = [...counters];
        newCounters[elementIdnex].value++ 
        setCounters(newCounters);
      };
  
      const handleDecrement = (id)=>{
        console.log('handleDecrement')
        const elementIdnex = counters.findIndex(c => c.id === id);
        const newCounters = [...counters];
        newCounters[elementIdnex].value-- 
        setCounters(newCounters);
      };

    
    return <>
    {counters.map((count) => 
             (<Counter 
                key = {count.id} 
                onDelete = {handleDelete} 
                onIncrement = {handleIncrement}
                onDecrement = {handleDecrement}
                {...count}/>
    ))}

    <button className = "btn btn-primary btn-sm m-2" onClick = {handleReset}>Сброс</button>
        </>
};
 
export default CountersList;