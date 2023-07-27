import React, { Component } from 'react';
import axios from "axios";
import "./albums/App.css";
import Searchs from './Searchs';

export default class App extends Component {
  state = {
    title: [],
    searchTerm: "",
  };
  getSearchValue = (search) => {
    this.setState({ searchTerm: search });
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => this.setState({ title: res.data }));
  }
  render() {
    const { title, searchTerm } = this.state;
    const filterUser = title.filter((user) =>
      user.title.includes(searchTerm));
    // console.log(filterUser);
    return (
      <div>
        <Searchs getSearchValue={this.getSearchValue}></Searchs>
        <div className="container">
          {filterUser.map((user, index) => (
            <div className="card" key={index}>
              <img src={`https://robohash.org/${index}?set=set3`}
                alt="images" />
              <div className='userId'>{user.userId}</div>
              <div className="title">{user.title}</div>

            </div>
          ))}
        </div>
      </div>
    )
  }
}