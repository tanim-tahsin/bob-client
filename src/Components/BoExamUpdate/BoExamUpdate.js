import React, { useEffect, useState } from 'react';
import './BoExamUpdate.css'
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Link } from 'react-router-dom';
const BoExamUpdate = () => {
    const [boClass, setBoClass] = useState([]);
    useEffect(() => {
        // setLoading(true);
        fetch('https://fierce-beach-78095.herokuapp.com/boclass')
        .then(res => res.json())
        .then(data =>setBoClass(data))
        .catch(console.log)
        // .finally(()=>setLoading(false))
    }, [])
    return (
        <div>
            {
            boClass.map(botanyClass=> <div>
                <table class="table">
              <thead>
                <tr>
                  <th className='text-start' scope="col">অধ্যায়</th>
                  <th className='text-start' scope="col">বিষয়</th>
                  <th scope="col">ক্লাস</th>
                  <th  scope="col">এক্সাম</th> 
                </tr>
              </thead>
              <tbody>
                 <tr>
                     <td className='text-start'>{botanyClass.chapterName}</td>
                     <td className='text-start'>{botanyClass.topicName}</td>
                     <td>
                        <a href={`https://${botanyClass.classLink}`} target="_blank" rel="noopener noreferrer"><PlayCircleFilledIcon color="secondary"/></a>
                     </td>
                     <td>
                        <a href={`https://${botanyClass.examLink}`} target="_blank" rel="noopener noreferrer"><NoteAddIcon/></a>
                     </td>
                     <td>
                       <Link className="btnset" to={`/boexamupdate/${botanyClass._id}`}>update</Link>
                   </td>
                 </tr>
              </tbody>
            </table>
                    </div>)
            }
          
        </div>
    );
};

export default BoExamUpdate;