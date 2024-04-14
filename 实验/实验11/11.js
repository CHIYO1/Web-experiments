const data=[
    ["动作片","导火线",50],
    ["科幻片","2012",70],
    ["战争片","我是战士",60],
];


function createTable(data){
    var table=document.getElementById("ta");
    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }
    for(var i=0;i<data.length;++i){
        var row=table.insertRow();
        var cell=row.insertCell();
        cell.innerHTML= "<input type='checkbox' onchange='toggleRow(this)'/>选择";
        for(var j=0;j<data[i].length;++j){
            cell=row.insertCell();
            cell.innerHTML=data[i][j];
        }
        cell=row.insertCell();
        cell.innerHTML='<a href="javascript:void(0);" onclick="changeTr(this,'+i+');">修改</a>&nbsp&nbsp'
        +'<a href="javascript:void(0);" onclick="delTr('+i+');">删除</a>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createTable(data);
});

function change(checkbox){
    var checkboxs=document.querySelectorAll("#ta td input[type='checkbox']");

    for(var i=0;i<checkboxs.length;++i){
        checkboxs[i].checked=checkbox.checked;
        toggleRow(checkboxs[i]);
    }
}

function toggleRow(checkbox){
    var row=checkbox.parentNode.parentNode;

    if(checkbox.checked){
        row.classList.add('select');
    }else{
        row.classList.remove('select');
    }
}

function changeTr(link,num){
    var row=link.parentNode.parentNode;
    var cells=row.cells;

    cells[1].innerHTML="<input type='text' value='" + data[num][0]+ "'/>";
    cells[2].innerHTML="<input type='text' value='" + data[num][1]+ "'/>";
    cells[3].innerHTML="<input type='text' value='" + data[num][2]+ "'/>";

    cells[4].innerHTML='<a href="javascript:void(0);" onclick="save(this,'+num+');">保存</a>&nbsp&nbsp'
    +'<a href="javascript:void(0);" onclick="cancel();">取消</a>';
}

function save(link,num){
    var row=link.parentNode.parentNode;
    var cells=row.cells;

    var input_value=[cells[1].querySelector('input').value,cells[2].querySelector('input').value,cells[3].querySelector('input').value];

    data[num]=input_value;
    createTable(data);

}

function cancel(){
    createTable(data);
}

function delTr(num){
    data.splice(num,1);
    createTable(data);
}