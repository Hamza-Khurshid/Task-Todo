import {AddTask, DeleteTask, EditTask} from '../actions/todoActions';

let initState = {
    search: '',
    title: 'My Day',
    date: getTodaysDate(),
    tasks: [ {
      id: '1',
      isImp: true,
      isDone: true,
      title: 'React assignment',
      desc: 'A todo app in react submit before 15-03-2019'
    }, {
      id: '2', 
      isImp: true,
      isDone: false,
      title: 'JavaScript assignment',
      desc: 'A todo app in react submit before 15-03-2019'
    }, {
      id: '3',
      isImp: false,
      isDone: true, 
      title: 'Android assignment',
      desc: 'A todo app in react submit before 15-03-2019'
    }, {
      id: '4', 
      isImp: true,
      isDone: false,
      title: 'React assignment',
      desc: 'A todo app in react submit before 15-03-2019'
    }, {
      id: '5', 
      isImp: false,
      isDone: false,
      title: 'JavaScript assignment',
      desc: 'A todo app in react submit before 15-03-2019'
    }, {
      id: '6', 
      isImp: false,
      isDone: false,
      title: 'Android assignment',
      desc: 'A todo app in react submit before 15-03-2019'
    }, ]
  };

  function getTodaysDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm + '-' + dd + '-' + yyyy;
    return today;
  }


function todoReducers(state = initState, action) {

    switch (action.type) {
        
        case AddTask:
        {
            let mTasks = state.tasks;
            return {
                ...state,
                tasks: mTasks.push({
                    id: action.data.id, 
                    isImp: false,
                    isDone: false,
                    title: action.data.title,
                    desc: action.data.desc
                  })
            }
        }

        case DeleteTask:
        {
            let mTasks = state.tasks;
            return {
                ...state,
                tasks: mTasks.map( task => task.id !== action.data.id )
            }
        }
            
        case EditTask:
            {
                let mTasks = state.tasks;
                return {
                    ...state,
                    tasks: mTasks.map( task => (task) => {
                        if(task.id === action.data.id) {
                            return {
                                id: task.id,
                                title: action.data.title,
                                desc: action.data.desc
                            }
                        } else {
                            return task;
                        }
                    } )
                }
            }
    
        default:
            return state;
    }
}

export default todoReducers;