$("#bs").click(()=>{
    $.ajax({
        url:"people",
        data: $("#fm").serialize(),
        success: (res)=>$("#pp").html(res)
    })
})