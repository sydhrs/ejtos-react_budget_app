import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [value, setValue] = useState(budget)

    const spentSoFar = expenses.reduce((total, curr) => total + curr.cost, 0)


    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
            <input
                required='required'
                type='number'
                id='cost'
                placeholder='Add Budget'
                value={value}
                onChange={(event) => {

                    if(event.target.value > 20000)
                        alert('Budget cannot exceed value 20000')
                     else if(value < spentSoFar)
                         alert('Budget cannot be less than spent amount')
                    else setValue(event.target.value)
                }}

                style={{ marginLeft: '1rem', size: 10 }}
            />
            </span>

        </div>
    );
};
export default Budget;
