({
    doInit: function (component, event, helper) {
        var data = component.get("v.boat");
       // console.log("data received in boattile" + data);
    },
    onBoatClick: function (component, event, helper) {
        var data = event.getSource().get("v.value")
        var boatid = data.Id;
        //console.log("data received in boattilecontroller" + JSON.stringify(data));
        var BoatSelect = component.getEvent("BoatSelect");
        BoatSelect.setParams({
            "boatId": boatid
        });
        BoatSelect.fire();
        var boatselected = $A.get("e.c:BoatSelected");
        boatselected.setParams({
            "boat": data
        });
        boatselected.fire();

        var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
       
        if (plotMapMarkerEvent) {
            plotMapMarkerEvent.setParams({
                "sObjectId": data.Id,
                "lat": data.Geolocation__Latitude__s,
                "long": data.Geolocation__Longitude__s,
                "label": data.Name
            });
        }
        plotMapMarkerEvent.fire();

    },

})
