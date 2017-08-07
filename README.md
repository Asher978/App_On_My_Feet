# App On My Feet

![Screen Shot](https://github.com/Asher978/App_On_My_Feet/blob/master/assets/appScreenshot.png)

## What is App On My Feet?

> App On My Feet is desgined to help and support the runners from BACK ON MY FEET. URL:https://nyc.backonmyfeet.org A non-profit running organization that helps restore confidence and self esteem amongst the homeless and uses running as a cataylst. The main idea of this App is to help the program manager as well as the members to log and track the progress on their weekly runs, miles covered and the areas they ran in. 

## Wire Frames
![Screen Shot](https://github.com/Asher978/App_On_My_Feet/blob/master/assets/frame1.JPG)
![Screen Shot](https://github.com/Asher978/App_On_My_Feet/blob/master/assets/frame2.JPG)
![Screen Shot](https://github.com/Asher978/App_On_My_Feet/blob/master/assets/frame3.JPG)

## User Stories
  *  User should be able to register by providing the required info(name, email, password)
  *  User should be able to login after successfully registering
  *  User should be able to input data on his/her run
  *  User should be able to see the update on his/her profile after submitting the run
  *  User should be able to view his/her profile 


## Technical Discussion
  *  HTML / EJS: Used EJS to render information on the page.
  *  Node and Express: Used to build the server.
  *  MVC Pattern: Used Models, Views, Controllers pattern to interact with the databse and the user.
  *  SQL / PG-PROMISE: Used to access DB.
  *  CSS & Design: Used to design the pages.
  *  JavaScript / jQuery: DOM manipulation.
  *  Passport/bycrptjs: For authorizations.
  *  Used Google API to create markers on routes ran.
  *  Used Leaflet to render markers on the map.

### Snippet of Code

``` 
var locat=[];
$(getData = () => {
    console.log('Jquery and main.js are loaded :)))))');
    // console.log(`Member ID: ${id}`);
    $.ajax({
        url: `http://localhost:3000/api/${id}`,
        // url: `https://peaceful-waters-85500.herokuapp.com/api/${id}`,
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
```

### Opportunities 

*  Showing who left the comment for the member
*  Deleting Runs
*  Finishing up partials for headers & footers


## URL: https://peaceful-waters-85500.herokuapp.com/
## URL: https://github.com/Asher978/App_On_My_Feet