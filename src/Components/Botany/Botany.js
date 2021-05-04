import React from 'react';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import "./Botany.css"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
const Botany = (props) => {
const {chapterName,topicName,classLink,examLink} = props.botanyClass
    console.log(chapterName);
    return (
        <div>
    <table class="table">
  {/* <thead>
    <tr>
      <th className='text-start' scope="col">অধ্যায়</th>
      <th className='text-start' scope="col">বিষয়</th>
      <th scope="col">ক্লাস</th>
      <th  scope="col">এক্সাম</th> 
    </tr>
  </thead> */}
  <tbody>
     <tr>
         <td className='text-start'>{chapterName}</td>
         <td className='text-start'>{topicName}</td>
         <td className='text-center'>
            <a href={`${classLink}`} target="_blank" rel="noopener noreferrer"><PlayCircleFilledIcon color="secondary"/></a>
         </td>
         <td className='text-start'>
            <a href={`${examLink}`} target="_blank" rel="noopener noreferrer"><NoteAddIcon/></a>
         </td>
         
     </tr>
  </tbody>
 
</table>
        </div>
    );
};

export default Botany;