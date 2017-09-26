import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView } from 'react-native'
import { employeesFetch } from '../actions/EmployeeActions'
import ListItem from './ListItem'

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch()
    this.createDataSource(this.props)
  }

  // The two life cycle methods, componentWillMount and componentWillReceiveProps
  //  is essential for making sure the employees are received by the component before it renders
  // Since the action method is async, componentWillReceiveProps is there to make sure that 
  //  createDataSource is called with the latest props (in the event that this.props in 
  //  componentWillMount still contains the old list of employees, nextProps will definitely 
  //  have the latest list of employees)

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    //  will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(employees)
  }
  
  renderRow(employee) {
    return <ListItem employee={employee} />
  }

  render() {
    return (
      <ListView 
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = (state) => {
  // _.map creates an array of employees
  // val will contain the employee props (name, phone, shift), uid is the employee uid
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }  // will look like this { shift: 'Monday', name: 'Bob', id: 'i12h404' }
  })

  return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)