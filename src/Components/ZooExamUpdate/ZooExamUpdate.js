import React, { useEffect, useState } from 'react';
import  '../BoExamUpdate/BoExamUpdate.css'
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Link } from 'react-router-dom';
const ZooExamUpdate = () => {
    const [zooClass, setZooClass] = useState([]);
    useEffect(() => {
        // setLoading(true);
        fetch('https://fierce-beach-78095.herokuapp.com/zooclass')
        .then(res => res.json())
        .then(data =>setZooClass(data))
        .catch(console.log)
        // .finally(()=>setLoading(false))
    }, [])
    console.log(zooClass);
    return (
        <div>
             <table class="table">
              <thead>
                <tr>
                  <th className='text-start' scope="col">অধ্যায়</th>
                  <th className='text-start' scope="col">বিষয়</th>
                  <th scope="col">ক্লাস</th>
                  <th  scope="col">এক্সাম</th> 
                </tr>
              </thead>
              </table>
            {
            zooClass.map(zoologyClass=> <div>
             

              <table class="table">
              <tbody>
                 <tr>
                     <td className='text-start'>{zoologyClass.chapterName}</td>
                     <td className='text-start'>{zoologyClass.topicName}</td>
                     <td>
                        <a href={`https://${zoologyClass.classLink}`} target="_blank" rel="noopener noreferrer"><PlayCircleFilledIcon color="secondary"/></a>
                     </td>
                     <td>
                        <a href={`https://${zoologyClass.examLink}`} target="_blank" rel="noopener noreferrer"><NoteAddIcon/></a>
                     </td>
                     <td>
                       <Link className="btnset" to={`/zooexamupdate/${zoologyClass._id}`}>update</Link>
                   </td>
                 </tr>
              </tbody>
            </table>
                    </div>)
            }
          
        </div>
    );
};

export default ZooExamUpdate;