var url = "https://localhost:44389/api/EmployeesAPI";
var tableList = document.getElementById("table");
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(xmlhttp.responseText);
        for (var i = 0; i < response.length; i++) {
            console.log(response[i].studentId);
            var item = "<tr>";
            item += '<td>'+response[i].studentId+'</td>';
            item += '<td>'+response[i].firstName+'</td>';
            item += '<td>'+response[i].lastName+'</td>';
            item += '<td>'+response[i].phoneNumber+'</td>';
            item += '<td>'+response[i].emai+'</td>';
            item += "</tr>";
            tableList.innerHTML += item;
        }
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();