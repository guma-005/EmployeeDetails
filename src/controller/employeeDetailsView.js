

const emplyoees = [
                    {'name':'Alex' , 'department': 'sales'},
                    {'name':'Bernard' , 'department': 'invontory'},
                    {'name':'Cathy' , 'department': 'it'},
                   
                ]

function generateEmployeeTable(){
    console.log('fucntion called');
    var body = document.body;
    var table = document.createElement('Table');
    table.border = '2';

    var tableBody = document.createElement('TableBody');

    table.appendChild(tableBody);

    for(var i = 0; i < 3; i++){
        var tr = document.createElement('TableRow');
        tableBody.appendChild(tr);
        console.log('----');
        for(var j =0; j<4; j++){
            var td = document.createElement('TableData');
            td.width = '100';
            td.appendChild(document.createTextNode('hi-'));
            tr.appendChild(td);            
        }
        tableBody.appendChild(tr);
    }

    body.appendChild(table);
}