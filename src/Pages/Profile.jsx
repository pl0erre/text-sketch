// Basic
import React, { Component } from 'react'
import '../Css/Profile.css';

// Components
import MainLayout from '../Components/MainLayout';
import {CardPanel, Chip, Button} from 'react-materialize';

// Utils
import Auth from '../Utils/Auth';
const auth = new Auth();

export default class Profile extends Component {

  render() {
    let user = auth.getUser();
    return (

      <MainLayout>
        <CardPanel className="App-Profile blue-grey lighten-3">
          <div className="info-container">
            <img className="circle" src="/UserIcon.png" alt="user-icon"/>
            <div className="profile-info">
              <Chip>E-Mail: {user.email} </Chip>
              <Chip>Username: {user.username}</Chip>
            </div>
            <Button className="deep-orange darken-4" node="a" href="/auth/logout">Logout</Button>
          </div>
        </CardPanel>
        
        
        
      </MainLayout>
      
    )
  }
}




// import React, { Component } from 'react';
// import '../css/Profile.css';
// import Nav from '../Components/Nav';

// import Auth from '../Utils/Auth';
// const auth = new Auth();

// export default class Profile extends Component {
  
//   render() {
//     let user = auth.getUser();
//     return (
//       <>
//         <Nav />
//         <div className="App-Profile">
//           <div className="user-container">
//             <img src="https://image.flaticon.com/icons/png/512/55/55089.png" alt="user-png" width="200px"/>
//             <div className='user-info'>
//               <h2>Hey {user.username}</h2>
//               <p>Fistname: {user.firstname}</p>
//               <p>Lastname: {user.lastname}</p>
//               <p>E-Mail: {user.email}</p>
//             </div>
//           </div>
          
//         </div>
//       </>
//     )
//   }
// }