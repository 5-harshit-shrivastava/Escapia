let arr = ["Kota",
 "Jodhpur",
 "Munnar", 
 "Jaipur", 
 "Udaipur", 
 "Ooty"];

const box = document.querySelector(".sugg");
const inp = document.querySelector("#ipb");

inp.onkeyup = function () {
    let result = [];
    let input = inp.value;

    if (input.length>=1) {
        for(let i=0;i<arr.length;i++){
            if(arr[i].toLowerCase().includes(input.toLowerCase())){
                result.push(arr[i]);
            }
        }
    }
    display(result);
};
 
function display(result){
    const content = [];
    for (let i = 0; i < result.length; i++) {
        content.push("<li>" + result[i] + "</li>");
    }

    box.innerHTML="<ul>"+content+"</ul>";
}
