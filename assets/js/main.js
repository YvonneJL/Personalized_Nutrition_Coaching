function calculate() {
    // event.preventDefault();
    let bodySize = Number(document.querySelector("#body-size").value);
    let age = Number(document.querySelector("#age").value);
    let weight = Number(document.querySelector("#weight").value);
    let activity = document.querySelector("#activity").value;

    let gender = document.querySelector("input[name=gender]:checked").value;

    let resultKcal = document.querySelector(".table-content-4");
    let resultKj = document.querySelector(".table-content-5");
    let resultTotalKcal = document.querySelector(".table-content-7");
    let resultTotalKj = document.querySelector(".table-content-8");


    console.log(gender);

    if(gender === "male") {
        // !Bei Vergleichen immer mind. 2 ist gleichs
        // !Bei nur einem ist gleich ist es nur eine Zuweisung
        resultKcal.innerText = Math.ceil(66.47 + (13.7 * weight) + (5 * bodySize) - (6.8 * age));

        resultKj.innerText = Math.ceil(resultKcal.innerText * 4.184);

        resultTotalKcal.innerText = Math.ceil(resultKcal.innerText * activity);

        resultTotalKj.innerText = Math.ceil(resultTotalKcal.innerText * 4.184)
      

    } else {
        resultKcal.innerText = Math.ceil(655.1 + (9.6 * weight) + (1.8 * bodySize) - (4.7 * age));

        resultKj.innerText = Math.ceil(resultKcal.innerText * 4.184);

        resultTotalKcal.innerText = Math.ceil(resultKcal.innerText * activity);

        resultTotalKj.innerText = Math.ceil(resultTotalKcal.innerText * 4.184)
    } 

  
}


