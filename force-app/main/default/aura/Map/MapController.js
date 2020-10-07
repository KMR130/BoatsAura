({
    jsLoaded: function (component) {
        component.set("v.jsLoaded", true);
    },
    onPlotMapMarker: function (component, event, helper) {
        var mapMarkers = [];
        var mapMarkers = {
            'location': {
                'Latitude': event.getParam("lat"),
                'Longitude': event.getParam("long")
            },
            'icon': 'standard:location'
        };
        component.set('v.mapMarkers', mapMarkers);
    }
}) 