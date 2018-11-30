import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.sendSomeData = this.sendSomeData
        this.updateMessage = this.updateMessage
        this.state = {
            content: null //install content
            messageValue: '',

        }:
    }

    updateMessage(e) {
        this.setState({
            messageValue: e.target.
        });
    }
    render() {
        <div className="content-area">
        {this.state.content}
        <div className"message">
        {

        }
        
        
        
        
        </div>
        return (
            <div>
                <h1>Home Page</h1>
                <p>
                    Here is my main page content <Link to="/page1/mail">Mail</Link>
                </p>
                <p>
                    <a href="https://reacttraining.com/react-router/web/guides/quick-start">Click me to find out more about routing</a>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);