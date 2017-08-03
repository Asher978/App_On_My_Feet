let id = $('#idcatcher').data('id');
$(() => {
    console.log('Jquery and main.js are loaded :)))))');
    console.log(`Member ID: ${id}`);
    $.ajax({
        url: `http://localhost:3000/api/${id}`,
        method: 'GET',
        success: (rundata) => {
            console.log(rundata);
        }
    })
})