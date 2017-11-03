import React, {Component} from 'react';
import 'purecss';
import './Home.css';
import {Layout} from "../../features/layout";

class Home extends Component {
    render() {
        return (
            <Layout>
                <a className="pure-button">A Pure Button</a>
                <button className="pure-button">A Pure Button</button>
            </Layout>
        );
    }
}

export default Home;
