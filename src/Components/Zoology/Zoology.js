import React from 'react';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import css from '../Botany/Botany.css'
const Zoology = (props) => {
const {chapterName,topicName,classLink,examLink} = props.zoologyClass
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
         <td>
            <a href={`${classLink}`} target="_blank" rel="noopener noreferrer"><PlayCircleFilledIcon color="secondary"/></a>
         </td>
         <td  className='text-start'>
            <a href={`${examLink}`} target="_blank" rel="noopener noreferrer"><NoteAddIcon/></a>
         </td>
         
     </tr>
  </tbody>
 
</table>
        </div>
    );
};

export default Zoology;