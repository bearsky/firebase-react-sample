const initState = {}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Prject created successfuly')
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('There was an error while creating a project ::: ', action.err)
      return state
    case 'REMOVE_PROJECT':
      console.log('Project removed!')
      return state
    case 'REMOVE_PROJECT_ERROR':
      console.log('There was an error while removing a project ::: ', action.err)
      return state
    default:
      return state
  }
}

export default projectReducer
