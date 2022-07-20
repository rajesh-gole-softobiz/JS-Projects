setInterval(myClock, 1000);

function myClock(){
    let t = new Date();
    let h=t.getHours();
    let m=t.getMinutes();
    let s=t.getSeconds();
    document.getElementById('clk').innerHTML = h+":"+m+":"+s;
}