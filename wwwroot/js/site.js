//Fade in Landing page
$(function () {
    $('body').removeClass('fade-out');
});

//Subheading terminal effect
consoleText(['Freelance Photographer', 'Videographer', 'Mentor'], 'text');

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}

//nav-bar
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

//gallery
const observer = new IntersectionObserver(f, {
    threshold: [0, 1]
});

function f(entries) {
    for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            entry.target.classList.toggle("inbound", true)
        }
        else {
            entry.target.classList.toggle("inbound", false)
        }
    }
}

const itemEls = Array.from(document.querySelectorAll(".item"));
for (const itemEl of itemEls)
    observer.observe(itemEl)
