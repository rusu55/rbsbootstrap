import React from "react"
import { BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux"
import ReduxToastr from "react-redux-toastr"

import store from "./redux/store/"
import Routes from './routes/'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
         <div className="wrapper">
          <div className="main">      
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
