basic.forever(function () {
    let cords: number[][] = []

    for (let x = 0; x < 5; x++) {
        if (Math.randomRange(0, 1) == 1) { 
            cords.push([x, Math.randomRange(0, 1)])
        }
    }
    while (cords.length > 0) {
        basic.clearScreen()
        for (let i = cords.length - 1; i >= 0; i--) {
            let drop = cords[i]

            if (drop[1] >= 0 && drop[1] <= 4) {
                led.plot(drop[0], drop[1])
            }
            drop[1]++
            if (drop[1] > 4) {
                cords.removeAt(i)
            }
        }
        if (Math.randomRange(0, 2) == 0) {  
            let newX = Math.randomRange(0, 4)
            cords.push([newX, 0])
        }

        basic.pause(300)
    }

    basic.pause(2000)  
})