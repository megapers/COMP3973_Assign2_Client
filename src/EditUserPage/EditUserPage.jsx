import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Checkbox } from 'material-ui';
import {userService, authenticationService } from '@/_services';

class EditUserPage extends React.Component {
  constructor(props){
    super(props);
    
    this.state={//add id to pass to the update function
      data: {
        birthDate: '',
        city: '',
        email: '',
        firstName: '',
        isNaughty: false,
        lastName: '',
        latitude: 0,
        longitude: 0,
        postalCode: '',
        province: '',
        role: '',
        street: '',
        username: ''
      }
    };
  }

  componentDidMount() {
    // fetch data and update state
    let id = this.props.location.state;
    userService.getUserById(id)
    .then(json => this.setState({ data: json }));
    //.then(json => console.log(json));

 }

  render() {
    let dt = this.state.data;
    return (
      <div>
        <MuiThemeProvider>
          <div>
           <form onSubmit={this.handleSubmit}>
           <TextField
            id='name'
            floatingLabelText="Enter your Last Name"
            value={dt.firstName}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    firstName: newValue         
                      }
                    }
                  )
                )
              }
            />
           <br/>
           <TextField
             floatingLabelText="Last Name"
             value={dt.lastName}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    lastName: newValue         
                      }
                    }
                  )
                )
              }
            />
           <br/>
           <TextField
             floatingLabelText="Username"
             value={dt.username}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    username: newValue         
                      }
                    }
                  )
                )
              }
            />
           <br/>
           <TextField
             type = "email"
             floatingLabelText="Email"
             value={dt.email}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    email: newValue         
                      }
                    }
                  )
                )
              }
            />
           <br/>
           <TextField
             floatingLabelText='Birthday'
             type = "date"
             value={formatDate(dt.birthDate).toString()}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    birthDate: newValue         
                      }
                    }
                  )
                )
              }
            />
           <br/>
           <TextField
             floatingLabelText="Street"
             value={dt.street}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    street: newValue         
                      }
                    }
                  )
                )
              }
            />
           <br/>
           <TextField
             floatingLabelText="City"
             value={dt.city}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    city: newValue         
                      }
                    }
                  )
                )
              }
            />
           <br/>
           <TextField
             floatingLabelText="Province"
             value={dt.province}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    province: newValue         
                      }
                    }
                  )
                )
              }
            />
           <br/>
           <TextField
             floatingLabelText="Postal Code"
             value={dt.postalCode}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    postalCode: newValue         
                      }
                    }
                  )
                )
              }
            />
           <br/>
           <TextField
             floatingLabelText="Latitude"
             value={dt.latitude}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    latitude: newValue         
                      }
                    }
                  )
                )
              }
            />
           <br/>
           <TextField
             floatingLabelText="Longitude"
             value={dt.longitude}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    longitude: newValue         
                      }
                    }
                  )
                )
              }
            />
           <br/>
           <Checkbox
            checked={dt.isNaughty}
              onChange = {(event,newValue) => this.setState(prevState => ({
                data: {                  
                    ...prevState.data,    
                    isNaughty: newValue         
                      }
                    }
                  )
                )
              }
            
          />
           <RaisedButton label="Submit" primary={true} style={style} 
            
            onClick={() => {
                //authenticationService.register(this.state.first_name, this.state.last_name, this.state.username, this.state.password)
                userService.updateUser(this.state)
                   .catch(function (error) {
                        alert(error);
                      });
                }
            }/>
            </form>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

const style = {
  margin: 15,
};
export {EditUserPage};