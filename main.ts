let light2 = 0
basic.forever(function () {
    light2 = Math.round(input.lightLevel() / 10)
})
basic.forever(function () {
    if (light2 == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (light2 == 1) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (light2 == 2) {
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (light2 == 3) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    }
    if (light2 == 4) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
    }
    if (light2 == 5) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (light2 == 6) {
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (light2 == 7) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (light2 == 8) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # . . . .
            # . . . .
            `)
    }
    if (light2 == 9) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # . . . .
            `)
    }
    if (light2 == 10) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (light2 == 11) {
        basic.showLeds(`
            # # # . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (light2 == 12) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (light2 == 13) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            `)
    }
    if (light2 == 14) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            `)
    }
    if (light2 == 15) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (light2 == 16) {
        basic.showLeds(`
            # # # # .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (light2 == 17) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (light2 == 18) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # . .
            # # # . .
            `)
    }
    if (light2 == 19) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # . .
            `)
    }
    if (light2 == 20) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (light2 == 21) {
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (light2 == 22) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (light2 == 23) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # # .
            `)
    }
    if (light2 == 24) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
    }
    if (light2 == 25) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
