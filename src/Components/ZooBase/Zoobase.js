import React, { useEffect, useState } from 'react';
import Zoology from '../Zoology/Zoology';
const Zoobase = () => {

    const [zooClass, setZooClass] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        fetch('https://fierce-beach-78095.herokuapp.com/zooclass')
            .then(res => res.json())
            .then(data => setZooClass(data))
            .catch(console.log)
        // .finally(()=>setLoading(false))
    }, [])
    console.log("hello", zooClass);
    return (
        <div>
            {
                zooClass.map(zoologyClass => <Zoology key={zoologyClass._id} zoologyClass={zoologyClass} />)
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

export default Zoobase;