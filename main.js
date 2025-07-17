console.log('Hello World!');
 
let add =document.getElementById("btn0");
let cet =document.getElementById("center");
let put =document.getElementById("put");
let btnChange =document.getElementById("btn-change");
let con1 =document.getElementById("con1");
let con2 =document.getElementById("con2");
let btn =document.getElementById("btn");
let s =document.getElementById("sound1");
let s1 =document.getElementById("sound2");
let h =document.createElement("h1");
h.classList.add("h");
h.textContent="There is nothing here";

add.addEventListener("click",()=>{
    if (put.value !== "") {
    let d =document.createElement("div");
    let p =document.createElement("p");
    let bt1 =document.createElement("button");
    let bt2 =document.createElement("button");
    let i1 =document.createElement("i");
    let i2 =document.createElement("i");
    let lineGreen = document.createElement("div");
    
    p.style.display="flex";
    p.style.alignItems="center";
    i1.classList.add("fa-solid","fa-check");
    i2.classList.add("fa-solid","fa-xmark");
    bt1.classList.add("btn1");
    bt2.classList.add("btn2");
    d.appendChild(p);
    d.appendChild(bt1);
    d.appendChild(bt2);
    bt1.appendChild(i2);
    bt2.appendChild(i1)
    p.textContent=put.value;
    put.value="";
    cet.appendChild(d);
    d.style.animation="spawn 1s 1 normal both";
        
        
    bt2.onclick=()=>{
        p.appendChild(lineGreen);
        lineGreen.style.animation="width1 .9s 1 normal both";
    }
    bt1.onclick=()=>{
        
        d.style.animation="dispawn .5s 1 normal both";
        setTimeout(()=>{
            d.remove();
        },500);
        
    }
    }
    else {
        put.style.transform="translateX(10px)";
        put.style.border="2px solid red";
        put.style.color="red";
        setTimeout(()=>{
            put.style.transform="translateX(-10px)";
        },200
        );
        setTimeout(()=>{
            put.style.transform="translateX(10px)";
        },400
        );
        setTimeout(()=>{
            put.style.transform="translateX(-10px)";
        },600
        );
        setTimeout(()=>{
            put.style.transform="translateX(10px)";
        },800
        );
        setTimeout(()=>{
            put.style.transform="translateX(0px)";
            put.style.border="2px solid #000";
            put.style.color="#000";
        },1000
        );
    }
    
    if (cet.children.length === 0) {
    cet.appendChild(h);
}
else if (cet.children.length === 2){
    h.remove();
}
});

btnChange.onclick=()=>{
    con1.style.transform="rotateY(90deg)";
    con2.style.transform="rotateY(90deg)";
    setTimeout(()=>{
        s.play();
        con1.style.zIndex = "5";
        con2.style.zIndex = "2";
        setTimeout(()=>{
            con1.style.transform = "rotateY(0deg)";
        con2.style.transform = "rotateY(0deg)";
        },500);
    },550);
    
    
}
btn.onclick=()=>{
    con1.style.transform="rotateY(90deg)";
    con2.style.transform="rotateY(90deg)";
    setTimeout(()=>{
        con1.style.zIndex = "2";
        con2.style.zIndex = "5";
        setTimeout(()=>{
            s.play();
            con1.style.transform = "rotateY(0deg)";
        con2.style.transform = "rotateY(0deg)";
        },500);
    },550);
    
    
}




//<i class="fa-solid fa-check"></i>
//<i class="fa-solid fa-xmark"></i>
//<i class="fa-solid fa-question"></i>
//There is nothing here