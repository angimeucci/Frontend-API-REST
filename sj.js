//__________________global item______________________________________
//var elem = 0;

class Employer {
    constructor(name, lname, email, phone) {
        this.firstName = name;
        this.lastName = lname;
        this.email = email;
        this.phone = phone;
    }
};

//__________________main function____________________________________
function loadallelement() {
    requestall();
}

function deletepls(element) {
    try {
        if (element == undefined) {
            var checkboxes = document.getElementsByName('checkbox');
            for (var i = 0, n = checkboxes.length; i < n; i++)
                if (checkboxes[i].checked == true)
                    document.getElementById('itemscontainer').removeChild(document.getElementById(checkboxes[i].id));
        } else {
            if (confirm("I\'m sure about what I\'m doing"))
                document.getElementById('itemscontainer').removeChild(document.getElementById(element));
        }
    } catch (Exception) {
        //I didn't understand why this happen
    }
}

function mainadd(employer, elem) {
    var html = '<td><input class="form-check-input" type="checkbox" name="checkbox" style="margin-left: 1%" id="' + elem + '"></td><td id="' + elem + '" name="name"><p>' + employer.firstName + '</p></td><td id="' + elem + '" name="lname"><p>' + employer.lastName + '</p></td><td id="' + elem + '" name="email"><p>' + employer.email + '</p></td><td id="' + elem + '" name="phone"><p>' + employer.phone + '</p></td>';
    html = html + '<td style="width: 1%"><img onClick="modify()" src="media/modificabut.png" style="width: 30px; height: 30px;" id="' + elem + '"></td>';
    html = html + '<td><img onClick="deletepls(this.id)" src="media/removebut.png" style="width: 30px; height: 30px;" id="' + elem + '"></td>';
    const row = document.createElement('tr');
    var allelement = document.getElementsByName('checkbox');
    row.id = (elem);
    row.innerHTML = html;
    document.getElementById('itemscontainer').appendChild(row);
    elem++;
}

function checkboxall(maincheckbox) {
    var checkboxes = document.getElementsByName('checkbox'); //ByName make an array of checkbox elements in html document  
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = maincheckbox.checked;
    }
}

//__________________request functions________________________________
function requestall() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            resposeall(this.responseText);
        }
    };
    request.open("GET", "http://localhost:8080/api/tutorial/1.0/employees", true);
    request.setRequestHeader("Accept", "*/*");
    request.send();
}

function resposeall(json) {
    var employer = JSON.parse(json);
    for (var i = 0; i < 9; i = i + 1) {
        mainadd(employer[i], employer[i].employeeId);
    }
}

function setjson(value) {
    json = value;
}

//__________________function for every single element________________




/* "housemade" but actually useless
function checkboxall() {
    if (document.querySelector('#maincheckbox').checked) {
        for (var i = 0; i < numeroitem; i++)
            document.querySelector('#checkbox' + i).innerHTML = true;
    } else {
        for (var i = 0; i < numeroitem; i++)
            document.querySelector('#checkbox' + i).innerHTML = false;
    }
}*/

/*  some important stuff
https://www.w3schools.com/js/js_classes.asp
https://www.w3schools.com/jsref/prop_html_id.asp
https://stackoverflow.com/questions/17650776/add-remove-html-inside-div-using-javascript
https://www.w3schools.com/js/js_htmldom_html.asp
https://www.w3schools.com/jsref/met_win_confirm.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for    especially that, cause we always forget most important stuff
https://www.w3schools.com/js/js_json_http.asp
https://getbootstrap.com/docs/5.0/components/list-group/#checkboxes-and-radios
*/