import React, { Component } from 'react'

export default class Search extends Component {
    state ={
        search: "",
    };

    handleChange = (event) => {
        this.setState({ search:event.target.value});
    };

    handlesubmit = (event) => {
        event.preventDefault ();
        this.props.getSearchValue(this.state.search);
        this.setState({search: " "});
    };
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
      <input type='text' value={this.state.search} onChange={this.handleChange} placeholder='Enter ID'/>
      </form>
    )
  }
}
