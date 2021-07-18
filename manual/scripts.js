(function () {
    loadTable();
    let stop = document.getElementById("stop");
    stop.addEventListener("click", () => {
        stop.style.backgroundColor = "grey";
        setTimeout(() => {  stop.style.backgroundColor = "white"; }, 2000);
        for (var i = 0; i < 8; i++) {
            let url='http://98.167.209.219:8080/cm?pw=a6d82bced638de3def1e9bbb4983225c&sid=' + i + '&en=0';
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
    
                });
        }
        
    });
}())

function loadTable () { 
    let table = document.getElementById("manualtable")
    for (var i = 1; i <= 8; i++) {
        let row = table.insertRow();

        let manualtime = row.insertCell(0);
        var editCell = document.createElement("div");
        editCell.setAttribute("contenteditable", "");
        editCell.setAttribute("id", "edit" + (i - 1));
        editCell.innerHTML = "00:00"
        manualtime.appendChild(editCell);

        let manualrun = row.insertCell(1);
        var manualButton = document.createElement("button");
        manualButton.setAttribute("id", "manual" + (i - 1));
        manualButton.innerHTML = "X";
        this.manualListener = function(event) {
            this.style.backgroundColor = "grey";
            setTimeout(() => {  this.style.backgroundColor = "white"; }, 2000);
            var editValue = document.getElementById("edit" + this.id.slice(-1));
            let minsec = editValue.innerHTML.split(":");
            let time = parseInt(minsec[0]) * 60 + parseInt(minsec[1])
            console.log(time);
            let url='http://98.167.209.219:8080/cm?pw=a6d82bced638de3def1e9bbb4983225c&sid=' + this.id.slice(-1) + '&en=1&t=' + time;
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    console.log(result)
                });
        }
        manualButton.addEventListener("click", this.manualListener, false);
        manualrun.appendChild(manualButton);
    }
    

}