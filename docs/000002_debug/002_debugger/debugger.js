function calculateF(celcius) {
    let fahrenheit=  celcius * 9 / 5 + 32;
    return fahrenheit
}


document.getElementById("calculateDegree").onclick = () => {
    let celciusNumber = document.getElementById("celcius").value;
    let fahrenheitNumber = calculateF(celciusNumber)
    document.getElementById("digree").innerHTML = "摂氏 " + celciusNumber + "度は、華氏" + fahrenheitNumber.toFixed(2) + "度です。";
}

