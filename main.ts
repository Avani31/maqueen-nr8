basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 22)
    basic.pause(5500)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 22)
    basic.pause(5500)
    maqueen.motorStop(maqueen.Motors.All)
})
