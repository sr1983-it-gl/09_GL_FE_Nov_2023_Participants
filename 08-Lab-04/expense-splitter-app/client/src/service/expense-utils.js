
const getAllPayeeNames = (expenseItems) => {
  
  const uniquePayeeNames = [];

  expenseItems.forEach((expenseItem) => {

    let payeeName = expenseItem.payeeName;
    if (!uniquePayeeNames.includes(payeeName)) {

      uniquePayeeNames.push(payeeName);
    }
  })

  return uniquePayeeNames;
}
export { getAllPayeeNames }
