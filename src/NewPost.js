import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './NewPost.css';
import axios from "axios"

function NewPost(){
    const [title,setTitle]=useState("");
    const [summary,setSummary]=useState("");
    const [content,setContent]=useState("");
    const [file,setFile]=useState("");

    function submitted(e){
        e.preventDefault();
        console.log(file[0]);
        

        const formData = new FormData();

        formData.set('title',title);
        formData.set('summary', summary);
        formData.set('content',content);
        formData.set('file',file[0]);


        axios.post("http://localhost:4000/newPost",formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
              }
        })


        setTitle("");
        setSummary("");
        setContent("");
        setFile("");
    }

    return(
    <div className='newpost-form'>
        <form onSubmit={submitted}>
            <input type="title" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="summary" placeholder='summary' value={summary} onChange={(e)=>setSummary(e.target.value)}/>
            <input type='file'onChange={(e)=>setFile(e.target.files)}/>
            <ReactQuill  value={content} onChange={(e)=>setContent(e)}/>
            <button type="submit">Create Post</button>
        </form>
    </div>
    );
}

export default NewPost;