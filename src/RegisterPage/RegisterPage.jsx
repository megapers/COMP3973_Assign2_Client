import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { authenticationService } from '@/_services';

class RegisterPage extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      username:'',
      password:''
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} 
            
            onClick={() => {
                authenticationService.register(this.state.first_name, this.state.last_name, this.state.username, this.state.password)
                    .then(
                        user => {
                            const { from } = this.props.location.state || { from: { pathname: "/" } };
                            this.props.history.push(from);

                            authenticationService.login(this.state.username, this.state.password)
                            .then(
                                user => {
                                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                                    this.props.history.push(from);
                                },
                                error => {
                                    setSubmitting(false);
                                    setStatus(error);
                                }
                            );
                        }
                    ).catch(function (error) {
                        alert(error);
                      });
                }
            }/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export {RegisterPage};