while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) < 45) {
        light.setAll(light.rgb(255, 10, 255))
    } else {
        light.clear()
    }
    
}
