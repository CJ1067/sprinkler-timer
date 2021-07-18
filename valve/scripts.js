(function () {
    let mask = document.getElementById("mask")
    mask.setAttribute("visibility", "hidden")
    loadTable(0);
    let aButton = document.getElementById("a");
    let bButton = document.getElementById("b");
    let cButton = document.getElementById("c");
    let saveButton = document.getElementById("save");
    aButton.addEventListener("click", () => {
        aButton.style.backgroundColor = "grey";
        bButton.style.backgroundColor = "white";
        cButton.style.backgroundColor = "white";
        loadTable(0);
    });
    bButton.addEventListener("click", () => {
        bButton.style.backgroundColor = "grey";
        aButton.style.backgroundColor = "white";
        cButton.style.backgroundColor = "white";
        loadTable(1);
    });
    cButton.addEventListener("click", () => {
        cButton.style.backgroundColor = "grey";
        aButton.style.backgroundColor = "white";
        bButton.style.backgroundColor = "white";
        loadTable(2);
    });
    saveButton.addEventListener("click", () => {
       
        program = 0;
        if (bButton.style.backgroundColor === "grey") {
            program = 1;
        } else if (cButton.style.backgroundColor === "grey") {
            program = 2;
        }

        const url='http://98.167.209.219:8080/jp?pw=a6d82bced638de3def1e9bbb4983225c';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                data = result.pd[program]
                let table = document.getElementById("valvetable")
                for (var i = 1, row; row = table.rows[i]; i++) {
                    let minsec = row.cells[1].childNodes[0].innerHTML.split(":");
                    data[4][i - 1] = parseInt(minsec[0]) * 60 + parseInt(minsec[1])
                }

                var rowCount = table.rows.length;
                for (var i = 1; i < rowCount; i++) {
                    table.deleteRow(1);
                }
                let mask = document.getElementById("mask")
                mask.innerHTML = "Saving..."
                mask.style.visibility = "visible"

                
                var saveURL = 'http://98.167.209.219:8080/cp?pw=a6d82bced638de3def1e9bbb4983225c&pid=' + program + '&v=[';
                saveURL += data[0] + "," + data[1] + "," + data[2] + ","
                saveURL += "[" + data[3] + "]," + "[" + data[4] + "]]" 
                console.log(saveURL)
                fetch(saveURL)
                        .then((response) => {
                            return response.json();
                        })
                        .then((result) => {
                            loadTable(program, false)
                        });
            });
        });
}())

function loadTable (program, save = true) {
    if (save) {
        let table = document.getElementById("valvetable")
        var rowCount = table.rows.length;
        for (var i = 1; i < rowCount; i++) {
            table.deleteRow(1);
        }

        let mask = document.getElementById("mask")
        mask.innerHTML = "Loading..."
        mask.style.visibility = "visible"
    }
    
    const url='http://98.167.209.219:8080/jp?pw=a6d82bced638de3def1e9bbb4983225c';

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            durs = result.pd[program][4]
            let table = document.getElementById("valvetable")
            let mask = document.getElementById("mask")
            mask.style.visibility = "hidden"

            for (var i = 1; i <= 8; i++) {
                let row = table.insertRow();

                let valve = row.insertCell(0);
                valve.innerHTML = i

                let runtime = row.insertCell(1);
                var editTime = document.createElement("div");
                editTime.setAttribute("contenteditable", "");
                let time = durs[i - 1]
                editTime.innerHTML = Math.floor(time/60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + (time % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
                runtime.appendChild(editTime)
            }

        });
    

}
