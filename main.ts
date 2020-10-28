OLED.init(128, 64)
basic.forever(function () {
    OLED.writeNum(input.temperature())
    OLED.writeStringNewLine("   ")
    if (input.temperature() < 21) {
        tinkercademy.LED(DigitalPin.P0, OnOff.On)
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        tinkercademy.LED(DigitalPin.P2, OnOff.On)
        basic.pause(500)
        tinkercademy.LED(DigitalPin.P0, OnOff.Off)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
        tinkercademy.LED(DigitalPin.P2, OnOff.Off)
        basic.pause(500)
    } else {
        tinkercademy.LED(DigitalPin.P0, OnOff.Off)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
        tinkercademy.LED(DigitalPin.P2, OnOff.Off)
    }
})
