import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => {
  const { navBarStyle, navBarTitleStyle } = styles

  return (
    <Router>
      <Scene key="root" navigationBarStyle={navBarStyle} titleStyle={navBarTitleStyle} hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
          />
        </Scene>
        
        <Scene key="main">
          <Scene 
            key="employeeList" 
            component={EmployeeList}
            title="Employees"
            rightTitle=" Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  )
}

const styles = {
  navBarStyle: {
    backgroundColor: '#AED6F1'
  },
  navBarTitleStyle: {
    alignSelf: 'center'
  }
}

export default RouterComponent