import React from 'react';
import { authenticationService } from '@/_services';
import MapContainer from "@/MapContainer";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }

    componentDidMount() {
        //userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { currentUser, users } = this.state;
        return (
            <div>
                <h1>COMP3973 Assignment2</h1>
                <h2>Implemented by: Timur Makimov, A00903109</h2>
                <h3>Hi {currentUser.firstName}!</h3>
                <p>You're logged in with React & JWT!!</p>
                {/* <h3>Users from secure api end point:</h3>
                {users &&
                    <ul>
                    {users.map(user =>
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                        )}
                        </ul>
                    } */}
            </div>
        );
    }
}

export { HomePage };