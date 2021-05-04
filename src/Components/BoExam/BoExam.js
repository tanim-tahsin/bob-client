import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const BoExam = () => {
    const { register,handleSubmit, watch, formState: { errors } } = useForm();
   const [exam,setExam] = useState({})
    const {id} = useParams()
    useEffect(() => {
        // setLoading(true);
        fetch(`https://fierce-beach-78095.herokuapp.com/boexam/${id}`)
        .then(res => res.json())
        .then(data =>setExam(data))
        .catch(console.log)
        // .finally(()=>setLoading(false))
    }, [])
console.log(exam);

    const onSubmit=(data)=>{
       const newdata = {
           chapterName:data.chapterName||exam.chapterName ,
           classLink: data.classLink || exam.classLink ,
           topicName: data.topicName ||exam.topicName ,
           examLink: data.examLink || exam.examLink
       }
       console.log(newdata)
        fetch(`https://fierce-beach-78095.herokuapp.com/boexam/${id}`,{
            method: 'PUT',
            body: JSON.stringify(newdata),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data =>{
            setExam(data)
            alert(" data updated😍")
        })
        .catch(console.log)
        
    }
    const cardStyle = {
        marginTop:'0',
        width:'700px'
    }
    return (
        <div>
        <div >
             <div class=" text-center ">
    <span className="text-danger"  style={{fontSize:'25px', fontWeight:'bold'}}>Botany Update Panel</span>
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
                                            <div class="form-group"> <label for="form_name">Chapter Name</label> <input id="form_name" defaultValue={exam.chapterName} {...register("chapterName")} type="text" name="chapterName" class="form-control" required="required" data-error=" ChapterName is required."/> </div>
                                            </div>
                                        <div class="col-md-6">
                                            <div class="form-group"> <label for="form_topicName">Topic Name</label> <input id="from_topicName" defaultValue={exam.topicName} {...register("topicName")} type="text" name="topicName" class="form-control"  required="required" data-error="topic Name is required."/> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            </div>
                                            <div class="row">
                                            <div class="col-md-12">
                                            <div class="form-group"> <label for="form_classLink">Class Link</label> <input id="from_classLink" defaultValue={exam.classLink} {...register("classLink")} type="text" name="classLink" class="form-control"  required="required" data-error="class Link is required."/> </div>
                                            </div>
                                            <div class="col-md-12">
                                            <div class="form-group"> <label for="form_examLink">Exam Link</label> <input id="from_examLink" defaultValue={exam.examLink} {...register("examLink")} type="text" name="examLink" class="form-control"/> </div>
                                            </div>
                                                <div class="col-md-12 mt-4"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " value="😊update Now"/> </div>
                                                </div>
                                            </div>
                </form>
                                    </div>
                                </div>
                               
                            </div> 
                           
                           
</div>


                    </div>
                   
                </div>
               
    </div>
    );
};

export default BoExam;