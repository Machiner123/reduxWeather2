import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component{
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>City</tr>
          <tr>Temp </tr>
          <tr>Pressure</tr>
          <tr>Humidity</tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }){
  return(
    { weather: weather}
  )
}

export default connect(mapStateToProps)(WeatherList)
