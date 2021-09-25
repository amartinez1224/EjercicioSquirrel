let pos = 0
let neg = 0
let eventsPos = {}
let eventsNeg = {}

fetch('https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json')
  .then(response => response.json())
  .then(data => {
    for(let i = 0; i < data.length; i++) {
        let obj = data[i];
        addItemEventos (obj["squirrel"], obj["events"], i)
    }
    let id = 1
    for (ev in eventsPos){
        addItemCorrela (ev, id)
        id += 1
    }
  });

  function addItemEventos (color, list, id) {
    let newTr = document.createElement("tr");
    if (color) {
        newTr.className = "table-success" 
        pos += 1
        for (j in list){
            ev = list[j]
            if (ev in eventsPos) eventsPos[ev]+=1
            else {
                eventsPos[ev]=1
                eventsNeg[ev]=0
            }
        }
    }
    else {
        neg += 1
        for (j in list){
            ev = list[j]
            if (ev in eventsNeg) eventsNeg[ev]+=1
            else {
                eventsNeg[ev]=1
                eventsPos[ev]=0
            }
        }
    };
    let newTh = document.createElement("th");
    newTh.setAttribute("scope", "row");
    let text = document.createTextNode(id+1);   
    newTh.appendChild(text) 
    newTr.appendChild(newTh)
    let newTd = document.createElement("td");
    text = document.createTextNode(list);   
    newTd.appendChild(text) 
    newTr.appendChild(newTd) 
    document.getElementById("tableB").appendChild(newTr); 
    newTd = document.createElement("td");
    text = document.createTextNode(color);   
    newTd.appendChild(text) 
    newTr.appendChild(newTd) 
  }

  function addItemCorrela (ev, id) {
    let TP = eventsPos[ev]
    let TN = pos - eventsPos[ev]
    let FP = eventsNeg[ev]
    let FN = neg - eventsNeg[ev]
    let correla = ((TP*TN)-(FP*FN))/Math.sqrt((TP+FP)*(TP+FN)*(TN+FP)*(TN+FN))
    let newTr = document.createElement("tr");
    let newTh = document.createElement("th");
    newTh.setAttribute("scope", "row");
    let text = document.createTextNode(id); 
    newTh.appendChild(text) 
    newTr.appendChild(newTh)
    let newTd = document.createElement("td");
    text = document.createTextNode(ev);   
    newTd.appendChild(text) 
    newTr.appendChild(newTd) 
    document.getElementById("tableA").appendChild(newTr); 
    newTd = document.createElement("td");
    text = document.createTextNode(correla);   
    newTd.appendChild(text) 
    newTr.appendChild(newTd) 
  }
