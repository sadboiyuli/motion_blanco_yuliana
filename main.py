while True:
    print (input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) < 45:
        light.set_all(light.rgb(255,10,255))
    else:
        light.clear()
