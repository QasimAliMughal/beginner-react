import React,{useState} from 'react';
import Tweet from './Tweets';

function App() {


    const [users,setUsers] = useState([
        {name:"qasim",message:"some random message"},
        {name:"mosh",message:"another random message"},
        {name:"rob",message:"another reandom messog"}
    ]);

    return (
        <div className="container">
            
            {
                users.map(user => <Tweet name={user.name} message={user.message}/>)
            }

        </div>
    );


}

export default App;
