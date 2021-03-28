//__________________global item______________________________________
var elem = 0;

class Employer {
    constructor(name, email, address, phone) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }
};

//__________________main function____________________________________
function loadallelement() {

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

function mainadd(Employer) {
    var html = '<td><input class="form-check-input" type="checkbox" name="checkbox" style="margin-left: 1%" id="' + elem + '"></td><td id="' + elem + '" name="name"><p>' + Employer.name + '</p></td><td id="' + elem + '" name="email"><p>' + Employer.email + '</p></td><td id="' + elem + '" name="address"><p>' + Employer.address + '</p></td><td id="' + elem + '" name="phone"><p>' + Employer.phone + '</p></td>';
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
https://getbootstrap.com/docs/5.0/components/list-group/#checkboxes-and-radios
*/