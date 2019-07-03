import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTasks, setTask } from '../../../redux/actions/tasks'

import {
    Container,
    Row,
    Col,
    Card,
    CardBody
} from 'reactstrap'

import Spinner from '../../commons/elements/spinner'
import TasksTable from './TasksTable'
import AddNewTask from './AddNewTask'

const Tasks = ({auth, tasks:{ loading, tasks, finished}, getTasks, setTask}) =>{
    useEffect(()=>{getTasks()},[getTasks])

   const  handleClick = (item) =>{
        setTask(item) 
    }
    const handleEdit = (item) => {
        console.log(item)
    }

    return(
        <Container fluid className="p-0">
            <h1 className="h3 mb-3">Tasks Page</h1>
            <Row>
            <Col xl="8">
                <Card>
                    <CardBody>
                        <AddNewTask />
                        { loading ? <Spinner /> : 
                            (tasks.length > 0 ? (<TasksTable onCompleted={handleClick} onEdit={handleEdit} completed={finished} tasks={tasks} />)
                            : ((<h1>No Tasks!</h1>)))                             
                        }
                    </CardBody>
                </Card>
            </Col>
            <Col  xl="4">
                <span>Other stuf!!!</span>
            </Col>
            </Row>
        </Container>
    )
} 

Tasks.propTypes = {
    getTasks: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    tasks: state.task
})

export default connect(mapStateToProps, {getTasks, setTask})(Tasks)