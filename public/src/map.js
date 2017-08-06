let id = $('#idcatcher').data('id');
var locat=[];
$(getData = () => {
    console.log('Jquery and main.js are loaded :)))))');
    // console.log(`Member ID: ${id}`);
    $.ajax({
        url: `http://localhost:3000/api/${id}`,
        method: 'GET',
        success: (rundata) => {
            for (let run of rundata) {
                let miles = run.milesran.toString();
                locat.push([run.lat, run.log, miles]);
            }   
            console.log(locat)
            drawMap();  
        }
    })
});

function drawMap () {
    let map = L.map('mapid').setView([locat[0][0], locat[0][1]], 12);
    mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' +'App On My Feet',
        maxZoom: 15,
        minZoom: 10,
    }).addTo(map);
    for (let i=0; i<locat.length; i++) {
        marker = new L.marker([locat[i][0],locat[i][1]])
        .bindPopup(locat[i][2]+':miles')
        .addTo(map);
    }
}    


  

           