(function () {
    let aRun = document.getElementById("arun");
    let bRun = document.getElementById("brun");
    let cRun = document.getElementById("crun");
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
    aRun.addEventListener("click", () => {
        aRun.style.backgroundColor = "grey";
        setTimeout(() => {  aRun.style.backgroundColor = "white"; }, 2000);
        let url='http://98.167.209.219:8080/mp?pw=a6d82bced638de3def1e9bbb4983225c&pid=0';
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((result) => {

            });
    });
    bRun.addEventListener("click", () => {
        bRun.style.backgroundColor = "grey";
        setTimeout(() => {  bRun.style.backgroundColor = "white"; }, 2000);
        let url='http://98.167.209.219:8080/mp?pw=a6d82bced638de3def1e9bbb4983225c&pid=0';
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                
            });
    });
    cRun.addEventListener("click", () => {
        cRun.style.backgroundColor = "grey";
        setTimeout(() => {  cRun.style.backgroundColor = "white"; }, 2000);
        let url='http://98.167.209.219:8080/mp?pw=a6d82bced638de3def1e9bbb4983225c&pid=0';
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                
            });
    });
    
}())
