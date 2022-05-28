// /* -------------active nav bar*/
// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('nav a').forEach(link => {    
//     if(link.href.includes(`${activePage}`)){
//       link.classList.add('active');
//     }
//   });

function calculate(name){
    var dist= document.getElementById('distInput').value;
  let prices  = [
      { brand: "../static/Lime.jpg", name: "Lime", price: calculate("Lime",dist) },
      { brand: "../static/Bird.png", name: "Bird", price: calculate("Bird",dist) },
      { brand: "../static/Wind.png", name: "Wind", price: calculate("Wind",dist) },
    ];
  
  function calculate(name,dist)
    {
      if (name == "Lime")
      {
          return (5+dist*1.8*0.45);
      }
      if (name == "Bird")
      {
        return 4.5+dist*1.8*0.5;
      }
      else{
        return 1.8*0.85*dist
      }
  
    }
    function generateTableHead(table, data) {
      let thead = table.createTHead();
      let row = thead.insertRow(0);
      for (let key of data) {
        let th = document.createElement("th");
        th.id='hd';
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
    }
    
    function generateTable(table, data) {
      for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
          if(key == "brand")
          {
            let cell = row.insertCell();
            var img = document.createElement('img');
            img.src = element[key];
            img.id="pic";
            cell.appendChild(img);
          }
          else{
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
          }
        }
      }
    }
    var table = document.querySelector("table");
    let data = Object.keys(prices[0]);
    generateTableHead(table, data);
    generateTable(table, prices);
    replace();
    function replace()
    {
      var aftercompare =  document.getElementById("aftercompare");
      var compare =  document.getElementById("afterNearby");
      aftercompare.style.visibility="visible"
      compare.parentNode.replaceChild(aftercompare, compare);
    }
  
  }