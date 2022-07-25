$(document).ready(function(){
    $('dispaly').on('click',function(){
        $.ajax({
            url:'server.php',
            type:'post',
            data:{
                info:'info'
            },
            success:function(result){
                // alert(result)
            }
        })
    })
    // alert('hello');
    $('#addprod').on('click',function(){
        // alert('add');
        // var id = document.getElementById('id').value
        var name = document.getElementById('name').value
        var ct = document.getElementById('ct').value
        var sct = document.getElementById('sct').value
        var col = document.getElementById('col').value
        var prc = document.getElementById('prc').value
        if( name =='' || ct==""|| sct ==''|| col==''|| prc ==''){
            alert('enter all the fields')
            return;
        }
        $.ajax({
            url:'server.php',
            type:'post',
            data:{
                name1:name,
                ct1:ct,
                sct1:sct,
                col1:col,
                prc1:prc
            },
            success:function(result){
                // alert(result)
            }
        })
    })
})