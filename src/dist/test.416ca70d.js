let string = `.skin * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.skin *::before,
::after {
    box-sizing: border-box;
}



.skin {
    background-color: #ffe600;
    position: relative;
    min-height:50vh;

}

.nose {
    position: absolute;
    top: 0;
    left: 0;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    width: 0px;
    height: 0px;
    border: 10px solid #000;
    border-color: #000 transparent transparent transparent;
}

.nose::before {
    content: "";
    display: block;
    width: 20px;
    height: 6px;
    margin-top: -16px;
    margin-left: -10px;
    border-radius: 20px 20px 0 0;
    background-color: #000;
}

.eye {
    position: absolute;
    left: 50%;
    top: 50px;
    margin-left: -32px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid #000;
    background-color: #2e2e2e;
}

.eye::before {
    position: absolute;
    left: 10px;
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #000;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    position: relative;
    left: 50%;
    top: 120px;
    transform: translateX(-50%);
    width: 200px;
    height: 200px;

    overflow: hidden;

}

.mouth .up .left {
    position: absolute;
    left: 50%;
    top: -10px;
    width: 65px;
    height: 30px;
    border: 3px solid #000;
    border-radius: 0 0 0 90%;
    border-color: transparent transparent #000 #000;
    transform: translateX(-100%) rotate(-30deg);
    z-index: 1;
    background-color: #ffe600;

}

.mouth .up .right {
    position: absolute;
    left: 50%;
    top: -13px;
    width: 65px;
    height: 30px;
    border: 3px solid #000;
    border-radius: 0 0 60px 0;
    border-color: transparent transparent #000 transparent;
    transform: rotate(28deg) translateX(4px);
    z-index: 1;
    background-color: #ffe600;






}

.mouth .up .right::before {
    position: absolute;
    left: -4px;
    top: -3px;
    content: "";
    display: block;
    width: 5px;
    height: 28px;
    background-color: #ffe600;

}

.mouth .down {
    position: absolute;
    left: 50%;
    top: -150px;
    transform: translateX(-50%);
    border: 3px solid #000;
    height: 300px;
    width: 100px;
    border-radius: 80px/180px;
    background-color: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan {
    position: absolute;
    bottom: -30px;
    left: -3px;

    width: 100px;
    height: 150px;
    border-radius: 50px 50px 0 0;
    background-color: #ff485f;
}

.face {
    position: absolute;
    left: 50%;
    top: 150px;
    margin-left: -44px;
    width: 88px;
    height: 88px;
    border: 2px solid #000;
    border-radius: 50%;
    background-color: #ff0000;

}

.face.left {
    transform: translateX(-150px);
}

.face.right {
    transform: translateX(150px);
}`;
let n = 0;
demo.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);
const run = ()=>{
    n += 1;
    if (n > string.length) {
        window.removeInterval(id);
        return;
    }
    console.log(n + ":" + string.substring(0, n));
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    demo.scrollTop = demo.scrollHeight;
};
let time = 100;
let id = setInterval(run, time);
pause.onclick = ()=>{
    window.clearInterval(id);
};
play.onclick = ()=>{
    id = setInterval(run, time);
};
slow.onclick = ()=>{
    window.clearInterval(id);
    time = 300;
    id = setInterval(run, time);
};
normal.onclick = ()=>{
    window.clearInterval(id);
    time = 100;
    id = setInterval(run, time);
};
fast.onclick = ()=>{
    window.clearInterval(id);
    time = 0;
    id = setInterval(run, time);
};

//# sourceMappingURL=test.416ca70d.js.map
