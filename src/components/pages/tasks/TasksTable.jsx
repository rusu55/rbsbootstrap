import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import { 
    Table,
    Badge
    } from 'reactstrap'
import { timeDifference } from '../../commons/utils/timeDifference'

const TasksTable = ({onCompleted, onEdit, completed, tasks}) =>{
    return(
        <Table className="mb-0">
            <thead>
                <tr>
                    <th style={{ width: '10%' }}> Task Date </th>
                    <th style={{ width: '62%' }}>Task Description</th>
                    <th className="text-right" style={{ width: '18%' }}>Task Status</th>
                    <th className="text-right" style={{ width: '10%' }}>Action</th>
                </tr>
            </thead>
            <tbody>
                    {tasks.map(task => (
                         <tr key={task._id}>
                           <td><span className={ timeDifference(task.taskDate) > 30 || timeDifference(task.taskDate) < -30 ? 'badge badge-danger' : 'badge badge-success' }>
                           {Moment(task.taskDate).format('MMMM Do')}
                           </span></td>
                           <td>
                               {completed.findIndex(obj => obj === task._id) > -1 ? (<del>{task.description}</del>) : (<span>{task.description}</span>)}                            
                           </td>
                           <td className="text-right">
                                {completed.findIndex(obj => obj === task._id) > -1 ? (<span onClick={()=>onCompleted(task._id)} style={{ cursor: "pointer" }} className='badge badge-success'> Mark as Uncompleted</span>) : (<span onClick={()=>onCompleted(task._id)} style={{ cursor: "pointer" }} className='badge badge-warning'> Mark as Completed</span>)} 
                               
                           </td> 
                           <td className="text-right">
                              {completed.findIndex(obj => obj === task._id) > -1 ? (<span></span>) : (<span onClick={()=>onEdit(task._id)} style={{ cursor: "pointer" }} className='badge badge-success'>Edit Task</span>)}                               
                           </td>                          
                        </tr>
                     ))}
            </tbody>
        </Table>
    )
}

TasksTable.propTypes = {

}
export default TasksTable