var questions = ['1 + 4 = ?', '1 + 7 = ?', '4 - 2 = ?', '8 - 5 = ?']
var count = 0

function myFunction(){
    var person = prompt("Please Enter Your Name!", "Harry Potter")
    if (person != null && person != " ")
    {
        document.getElementById("demo").innerHTML = "Hello " + person+ "!" + "We shall start the quiz as soon as you press the Start Quiz!";
        document.getElementById("star").style.display = "block";
    }
}

function aFunc(){
    document.getElementById("ques").innerHTML = questions[0]
    count = 0
    document.getElementById("demo").innerHTML = " "
    document.getElementById("skr").innerHTML = " "
    document.getElementById("hela").style.display = "none";
}

function bfunc(i){
    var c = i + 1
    document.getElementById("ques").innerHTML = questions[c]
    ansFunc()
}

function Next(){
    document.getElementById("result").innerHTML = " "
    var c = questions.length

    for (var i=0; i<c; i++){
        if (document.getElementById("ques").innerHTML === questions[i])
        {
            bfunc(i)
            break;
        }
    }
}


function score(){
    document.getElementById("skr").innerHTML = "Your score is: "+ count +"/"+ questions.length
}

function ansFunc(){
    if (document.getElementById("ques").innerHTML === '1 + 4 = ?')
    {
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6"
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML = "5"
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "blue"
            document.getElementById("result").innerHTML = "Your Answer is Right!"
            count++
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt3 = document.createElement("button")
        opt3.innerHTML = "8"
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt4 = document.createElement("button")
        opt4.innerHTML = "10"
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
    }
    else if (document.getElementById("ques").innerHTML === '1 + 7 = ?')
    {
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6"
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML = "9"
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            count++
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt3 = document.createElement("button")
        opt3.innerHTML = "8"
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "blue"
            document.getElementById("result").innerHTML = "Your Answer is Right!"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt4 = document.createElement("button")
        opt4.innerHTML = "10"
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
    }

    else if (document.getElementById("ques").innerHTML === '4 - 2 = ?')
    {
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6"
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML = "2"
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "blue"
            document.getElementById("result").innerHTML = "Your Answer is Right!"
            count++
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt3 = document.createElement("button")
        opt3.innerHTML = "8"
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt4 = document.createElement("button")
        opt4.innerHTML = "1"
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
    }

    else if (document.getElementById("ques").innerHTML === '8 - 5 = ?')
    {
        var opt1 = document.createElement("button")
        opt1.innerHTML = "12"
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML = "5"
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            count++
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt3 = document.createElement("button")
        opt3.innerHTML = "8"
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
        var opt4 = document.createElement("button")
        opt4.innerHTML = "3"
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "blue"
            document.getElementById("result").innerHTML = "Your Answer is Right!"
            setTimeout(Next, 1000);
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            
        }
    }
    else
    {
        document.getElementById("ques").innerHTML = " "
        document.getElementById("result").innerHTML = "Quiz ends Here!"
        score()
    }
}