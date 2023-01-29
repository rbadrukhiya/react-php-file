import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useRef, useState } from 'react';

function App() {
  const [name , setname] = useState('')
  const [email , setemail] = useState('')
const image = useRef();

  function submit()
  {
    // setimg(e.target.files[0])
    // console.log(img);
    // e.preventDefault()
    // window.location.reload(false)
    const data = new FormData()
    data.append('image' , image.current.files[0])
    data.append('name', name)
    data.append('email' , email)
    
    axios.post('http://localhost/react_php_file/insert.php' , 
    data)
  .then(function (response) {
    // handle success
    console.log(response);
    setname(response)
    setemail(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  },[])

  }
  return (
    <div className="App">
      <form encType='multipart/form-data' onSubmit={submit} >

    {/* <input type="file" name="image" id=""  ref={image}/> */}
    <input type="file" name="image" id=""  ref={image}/>
    <input type="submit" name='submit' value="submit"/>
    <input type="text" placeholder='name' onChange={(i) => setname(i.target.value)}/>
    <input type="text" placeholder='email' onChange={(i) => setemail(i.target.value)} />
    {/* <button type='submit' name='submit'> submit</button> */}
    </form>

    </div>
  );
}

export default App;
