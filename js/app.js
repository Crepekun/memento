

document.addEventListener('DOMContentLoaded', () => {
    
    
    const buttons = document.querySelectorAll('.btn'); 

    const hint0 = [,運命・導きガチャからの赤玉の数,];
    const hint1 = [,運命・導きガチャからの赤玉の数,];
    
    const quizList = [
        
        {   id: 0, 
            answer: "ふれいしあ",
            src:"https://docs.google.com/forms/d/e/1FAIpQLSf2FVI6X03VW8DfxAAYUGgmcLyagyNWLFgeLamREgTG6EKngg/viewform?embedded=true",
            hint:hint0,
            img:"./assets/nazo1.jpg"
        },{ id: 1, 
            answer: "かろる",
            src:"https://docs.google.com/forms/d/e/1FAIpQLSetdY0-WXWiU935T7sa9570tHNfIKyZ98973v-R2pjxpDDduQ/viewform?embedded=true",
            hint:hint1,
            img:"./assets/nazo2.jpg"
        },{ id: 2, 
            answer: "ろざりー",
            src:"https://docs.google.com/forms/d/e/1FAIpQLSciB9li1luoz6ywYT1LySv9wmjY4vMp5L_VpcoiLJjH9WOksQ/viewform?embedded=true",
            hint:hint2,
            img:"./assets/nazo3.jpg"
        },{ id: 3, 
            answer: "ぷりしら",
            src:"https://docs.google.com/forms/d/e/1FAIpQLSdJ9HRjR06zX0203V6T59sv1sgKGIILlZcfraURPs6BZOMFew/viewform?embedded=true",
            hint:hint3,
            img:"./assets/nazo4.jpg"
        },{ id: 4, 
            answer: "べる",
            src:"https://docs.google.com/forms/d/e/1FAIpQLSdziy5_jqLEqeC9jrxsKZBS5yJuNgjGXM4Bdy-W0HpWKmQigA/viewform?embedded=true",
            hint:hint4,
            img:"./assets/nazo5.jpg"
        },{ id: 5, 
            answer: "あいびー",
            src:"https://docs.google.com/forms/d/e/1FAIpQLScsPmYyllk0dZfRaTYK4-aIjUlR82Uic-L2EWpTBZekcr_uWg/viewform?embedded=true",
            hint:hint5,
            img:"./assets/nazo6.jpg"
        },
    ];


    let currentIndex = 0;

    buttons.forEach((button,index) => {
        button.addEventListener('click', (e) => { 
            console.log('OK');
            console.log(index);

                    hintBox.innerHTML = ""
                    hintText.innerHTML = ""

                    const img = document.getElementById('quizImg');
                    img.src = quizList[index]['img'];

    for(i = 1;i <= quizList[index].hint.length;++i){
        const hintBox = document.getElementById('hintBox');
        const hintBtn = document.createElement('button')
        hintBtn.innerHTML = "ヒント" + i;
        hintBox.appendChild(hintBtn);
    }
        const answerContainer = document.getElementById('answerContainer');
        const answerContainer2 = document.getElementById('answerContainer2');
answerContainer.innerHTML = "";
answerContainer2.innerHTML = "";

answerContainer.href = quizList[index]['src'];

var answerButton1 = document.createElement("button");
answerButton1.textContent = "回答する(googleForm)";
answerContainer.appendChild(answerButton1);

var answerButton2 = document.createElement("button");
answerButton2.textContent = "答えを見る(準備中)";
answerContainer2.appendChild(answerButton2);



        const hintButtons = hintBox.querySelectorAll('button')
        hintButtons.forEach((buttonHint,no) => {
            buttonHint.addEventListener('click',(e) => {
                console.log("OK");
                console.log(no);
                const hintText = document.getElementById('hintText');
                hintText.textContent = quizList[index].hint[no];
            });
        });

        

        })});
        answerContainer2.addEventListener('click',  () => {
            alert("準備中です");
        })
    });
