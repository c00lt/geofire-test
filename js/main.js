function initMap() {
    var myLatlng = new google.maps.LatLng(45.764043, 4.835659);
    var mapOptions = {
        zoom: 13,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var map = new google.maps.Map(document.getElementById("map"),
                                  mapOptions);
}