function cong() {
    let so1 = Number(document.getElementById("so1").value);
    let so2 = Number(document.getElementById("so2").value);
    let ketqua = so1 + so2;
    document.getElementById("result").innerHTML = "Kết quả "    + ketqua;
}
function tru() {
    let so1 = Number(document.getElementById("so1").value);
    let so2 = Number(document.getElementById("so2").value);
    let ketqua = so1 - so2;
    document.getElementById("result").innerHTML = "Kết quả" + ketqua;

}
function nhan() {
    let so1 = Number(document.getElementById("so1").value);
    let so2 = Number(document.getElementById("so2").value);
    let ketqua = so1 * so2;
    document.getElementById("result").innerHTML = "Kết quả" + ketqua;
}
function chia() {
    let so1 = Number(document.getElementById("so1").value);
    let so2 = Number(document.getElementById("so2").value);
    let ketqua = so1 / so2;
    document.getElementById("result").innerHTML = "Kết quả" + ketqua;
}