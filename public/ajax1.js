function displayTable(sql){
     $.ajax({
        url:"tables",
        data:{qry:sql},
        method:"POST",
        success:(res)=>{
            let html=`<table class="table table-striped"><thead><tr>`
            Object.keys(res[0]).forEach((colName)=>html+=`<th>${colName}</th>`)
            html+=`</tr></thead><tbody>`
            Object.values(res).map((row)=>{
                html+=`<tr></tr>`
                Object.values(row).forEach((val)=>html+=`<td>${val}</td>`)
                html+=`</tr>`
            })
            html+=`</tbody></table>`
            $("#dv").html(html)
        }
     
    })
   }
let sql="select * from "+$("#tbl").val()+""
displayTable(sql)
$("#bs").click(function(e){
    e.preventDefault()
    $.ajax({
        url:"people",
        data:$("#fm").serialize(),
        method:"POST",
        success:(res)=>{
            $("#pp").html(res)
            displayTable("")
        }
    })
})
$("#b2").click(()=>{
   displayTable("")
})
