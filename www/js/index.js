var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    onSuccess: function(position){

        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(latitude, longitude);

        var mapOptions = {
            center: latLong,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    },
    onError: function(error){
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    },

    initializeMap: function(){
        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.initializeMap(), false);
    }
};
