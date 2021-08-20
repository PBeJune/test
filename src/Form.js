import React from 'react';

export default class Form extends React.Component {
    state = { 
        fullName: "",
        email: "",
        password: ""
    };

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            fullName: "",
            email: "",
            password: ""
        });
    };

    render() {
        return (
            <form>
                <input 
                name="fullName"
                placeholder="Full Name" 
                value={this.state.fullName} 
                onChange={e => this.change(e)}
                 />
                 <br />
                <input 
                name="email"
                placeholder="Email" 
                value={this.state.email} 
                onChange={e => this.change(e)}
                 />
                 <br />
                <input 
                name="password"
                type="password"
                placeholder="Password" 
                value={this.state.password} 
                onChange={e => this.change(e)}
                 />
                 <br />
                 <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}