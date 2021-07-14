import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SelectTestParams from './components/SelectTestParams'
import Tests from './components/tests'
import FinalPage from './components/finalPage'


function AppRouter() {
    
 
    return (
        <Switch>
            <Route exact path = '/tests' component = {Tests} />
            <Route exact path='/select' component={SelectTestParams} />
            <Route exact path='/final' component={FinalPage} />
            <Redirect to ='/select' />
        </Switch>
  )
}

export default AppRouter

