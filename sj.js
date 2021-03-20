function maindelete(elem) {
    if (elem == null) {
        var allelement = document.getElementsByName('checkbox');
        document.getElementById('content').removeChild((row + allelement.length).parentNode);
    } else {
        document.getElementById('content').removeChild(elem.parentNode);
    }
}

function mainadd() {
    var html = '<td><input class="form-check-input" type="checkbox" name="checkbox" style="margin-left: 1%"></td><td><p>Name</p></td><td><p>Email</p></td><td><p>Address</p></td><td><p>Phone</p></td>';
    html = html + '<td><img onClick="modify()" src="media/modificabut.png" style="width: 30px; height: 30px;"></td>';
    html = html + '<td><img onClick="modify()" src="media/removebut.png" style="width: 30px; height: 30px;"></td>';
    const row = document.createElement('tr');
    var allelement = document.getElementsByName('checkbox');
    row.id = (row + allelement.length);
    row.innerHTML = html;
    document.getElementById('itemscontainer').appendChild(row);
}

/*
function checkboxall() {
    if (document.querySelector('#maincheckbox').checked) {
        for (var i = 0; i < numeroitem; i++)
            document.querySelector('#checkbox' + i).innerHTML = true;
    } else {
        for (var i = 0; i < numeroitem; i++)
            document.querySelector('#checkbox' + i).innerHTML = false;
    }
}*/

function checkboxall(maincheckbox) {
    var checkboxes = document.getElementsByName('checkbox'); //ByName make an array of checkbox elements in html document  
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = maincheckbox.checked;
    }
}


//https://www.w3schools.com/jsref/prop_html_id.asp
//https://stackoverflow.com/questions/17650776/add-remove-html-inside-div-using-javascript
//https://www.w3schools.com/js/js_htmldom_html.asp
//https://getbootstrap.com/docs/5.0/components/list-group/#checkboxes-and-radios