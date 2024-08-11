import { useEffect } from "react"

import {getAllExpenseItems} from "../service/expense"
import { ExpenseItemsView } from "./ExpenseItemsView"

import {Container} from "react-bootstrap"

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
    <Container>

    <h2>Expense Manager Application</h2>

    <ExpenseItemsView></ExpenseItemsView>

    </Container>
  )  

}

export {ExpenseSplitterApp}