const initState = {
  // projects: [
  //   {id: '1', title: 'Roar the shit out of them', content: 'GRRGH ARGH ROOAAARR'},
  //   {id: '2', title: 'Kick arses', content: 'smack smash hit with paws'},
  //   {id: '3', title: 'Eat guts', content: 'omnom mnom nom'},
  // ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log(action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('There was an erroro while creating a project ::: ', action.err)
      return state
    default:
      return state
  }
}

export default projectReducer
