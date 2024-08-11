import { useEffect } from "react"

import {getAllExpenseItems} from "../service/expense"
import { ExpenseItemsView } from "./ExpenseItemsView"

import {Container} from "react-bootstrap"

import { useState } from "react"
import { NewExpenseItem } from "./NewExpenseItem"

const ExpenseSplitterApp = () => {

  // Expense-Items
  // useEffect

  const [expenseItems, setExpenseItems] = useState([])

  useEffect( () => {

    const getAllExpenseItemsInvoker = async () => {

      const response = await getAllExpenseItems()
      console.log(`Expense Items -> ${JSON.stringify(response)}`)
  
      setExpenseItems(response)

    }

    getAllExpenseItemsInvoker()

    // Add the logic
    // Call the service layer method
    // Print the result in the console    
  }, [])

  return (
    <Container>

    <h2>Expense Manager Application</h2>

    <NewExpenseItem></NewExpenseItem>

    <ExpenseItemsView expenseItems={expenseItems}></ExpenseItemsView>

    </Container>
  )  

}

export {ExpenseSplitterApp}