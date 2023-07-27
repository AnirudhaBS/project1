import React, { Component } from 'react'
import "./App.css";
export default class Searchs extends Component {
    state = {
        search: "",
    };
    handleChange = (event) => {
        this.setState({ search: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getSearchValue(this.state.search);
        this.setState({ search: "" });
    };
    render() {
        return (
            <form className='searchbox' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    value={this.state.search}
                    onChange={this.handleChange}
                    placeholder='Enter search character' />
            </form>
        );
    }
}
