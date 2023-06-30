import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleEmailChange = event => {
        setEmail(event.target.value);
      };
    
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmit =async (event) => {
        event.preventDefault();
        try{
            const request = new XMLHttpRequest();
            request.open("POST", "http://localhost:8000/login");
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify({
              email: email,
              password: password
            }));

            request.onload = () => {
                if (request.status === 200) {
                  const responses = request.response;
                  console.log(responses)
                  console.log("thats gooooooooooood")
                  const responsesJson = JSON.parse(responses);
                  console.log(responsesJson)
                  navigate("/home",{
                    state: {
                        name: responsesJson.name
                    }
                  })
                } else {
                  console.log(":(")
                }
              };


        }
        catch(e){
            console.log(e)
        }
    };
    

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} action="POST">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input className="form-control" id="email" value={email} onChange={handleEmailChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;