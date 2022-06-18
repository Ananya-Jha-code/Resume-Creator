function addNewWEField() {
    
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here')
    let weOb = document.getElementById("we");
    let weAddButtonOb=document.getElementById('weAddButton');
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewaqField() {
    
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here')
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb=document.getElementById('aqAddButton');
    aqOb.insertBefore(newNode,aqAddButtonOb);
}

function addNewpField() {
    
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pField");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here')
    let pOb = document.getElementById("p");
    let pAddButtonOb=document.getElementById('pAddButton');
    pOb.insertBefore(newNode,pAddButtonOb);
}

function createcv(){
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById('nameT')
    nameT.innerHTML=nameField;
    document.getElementById("eT").innerHTML=document.getElementById("eField").value;
    document.getElementById("lT").innerHTML=document.getElementById("lField").value;
    document.getElementById("ghT").innerHTML=document.getElementById("ghField").value;
    document.getElementById("sT").innerHTML=document.getElementById("sField").value;
    let wes = document.getElementsByClassName('weField');
    let str1 = "";
    for(let e of wes){
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str1;

    let aqs = document.getElementsByClassName('aqField');
    let str2 = "";
    for(let a of aqs){
        str2 = str2 + `<li> ${a.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str2;

    let ps = document.getElementsByClassName('pField');
    let str3 = "";
    for(let pp of ps){
        str3 = str3 + `<li> ${pp.value} </li>`;
    }
    document.getElementById("pT").innerHTML=str3;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

function printcv(){
    window.print();
}