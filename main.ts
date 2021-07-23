//-------------------------------
// basic.forever(function () {
//     basic.showLeds(`
//         . # # # .
//         . # . . .
//         . # # # .
//         . . . # .
//         . # # # .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . # . # .
//         . # . # .
//         . # # # .
//         . # . # .
//         . # . # .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . # . # .
//         . # . # .
//         . # . # .
//         . # . # .
//         . # # # .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . # # # .
//         . . # . .
//         . . # . .
//         . . # . .
//         . . # . .
//         `)
//     basic.showLeds(`
//         . . . . .
//         . . . . .
//         . . . . .
//         . . . . .
//         . . . . .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . # . # .
//         . # . # .
//         . # . # .
//         . # . # .
//         . # # # .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . # # # .
//         . # . # .
//         . # # # .
//         . # . . .
//         . # . . .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . . . . .
//         . . . . .
//         . . . . .
//         . . . . .
//         . . . . .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . # . # .
//         . # . # .
//         . . # . .
//         . # . # .
//         . # . # .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . . # . .
//         . # . # .
//         . # # # .
//         . # . # .
//         . # . # .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . . . . .
//         . # # . .
//         . # . # .
//         . # . # .
//         . # . # .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . # # . .
//         . # . # .
//         . # . # .
//         . # . # .
//         . # # . .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . # # # .
//         . # . . .
//         . # # . .
//         . # . . .
//         . # # # .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . # # . .
//         . # . # .
//         . # # # .
//         . # # . .
//         . # . # .
//         `)
//     basic.pause(100)
//     basic.showLeds(`
//         . . . . .
//         . . . . .
//         . . . . .
//         . . . . .
//         . . . . .
//         `)
//     basic.pause(100)
// })
//-------------------------------
//Fun joke I made for my friend ^^^




//-------------------------------
// let myName = "Aidan"
// basic.showString(myName)
//-------------------------------
//Little test of showString ^^



//Voting Thing
input.onButtonPressed(Button.A, function() {
    basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
})

input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
})