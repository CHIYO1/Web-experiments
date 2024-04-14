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
        cell.innerHTML='<a href="javascript:void(0);" onclick="changeTr(this);">修改</a>&nbsp&nbsp'
        +'<a href="javascript:void(0);" onclick="delTr(this);">删除</a>';
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