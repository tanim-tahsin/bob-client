import React, { useEffect, useState } from 'react';
import Botany from '../Botany/Botany';
const Bobase = () => {
   
    const [boClass, setBoClass] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        fetch('https://fierce-beach-78095.herokuapp.com/boclass')
        .then(res => res.json())
        .then(data =>setBoClass(data))
        .catch(console.log)
        // .finally(()=>setLoading(false))
    }, [])
    console.log("hello",boClass);
    return (
        <div>
            {
            boClass.map(botanyClass=> <Botany key={botanyClass._id} botanyClass={botanyClass}/>)
            }
           {/* {
               loading? <div style={{margin:'100px auto', width:'60px', height:'60px'}} class="spinner-border text-danger " role="status">
               <span class="sr-only">Loading...</span>
             </div> :
              books.map(book => <Books key={book._id} book={book}></Books>)

           } */}
        </div>
    );
};

export default Bobase;