const initState = {}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Prject created successfuly')
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('There was an erroro while creating a project ::: ', action.err)
      return state
    default:
      return state
  }
}

export default projectReducer
