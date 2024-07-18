package main

import (
	"fmt"
)

//main function
func main() {
	var accountBalance = 1000.0 

	fmt.Println("Welcome to bank")
	fmt.Println("What do you want to do?")
	fmt.Println("1. Check balance")
	fmt.Println("2. Deposit money")
	fmt.Println("3. Withdraw money")
	fmt.Println("4. Exit")

	var choice int 
	fmt.Print("Enter your choice: ")
	fmt.Scan(&choice)

	if choice == 1 {
		fmt.Println("Your balance is ", accountBalance)
	} else if choice == 2 {
		fmt.Println("Your deposit: ")
		var depositAmount float64
		fmt.Scan(&depositAmount)
		accountBalance += depositAmount
		fmt.Println("Balance updated! Your NEW balance is ", accountBalance)

		if(depositAmount < 0){
			fmt.Println("Invalid amount")
			return
		}
	} else if choice == 3 {
		fmt.Println("Your withdrawal: ")
		var withdrawalAmount float64
		fmt.Scan(&withdrawalAmount)
		if(withdrawalAmount < 0){
			fmt.Println("Invalid amount")
			return
		}
		if withdrawalAmount > accountBalance {
			fmt.Println("Insufficient balance")
			return
		} else {
			accountBalance -= withdrawalAmount
			fmt.Println("Balance updated! Your NEW balance is ", accountBalance)
		}
	} else if choice == 4 {
		fmt.Println("Thank you for using our service")
	} else {
		fmt.Println("Invalid choice")
	}



	fmt.Println("Your choice:", choice)

}