import React,{useState,useRef,useEffect} from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import SvgIcon from '@mui/material/SvgIcon';
import axios from 'axios'

const HomeIcon =(props) => {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

function PractisePage() {

    const[name,setName] = useState('');
    const[password,setPassword] = useState('');
    const inputRef = useRef();


    const values ={name,password}
    const postData = async() =>{
    const response = axios.post("http://localhost:8080/data",values)
    .then(response => console.log('uploaded successfully'))
    .catch(error => console.log('failed due to internet issues'))
      
    }

    useEffect(()=>postData(),[values])
    const onSubmit =()=>{
        alert(`${name} ${password}`);
    }


    useEffect(() => {
       inputRef.current.focus();
    }, [])

    let person = {
      firstName:'charan',
      lastName:'kalakonda'
    }


    // let {firstName:fname,lastName:lname} = person

    return (
        <div>
            <HomeIcon color ='secondary' />
            <label>
                username:
                <input  ref ={inputRef} type = "text" value = {name} onChange ={(event)=>setName(event.target.value)}
                 /> 
            </label>
            <label>
                password:
                <input type = "password"  value = {password} onChange ={(event)=>setPassword(event.target.value)}
                 /> 
            </label>
            <button onClick = {onSubmit}> <div style ={{padding:'1px 0 0 0' }}>submit</div></button>
        </div>
    )
}

export default PractisePage
