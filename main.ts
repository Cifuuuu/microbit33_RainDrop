let newX = 0
let cords: number[][] = []
music.play(music.createSoundExpression(WaveShape.Sine, 200, 600, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
basic.forever(function () {
    music.setVolume(80)
    for (let x = 0; x <= 4; x++) {
        if (Math.randomRange(0, 9) >= 3) {
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
            newX = Math.randomRange(0, 4)
            cords.push([newX, 0])
        }
        basic.pause(50)
    }
    basic.pause(30)
})
