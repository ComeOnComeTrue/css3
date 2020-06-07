// var oBox = document.getElementsByClassName('box')[0];

//     oBox.onmouseenter = function (e) {
//         this.classList.remove('out-bottom');
//         this.classList.add('in-bottom');
//     }
//     oBox.onmouseleave = function (e) {
//         this.classList.remove('in-bottom')
//         this.classList.add('out-bottom');

//     }

function bindEvent() {
    var oBox = document.getElementsByClassName('box');
    for ( var i = 0; i < oBox.length; i++){
        oBox[i].onmouseenter = function (e) {
            addClass(this, e, 'in-');
        };
        oBox[i].onmouseleave = function (e) {
            addClass(this, e, 'out-');
        };
    }
};
function getDirection(dom, e) {
    //距离中间多少px  e.offsetX - dom.offsetWidth / 2 ,e.offsetY - dom.offsetHeight / 2 
    var x = e.offsetX - dom.offsetWidth / 2;
    var y = e.offsetY - dom.offsetHeight / 2;
    var d = Math.round(((Math.atan2(y,x)  *  (180 / Math.PI) + 180) / 90 + 3) % 4 );
    // 上右下左 0-4
    return d;
}
function addClass (dom, e, state) {
    var d = getDirection(dom, e)
    var direction = '';
    var hide = document.getElementsByClassName('hide');
    switch (d) {
        case 0: {
            direction = 'top';
            hide[0].style.backgroundImage = 'url(./images/g4.jpg)';
            break;
        }
        case 1: {
            direction = 'right';
            hide[0].style.backgroundImage = 'url(./images/g5.jpg)';
            break;
        }
        case 2: {
            direction = 'bottom';
            hide[0].style.backgroundImage = 'url(./images/g6.jpg)';
            break;
        }
        case 3: {
            direction = 'left';
            hide[0].style.backgroundImage = 'url(./images/g7.jpg)';
            break;
        }
        default: break;
    }
    dom.className = 'box ' + state + direction;
}
bindEvent ();