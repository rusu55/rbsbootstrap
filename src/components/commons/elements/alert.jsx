import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({alerts})=>{
    return(
        alerts !== null && alerts.length > 0 && alerts.map(alert =>(
            <div key={alert.id} className="col-12 col-lg-6">
                    <div  className={`alert alert-dismissible alert-${alert.alertType}`} >
								<div class="alert-icon">
										<i className="far fa-fw fa-bell"></i>
											</div>
											<div className="alert-message">
												<strong>{alert.msg}</strong>
											</div>
					</div>
             </div>
        ))
        
    )
}

const mapStateToProps = state =>({
    alerts: state.alert
})



Alert.propTypes ={
    alerts: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Alert) 