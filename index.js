
var btn_click = document.getElementById('click');
btn_click.addEventListener("click", () => {
    var principal = document.getElementById('e_pri').value;
    var inter = document.getElementById('i_ra').value;
    var tim = document.getElementById('t_y').value;
    var int_r = (parseFloat(principal) * parseFloat(inter) * parseInt(tim)) / 100;
    var total = parseFloat(principal) + parseFloat(int_r);
    var calc = document.getElementById('cal_re');
    var hide = document.getElementById('data');
    var res= document.getElementById('result');
    var dt=document.getElementById('data');
    console.log(principal);
    console.log(inter);
    console.log(tim);
    console.log(int_r);
    console.log("total: " + total);
    document.getElementById('e_pri').value = "";
    document.getElementById('i_ra').value = "";
    document.getElementById('t_y').value = "";
    if (total >= 0) {
        res.style.backgroundColor="burlywood";
        dt.style.backgroundColor="rgb(167, 222, 135)";
        calc.innerHTML = `Calculated Simple Interest : ${int_r.toFixed(2)}`;

        hide.innerHTML = `
    <h2>Calculation</h2><br>
    Principal (P) = ${principal} Rs<br>
    Interest Rate (R) = ${inter}%<br>
    Time (T) = ${tim} Year<br>
    Calculate Simple Interest(SI) <br> = (P*R*T)/100 <br>= 
    (${principal} * ${inter} * ${tim}) /100 = ${int_r.toFixed(2)} Rs
    <br> Total(A) : Principal + SI <br>
    Total(A) : ${total.toFixed(2)} Rs`;
    }
});
function reload() {
    var data = document.getElementById('data');
    var res= document.getElementById('result');
    var calc = document.getElementById('cal_re');
    calc.innerHTML="";
    res.style.backgroundColor="rgb(44, 42, 42)";
    data.innerHTML="";
    data.style.backgroundColor="rgb(44, 42, 42)";
    document.getElementById('e_pri').value = "";
    document.getElementById('i_ra').value = "";
    document.getElementById('t_y').value = "";
}
