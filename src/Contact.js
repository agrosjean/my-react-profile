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
            <div className="center-container">
                <div className="contact">
                    <h3 className="content-title">Contact</h3>
                    <br />
                    <input type="text" name="name" placeholder="Enter name" onBlur={(e) => this.validate(e)} />

                    <input type="email" name="email" placeholder="Enter email" onBlur={(e) => this.validate(e)} />

                    <textarea type="text" rows="15" name="message" placeholder="Enter message" onBlur={(e) => this.validate(e)}>

                    </textarea>


                    <p className="error">{this.state.error}</p>
                    <br />

                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default Contact;