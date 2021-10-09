var billAmt = document.querySelector("#bill-amt");
var cash = document.querySelector("#cash-paid");
var button = document.querySelector("#btn");
var outputtext = document.querySelector(".optext")

var one = document.querySelector("#one")
var ocnt = 0
var five = document.querySelector("#five")
var fcnt = 0
var ten = document.querySelector("#ten")
var tcnt = 0;
var tw = document.querySelector("#tw")
var twcnt = 0;
var h = document.querySelector("#hun")
var hcnt = 0;
var fh = document.querySelector("#fh")
var fhcnt = 0;
var tth = document.querySelector("#tth")
var tthcnt = 0;


// console.log("hello");

function handler() {

    var val = parseInt(cash.value) - parseInt(billAmt.value)
    outputtext.innerText = "you will get " + val;

    while (val > 0) {
        if (val >= 2000) {
            val = val - 2000;
            tthcnt += 1;
            console.log(val)
        }
        else if (val >= 500) {
            val = val - 500;
            fhcnt += 1;
            console.log(val)
        }
        else if (val >= 100) {
            val = val - 100;
            hcnt += 1;
        }
        else if (val >= 20) {
            val = val - 20;
            twcnt += 1;
        }
        else if (val >= 10) {
            val = val - 10;
            tcnt += 1;
        }

        else if (val >= 5) {
            val = val - 5;
            fcnt += 1;
        }
        else {
            val = val - 1
            ocnt += 1
        }

    }
    // console.log(tcnt)
    // console.log(twcnt)
    // console.log(hcnt)
    // console.log(fhcnt)
    // console.log(tthcnt)
    one.innerText = ocnt;
    five.innerText = fcnt;
    h.innerText = hcnt;
    tw.innerText = twcnt;
    ten.innerText = tcnt;
    fh.innerText = fhcnt;
    tth.innerText = tthcnt;

}

button.addEventListener("click", handler)



// outputtext.innerText = val;