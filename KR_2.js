let getId = x => document.getElementById(x);
let getSel = y => document.querySelector(y);

getId('bold').onclick = function () {
    if (getId('text').style.fontWeight != 'bold') {
        getId('text').style.fontWeight = 'bold';
    } else if (getId('text').style.fontWeight != 'normal') {
        getId('text').style.fontWeight = 'normal';
    }
}
getId('italic').onclick = function () {
    if (getId('text').style.fontStyle != 'italic') {
        getId('text').style.fontStyle = 'italic';
    } else if (getId('text').style.fontStyle != 'normal') {
        getId('text').style.fontStyle = 'normal';
    }
}
getId('underline').onclick = function () {
    if (getId('text').style.textDecoration != 'underline') {
        getId('text').style.textDecoration = 'underline';
    } else if (getId('text').style.textDecoration != 'none') {
        getId('text').style.textDecoration = 'none'
    }
}
getId('through').onclick = function () {
    if (getId('text').style.textDecoration != 'line-through') {
        getId('text').style.textDecoration = 'line-through';
    } else if (getId('text').style.textDecoration != 'none') {
        getId('text').style.textDecoration = 'none'
    }
}

getId('left').onclick = function () {
    getId('text').style.textAlign = 'left';
}
getId('center').onclick = function () {
    getId('text').style.textAlign = 'center';
}
getId('right').onclick = function () {
    getId('text').style.textAlign = 'right';
}
getId('font').onchange = function () {
    let f_style = getId('font').value;
    getId('text').style.fontFamily = f_style;
}
getId('font_size').onchange = function () {
    let f_size = getId('font_size').value;
    getId('text').style.fontSize = f_size + 'px';
}
let color = ['aqua', 'rgb(0, 132, 255)', 'rgb(0, 255, 76)', 'rgba(0, 255, 42, 0.562)', 'rgb(0, 140, 255)', 'rgb(0, 4, 255)', 'rgba(174, 0, 255, 0.644)', 'rgb(245, 46, 178)', 'rgb(42, 30, 114)', 'rgb(50, 61, 110)', 'rgb(255, 208, 0)', 'rgb(255, 166, 0)', 'rgb(243, 155, 23)', 'rgb(255, 102, 0)', 'rgb(252, 67, 54)', 'rgb(247, 33, 33)', 'rgb(244, 248, 248)', 'rgba(126, 129, 129, 0.938)', 'rgb(51, 53, 53)', 'rgb(5, 5, 5)', 'rgb(255, 0, 64)'];

getId('color_text').onclick = function () {
    getId('back_grey').style.display = 'flex';
    getId('color').style.display = 'flex';
    getId('color').style.left = '35' + '%';
    getSel('.panel_2').style.display = 'none';
    getId('img_23').style.display = 'none';
    getId('choose').style.display = 'none';
    getSel('#sign').style.display = 'none';

    let groupColors = document.getElementById('color').children;
    for (let i = 0; i < groupColors.length; i++) {
        groupColors[i].onclick = () => {
            getSel('#text').style.color = color[i];
        }
    }
}

getId('back_grey').onclick = function (b) {
    if (b.target.id != 'color' && b.target.id != 'col' && b.target.id != 'color_2' && b.target.id != 'img_2' && b.target.id != 'choose_2' && b.target.id != 'jpec' && b.target.id != 'sign' && b.target.id != 'login' && b.target.id != 'pas' && b.target.id != 'in' && b.target.id != 'cf' && b.target.id != 'choose' && b.target.id != 'browse' && b.target.id != 'list' && b.target.id != 'table') {
        getId('back_grey').style.display = 'none';
        getId('color').style.display = 'none';
        getId('choose').style.display = 'none';
        getId('img_23').style.display = 'none';
    }
}

getId('color_2').onclick = function () {
    getId('img_23').style.display = 'none';
    getId('choose').style.display = 'none';
    getId('color').style.display = 'flex';
    getId('color').style.left = '';
    getSel('#sign').style.display = 'none';
    getSel('#text').style.background = '';
}

getId('color_back').onclick = function () {
    getId('back_grey').style.display = 'flex';
    getId('color').style.display = 'flex';
    getId('color').style.left = '74' + 'px';
    getSel('.panel_2').style.display = 'flex';
    getId('choose').style.display = 'none';
    getId('img_23').style.display = 'none';
    let groupColors = document.getElementById('color').children;
    for (let i = 0; i < groupColors.length; i++) {
        groupColors[i].onclick = () => {
            getSel('#text').style.backgroundColor = color[i];
        }
    }
}

getId('img_2').onclick = function () {
    getId('img_23').style.display = 'flex';
    getId('color').style.display = 'none';
    getId('choose').style.display = 'none';
    getSel('#sign').style.display = 'none';
    getSel('#text').style.background = '';
}

