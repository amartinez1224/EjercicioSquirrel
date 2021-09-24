fetch('https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json')
  .then(response => response.json())
  .then(data => {
    for(let i = 0; i < data.length; i++) {
        let obj = data[i];
        addItem (obj["squirrel"], obj["events"], i)
        
    }
  });

  function addItem (color, list, id) {
    let newTr = document.createElement("tr");
    if (color) newTr.className = "table-success";
    let newTh = document.createElement("th");
    newTh.setAttribute("scope", "row");
    let text = document.createTextNode(id);   
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
