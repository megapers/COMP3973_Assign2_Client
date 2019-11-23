import React from 'react';

import { userService, authenticationService } from '@/_services';

class KidsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.arr = [];
        this.user = authenticationService.currentUserValue;
        console.log(this.user);
    }

    componentDidMount() {
      userService.getAll()
        .then((response) => {
            let data = [];
            response.forEach(element => {
                data.push(element);
                this.arr.push(element);
            }); 
            this.setState({ data });
        });
    }

    renderTableData() {
        console.log(this.arr);
        return this.state.data.map((kid, index) => {
           const {id, username, firstName, lastName, isNaughty } = kid //destructuring
           if(kid.id != this.user.id){
            return (
               <tr key={id}>
                  <td>{id}</td>
                  <td>{username}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{isNaughty.toString()}</td>
               </tr>
            )
           }
        });
     }

     renderTableHeader() {
        if (!this.state.data === undefined || !this.state.data.length == 0){
        let header = Object.keys(this.state.data[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        });
      }
    }
    
     render() {
        return (
           <div>
              <h3 id='title'>List of kids</h3>
              <table id='kids'>
                 <tbody>
                  <tr>
                     <th>Id</th>
                     <th>UserName</th>
                     <th>FirstName</th>
                     <th>LastName</th>
                     <th>Is naughty?</th>
                  </tr>
                     {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        );
    }
}

export { KidsPage };