import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                           <Budget /> /* Add Budget component here */
                        }        

                        {
                           <Remaining /> /* Add Remaining component here*/
                        }        

                        {
                          <ExpenseTotal />  /* Add ExpenseTotal component here */
                        }        
                       
                        {
                            <ExpenseList /> /* Add ExpenseList component here */
                        }         

                        {
                           <ExpenseItem /> /* Add ExpenseItem component here */
                        }        

                        {
                            <AllocationForm />/* Add AllocationForm component here under */
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
