import React from "react"
import { BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux"
import ReduxToastr from "react-redux-toastr"

import store from "./redux/store/"
import Routes from './routes/'
import TopNavBar from './components/commons/NavBar'
import SideNavBar from './components/commons/SideBar'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
         <div className="wrapper">
            <SideNavBar />
          <div className="main">
              <TopNavBar />  
              <Routes/>
              <ReduxToastr
                timeOut={5000}
                newestOnTop={true}
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
              />
          </div>
        </div>
      </BrowserRouter>
    </Provider>    
  )
}

export default App;
