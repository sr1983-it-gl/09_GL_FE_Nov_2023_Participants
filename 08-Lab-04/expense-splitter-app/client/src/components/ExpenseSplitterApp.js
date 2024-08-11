import { useEffect } from "react"

import {getAllExpenseItems} from "../service/expense"

const ExpenseSplitterApp = () => {

  // Expense-Items
  // useEffect

  useEffect( () => {

    const getAllExpenseItemsInvoker = async () => {

      const response = await getAllExpenseItems()
      console.log(`Expense Items -> ${JSON.stringify(response)}`)
  
    }

    getAllExpenseItemsInvoker()

    // Add the logic
    // Call the service layer method
    // Print the result in the console    
  }, [])

  return (
    <div>

{/* Include the ExpenseItemsView component */}
      
      ExpenseSplitter App Component
    </div>
  )  

}

export {ExpenseSplitterApp}