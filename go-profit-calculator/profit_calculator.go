package main

import "fmt"

func main() {
    var revenue int
    var expenses int
    var taxRate float64

    fmt.Println("Revenue: ")
    fmt.Scan(&revenue)

    fmt.Println("Expenses: ")
    fmt.Scan(&expenses)

    fmt.Print("Tax Rate: ")
    fmt.Scan(&taxRate)

    ebt := revenue - expenses
    var profit float64 = float64(ebt) * (1 - taxRate/100)
    var ratio float64 = float64(ebt) / profit

    fmt.Printf("EBT: %d\n", ebt)
    fmt.Printf("Profit: %.2f\n", profit)
    fmt.Printf("Ratio: %.2f\n", ratio)
}
