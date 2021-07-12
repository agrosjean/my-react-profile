import React, { Component } from 'react';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }

    validate(e) {
        const inputName = e.target.getAttribute('name');
        const val = e.target.value;
        if (!val) {
            this.setState({ error: `Input ${inputName} is required` });
        } else {
            if (inputName === 'email') {
                if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(val)) {
                    this.setState({ error: '' });
                } else {
                    this.setState({ error: `Email not valid` });
                }
            } else {
                this.setState({ error: '' });
            }
        }
    }


    render() {
        return (
            <div>
                <h3>Contact</h3>
                <br />
                <input type="text" name="name" placeholder="Enter name" onBlur={(e) => this.validate(e)} />
                <br />
                <input type="email" name="email" placeholder="Enter email" onBlur={(e) => this.validate(e)} />
                <br />
                <textarea type="text" name="message" placeholder="Enter message" onBlur={(e) => this.validate(e)}></textarea>
                <br />

                <p className="error">{this.state.error}</p>

                <button>Submit</button>
            </div>
        )
    }
}

export default Contact;