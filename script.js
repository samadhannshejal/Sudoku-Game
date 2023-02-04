var board=[
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"    
]

var solution=[
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]
const play=document.querySelector("img");
const popup=document.getElementById("popup");

// console.log(play);
play.addEventListener("click",()=>{
    var audio = new Audio('success.wav');
     audio.play();
    
    
    const main=document.getElementById("main");
    main.style.display="none"
  popup.style.display="block"
})
let selectNumber=null;

let win=1;
function main(){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            
             let div=document.createElement("div");
            
             div.id=i.toString()+","+j.toString();
            //  console.log(div);
             div.addEventListener("click",clickDigit)
             if(i==2||i==5){
                div.classList.add("horz");
             }
             if(j==2||j==5){
                div.classList.add("vert");
             }
             if(board[i][j]!="-"){
                div.innerHTML=board[i][j];
                div.classList.add("teal")
             }
           
             
             document.querySelector("#grid").append(div) 
        }
    }
    for(let i=1;i<=9;i++){
        let div=document.createElement("div");
        div.innerHTML=i;
        div.style.cursor="pointer";
        div.addEventListener("click",(event)=>{
            // console.log(event);
            var audio = new Audio('success.wav');
               audio.play();
         if(selectNumber!==null){
            // selectNumber.classList=null
            selectNumber.classList.remove("grey");
         }
         selectNumber=event.target;
   
         div.classList.add("grey");
        });
        document.querySelector("#number").append(div)
    }
}
main();
function clickDigit(){
    const audio = new Audio('success.wav');
        audio.play();
    // console.log(this);
    if(selectNumber==null||this.innerHTML!==""){
      
        return;
    }
   
    const temp=this.id.split(",");
    const i=Number(temp[0]);
    const j=Number(temp[1]);
    
    if(selectNumber.innerHTML===solution[i][j]){
        const audio = new Audio('success.wav');
        audio.play();
        this.innerHTML=selectNumber.innerHTML;
        document.getElementById("win").innerHTML=win++;
        this.style.background="yellow"
        if(win==47){
            document.getElementById("winMessage").innerHTML="You win"
        }
    }
   
}