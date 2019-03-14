import {AddTask, DeleteTask, EditTask} from '../actions/todoActions';

let initState = {
    search: '',
    title: 'My Day',
    date: this.getTodaysDate(),
    tasks: [ {
      id: '1',
      isImp: true,
      isDone: false,
      title: 'React assignment',
      desc: 'A todo app in react submit before 15-03-2019'
    }, {
      id: '2', 
      isImp: false,
      isDone: true,
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

function todoReducers(state = initState, action) {

    switch (action.type) {
        
        case AddTask:
        {
            let mTasks = state.tasks;
            return {
                ...state,
                tasks: mTasks.concate({
                    id: Math.random(), 
                    isImp: false,
                    isDone: false,
                    title: action.data.title,
                    desc: action.data.desc
                  })
            }
        }

        case AddTask:

            break;
        case AddTask:
            
            break;
    
        default:
            break;
    }
}