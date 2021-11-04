import React, { Component } from 'react';

class Giflist extends Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map(gif => <li><img key={gif} src={gif} alt="gif"/></li>)}
            </ul>
        );
    }
}

export default Giflist;
