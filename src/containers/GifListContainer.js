import React, { Component } from 'react';
import Giflist from '../components/GifList';
import Gifsearch from '../components/GifSearch';

class Giflistcontainer extends Component {
    state = {
        gifs: [],
    };

    handleFetch = search => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=BGkRVDZC5x3E2VHtxn54PobS29LhkKQh&rating=g`)
        .then(r => r.json())
        .then(json => this.setState({
                gifs: [json.data[0].images.original.url, json.data[1].images.original.url,json.data[2].images.original.url]
            })
        )
    }

    render() {
        return (
            <div>
            <Gifsearch handleFetch={this.handleFetch} />
            <Giflist gifs={this.state.gifs} />
                
            </div>
        );
    }
}

export default Giflistcontainer;
