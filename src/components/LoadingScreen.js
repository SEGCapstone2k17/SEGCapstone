import React, {PropTypes, Component} from 'react';

class LoadingScreen extends Component {
    render() {
        return (
            <div id="dashboard">
                <h1><i>Loading...</i></h1>
            </div>
        );
    }
}

module.exports = {
    LoadingScreen: LoadingScreen
}
