import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ZooExamUpdate from '../ZooExamUpdate/ZooExamUpdate';

const ZooAdminSadab = () => {
    const [zooClass , setZooClass]= useState({})
        const { register,handleSubmit, watch, formState: { errors } } = useForm();
       
     
        const onSubmit = zooClass =>{
      
        console.log(zooClass);

            fetch('https://fierce-beach-78095.herokuapp.com/zooadminsadab' ,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(zooClass),
               
            })
            .then(res=> console.log("success", res))
            alert(" data send successfully")
      
        }

        const cardStyle = {
            marginTop:'0',
            width:'700px'
        }
    return (
        <div className='bg-light'>
        <div >
             <div class=" text-center ">
    <span  style={{fontSize:'25px', fontWeight:'bold'}}>Zoology Admin Panel</span>
</div>
    <div class="row mr-0">
        <div class="col-lg-7 mx-auto">
            <div style={cardStyle} class="card mt-2 mx-auto p-4 bg-light">
                <div class="card-body bg-light ml-4">
                    <div class="container">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="controls">
                                <div class="row">
                                         <div class="col-md-6">
                                            <div class="form-group"> <label for="form_name">Chapter Name</label> <input id="form_name" {...register("chapterName")} type="text" name="chapterName" class="form-control" required="required" data-error=" ChapterName is required."/> </div>
                                            </div>
                                        <div class="col-md-6">
                                            <div class="form-group"> <label for="form_topicName">Topic Name</label> <input id="from_topicName" {...register("topicName")} type="text" name="topicName" class="form-control"  required="required" data-error="topic Name is required."/> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            </div>
                                            <div class="row">
                                            <div class="col-md-12">
                                            <div class="form-group"> <label for="form_classLink">Class Link</label> <input id="from_classLink" {...register("classLink")} type="text" name="classLink" class="form-control"  required="required" data-error="class Link is required."/> </div>
                                            </div>
                                            <div class="col-md-12">
                                            <div class="form-group"> <label for="form_examLink">Exam Link</label> <input id="from_examLink" {...register("examLink")} type="text" name="examLink" class="form-control"/> </div>
                                            </div>
                                                <div class="col-md-12 mt-4"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " value="😊Send Now"/> </div>
                                                </div>
                                            </div>
                </form>
                                    </div>
                                </div>
                               
                            </div> 
                            <ZooExamUpdate/>
                           
</div>


                    </div>
                   
                </div>
               
    </div>
        
    );
};

export default ZooAdminSadab;