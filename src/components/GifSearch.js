import React, { Component } from 'react';


class Gifsearch extends Component {
    state = {
        search: ""
    };

    handleChange = event => {
        this.setState({
           search: event.target.value
       })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFetch(this.state.search);
        this.setState({
            search: ""
        });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{float: 'right'}}>
                <label>Enter a search term:</label>
                <input type="text" id="search" value={this.state.search} onChange={this.handleChange}/>
                <button type="submit">Find Gifs</button>
            </form>
        );
    }
}

export default Gifsearch;
