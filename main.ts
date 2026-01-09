input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    counter += 1
    basic.showNumber(counter)
})
let strip: neopixel.Strip = null
let counter = 0
counter = 0
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.forever(function () {
	
})
