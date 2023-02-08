function $focus(){
    document.getElementById("firstinp").focus()
}
function inpnum(self,num){
    sum = self.value
    x = document.querySelectorAll(".form-number>input")
    document.getElementById("number").innerText = x[0].value + " " + x[1].value + " " + x[2].value + " " + x[3].value 
    if((sum.length)>4){
        alert("adam basssssssh......")
    }else if(sum.length==4 && num!=4){
        self.nextElementSibling.focus()
    }else if((sum.length)=="" && num!=1){
        self.previousElementSibling.focus()
    }else if(num==4 && sum.length==4){
        document.getElementById("cardnamee").focus()
    }
}
function $cardname(self){
    document.getElementById("cardname").innerHTML = "Name: " + self.value
}
function $expire(self){
    document.getElementById("expire").innerText = "Expire: " + self.value
}
document.getElementById("logo").addEventListener("click" , function(){
    document.getElementsByClassName("card")[0].classList.toggle("changecolor")
})
function $cvv2(self){
    document.querySelector(".cvv2inp>h2").innerText = "CVV2: " + self.value
}