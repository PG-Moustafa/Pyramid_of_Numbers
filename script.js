
// # Write a Python program that prompts the user for a number, x, 
// # and displays a pyramid of numbers. Each row in the pyramid 
// # should contain increasing numbers, starting from 1 up to x. Example: 

// # Enter x: 5
// # 1
// # 1 2
// # 1 2 3
// # 1 2 3 4
// # 1 2 3 4 5

// # def display():
// #     x = int(input("Enter x: "))
// #     for i in range(x+1):
// #         for j in range(i):
// #             print(j+1, end=" ")
// #         print()

// # display()

let display = function() {
    let x = prompt("Enter x: ")
    for (let i = 1; i <= x; i++) {
        let output = ""
        for (let j = 1; j <= i; j++) {
            output += j + " "
        }
        console.log(output)
    }
}

display()