getSel('.box1').onclick = function () {
    getSel('#text').style.backgroundImage = 'url(icon/503155.jpg)';
    getSel('#text').style.backgroundSize = 'cover';
}
getSel('.box2').onclick = function () {
    getSel('#text').style.backgroundImage = 'url(icon/561724.jpg)';
    getSel('#text').style.backgroundSize = 'cover';
}
getSel('.box3').onclick = function () {
    getSel('#text').style.backgroundImage = 'url(icon/568495.jpg)';
    getSel('#text').style.backgroundSize = 'cover';
}
getSel('.box4').onclick = function () {
    getSel('#text').style.backgroundImage = 'url(icon/425064.jpg)';
    getSel('#text').style.backgroundSize = 'cover';

}
getId('choose_2').onclick = function () {
    getId('choose').style.display = 'flex';
    getSel('.panel_2').style.display = 'flex';
    getId('img_23').style.display = 'none';
    getId('color').style.display = 'none';
}
getId('cf').addEventListener('change', function (addFile) {
    let addImg = addFile.target.files[0];
    let url = URL.createObjectURL(addImg);
    getId('browse').onclick = function () {
        getSel('#text').style.background = `url(${url})`;
    }
})



getId('block').onclick = function () {
    getSel('.signIn').style.display = 'flex';
    getId('back_grey').style.display = 'flex';
    getSel('.panel_2').style.display = 'none';

}
getSel('#in').onclick = function () {
    let log = getSel('#login').value;
    let pass = getSel('#pas').value;
    if (log == 'admin' && pass == 'admin') {
        getSel('.signIn').style.display = 'none';
        getId('back_grey').style.display = 'none';
        document.forms['signIn'].reset();
    } else {
        getSel('.signIn').style.display = 'flex';
        getSel('#login').style.borderColor = 'red';
        getSel('#pas').style.borderColor = 'red';
        document.forms['signIn'].reset();
    }
}
getId('add').onclick = function () {
    getSel('.panel').style.display = 'none';
    getSel('#sign').style.display = 'none';
    getSel('.panel3').style.display = 'flex';
}
getSel('.addTable').onclick = function () {
    getId('back_grey').style.display = 'flex';
    getSel('.table').style.display = 'flex';
    getSel('.listFormN').style.display = 'none';
    getSel('.listFormI').style.display = 'none';
}
getSel('.createTable').onclick = function () {
    let tr_S = getSel('.trCount').value;
    console.log(tr_S);
    let td_S = getSel('.tdCount').value;
    console.log(td_S);
    let tableNew = '';
    tableNew = '<table>';
    for (let i = 0; i < tr_S; i++) {
        tableNew += '<tr> text </tr>';
        for (let j = 0; j < td_S; j++) {
            tableNew += '<td> text </td>';
        }
    }
    tableNew += '</table>'
    getSel('#text2').textContent += tableNew;
}

getSel('.addNumerList').onclick = function () {
    getSel('.table').style.display = 'none';
    getSel('.listFormI').style.display = 'none';
    getId('back_grey').style.display = 'flex';
    getSel('.listFormN').style.display = 'flex';
}
getSel('.addImgList').onclick = function () {
    getSel('.table').style.display = 'none';
    getSel('.listFormN').style.display = 'none';
    getId('back_grey').style.display = 'flex';
    getSel('.listFormI').style.display = 'flex';
}
getSel('.createList').onclick = function () {
    let countLi = getSel('.countLi').value;
    let litype = getSel('.liNumType').value;
    let olNew = '';
    olNew = '<ol>';
    for (let i = 0; i < countLi; i++) {
        olNew += `<li style=list-style-type:${litype}> text </li>`;
    }
    olNew += '</ol>'
    getSel('#text2').textContent += olNew;
}

getSel('.createListI').onclick = function () {
    let countLiImg = getSel('.countLiImg').value;
    let liNewI = getSel('.liImgType').value;
    let ulNew = '';
    ulNew = '<ul>';
    for (let i = 0; i < countLiImg; i++) {
        ulNew += `<li style=list-style-type:${liNewI}> text </li>`;
    }
    ulNew += '</ul>'
    getSel('#text2').textContent += ulNew;
}


getSel('.save').onclick = function () {
    getSel('#text2').innerHTML = getSel('#text2').textContent;
    let tableN = document.getElementsByTagName('td');
    for (let i = 0; i < tableN.length; i++) {
        tableN[i].style.width = getSel('.trWidth').value + 'px';
        tableN[i].style.height = getSel('.tdHeight').value + 'px';
        tableN[i].style.borderWidth = getSel('.tabBorder').value + 'px';
        console.log(getSel('.tabBorder').value);
        tableN[i].style.borderStyle = getSel('.typeBorder').value;
        console.log(getSel('.typeBorder').value);
        tableN[i].style.borderColor = getSel('.colorBorder').value;
        console.log(getSel('.colorBorder').value);
    }
    getSel('.table').style.display = 'none';
    getSel('.listFormN').style.display = 'none';
    getSel('.listFormI').style.display = 'none';
    getSel('.panel3').style.display = 'none';
    getSel('.panel').style.display = 'flex';
}

getSel('.resetTable').onclick = () => {
    document.forms['table'].reset();
}
getSel('.resetListN').onclick = () => {
    document.forms['listN'].reset();
}
getSel('.resetListI').onclick = () => {
    document.forms['listI'].reset();
}