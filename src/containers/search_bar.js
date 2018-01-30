import React, { Component } from 'react'
import fetchWeather from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state={
      searchTerm:""
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  onInputChange(event){
    this.setState({
      searchTerm:event.target.value})
  }

  onFormSubmit(event){
    this.props.fetchWeather(this.state.searchTerm)
    event.preventDefault()
  }

  render(){

    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forcast"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
