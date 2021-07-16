import React from 'react';
// import {useState} from 'react';
import './App.css';

// import Ejemplo from './containers/Ejemplo/Ejemplo';
// const App = () => {
//   return <Ejemplo />
// }

// import HTTPRequest from './containers/HttpRequest/HTTRequest';
// import Counter from './containers/Counter/Counter';
// import CustomHook from './containers/CustomHook/CustomHook';
// import Forms from './containers/Forms/Forms';
// import ReduxUdemy from './containers/ReduxUdemy/ReduxUdemy';
// import ReduxDeeperUdemy from './containers/ReduxDeeperUdemy/ReduxDeeperUdemy';
// import Routers from './containers/Routers/Routers';
// import RouterDemo from './containers/RouterDemo/RouterDemo';
// import UdemyAuth from './containers/UdemyAuth/UdemyAuth';
import ReplacerReduxforHooks from './containers/replacerReduxforHooks/ReplacerReduxforHooks';
const App = () => {
  return <div className="App">
    {/* <HTTPRequest /> */}
    {/* <Counter /> */}
    {/* <CustomHook /> */}
    {/* <Forms /> */}
    {/* <ReduxUdemy /> */}
    {/* <ReduxDeeperUdemy /> */}
    {/* <Routers /> */}
    {/* <RouterDemo /> */}
    {/* <UdemyAuth /> */}
    <ReplacerReduxforHooks />
  </div>
}

// import LoginContainer from './containers/Login/LoginContainer';
// import {AuthContextProvider} from './context/auth-context';

// const App = () =>{
//   return <AuthContextProvider>
//     <LoginContainer />
//   </AuthContextProvider>
// }

// import AddUser from './component/Users/AddUser';
// import UsersList from './component/Users/UsersList';

// const App = () =>{

//   const [users, setUsers] = useState([])

//   const addUserHandler = user =>{
//     const newUsers = [...users];
//     // console.log(users);
//     newUsers.unshift(user);
//     setUsers(newUsers)
//   }

//   return (
//     <>
//       <AddUser onAddUser={addUserHandler}/>
//       <UsersList users={users}/>
//     </>
//   )
// }

// import CourseGoalList from './component/CourseGoals/CourseGoalList/CourseGoalList';
// import CourseInput from './component/CourseGoals/CourseInput/CourseInput';
// import './App.css';

// const App = () => {
//   const [courseGoals, setCourseGoals] = useState([
//     { text: 'Do all exercises!', id: 'g1' },
//     { text: 'Finish the course!', id: 'g2' }
//   ]);

//   const addGoalHandler = enteredText => {
//     setCourseGoals(prevGoals => {
//       const updatedGoals = [...prevGoals];
//       updatedGoals.unshift({ text: enteredText, id: 'goal1' });
//       return updatedGoals;
//     });
//   };

//   const deleteItemHandler = goalId => {

//     setCourseGoals(prevGoals => {
//       const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
//       return updatedGoals;
//     });
//   };

//   let content = (
//     <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
//   );

//   if (courseGoals.length > 0) {
//     content = (
//       <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
//     );
//   }

//   return (
//     <div>
//       <section id="goal-form">
//         <CourseInput onAddGoal={addGoalHandler} />
//       </section>
//       <section id="goals">
//         {content}
//       </section>
//     </div>
//   );
// };

// import CustomContainer from './/containers/CustomContainer/CustomContainer';
// import Expenses from './containers/Expenses/Expenses';
// import NewExpense from './component/NewExpense/NewExpense';


// const App = () => {
//   const [expenses, setExpense] = useState([
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ]);

//   const addExpenseHandler = (newExpense) =>{

//     setExpense(prevState => {
//       console.log("App",newExpense, prevState);

//       return [newExpense, ...prevState]
//     })
//   }



//   return (
//     <div className="App">
//   {/*     <h1>Pacticing2</h1> */}
//       {false && <CustomContainer />}
//       <NewExpense onAddExpense={addExpenseHandler}/>
//       <Expenses items={expenses}/>
//     </div>
//   );
// }

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */