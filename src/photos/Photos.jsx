import React, { Component } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import './Photos.css';
import Search from './Search';

export default class Photos extends Component {
    state = {
        photos: [],
        searchtitle: "",
    };

    getSearchValue = (search) => {
        this.setState({searchtitle: search})
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
            this.setState({ photos: res.data });
        });
    }

    render() {
        const { title, searchtitle} = this.state;
        const filteredtitle = title.filter((pic) =>
        pic.title.toLowerCase().include(searchtitle.toLowerCase())
        );
        console.log(filteredtitle)
        return (
            <div className='photo-card'>
                <h1>To display Photos</h1>
                <Search getSearchValue={this.getSearchValue}/>
                <div>
                    <div className='pic-card'>
                        {/* {this.state.photos.map((pic, index) => (
                            <div class="card">
                                <p class="card-title" key={index}>{pic.title}</p>
                                <img src={`https://dog.ceo/api/breeds/image/random`} alt="photo" />
                            </div>
                        ))} */}
                        {filteredtitle.map((pics, index) => (
                            <div class="card">
                                <p class="card-title" key={index}>{pics.title}</p>
                                <img src={`https://dog.ceo/api/breeds/image/random`} alt="photo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
