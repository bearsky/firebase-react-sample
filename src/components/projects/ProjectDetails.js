import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { removeProject } from '../../store/actions/projectActions'


const ProjectDetails = (props) => {
  const { project, auth } = props
  const projectId = props.match.params.id

  if (!auth.uid) return <Redirect to='/signin' />

  if (project) {

    // TODO: Make DeleteProject component instead
    const deleteProject = auth.uid === project.authorId ? (
      <div className="delete-project" onClick={async() => {await props.removeProject(projectId); props.history.push('/')}}>
        <i className="material-icons right hoverable red-text text-darken-4">delete_forever</i>
      </div>
    ) : null


    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">

            { deleteProject }

            <span className="card-title">{ project.title }</span>

            <p>{ project.content }</p>
          </div>
          <div className="card-action lighten-4 grey-text">
            <div>{ project.authorFirstName } { project.authorLastName }</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Laoding project....</p>
      </div>
    )
  }
}

const maStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null

  return {
    project: project,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProject: (project) => dispatch(removeProject(project))
  }
}

export default compose(
  connect(maStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)
