public class BoatSearchResults {
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes() {
        return [SELECT Id, Name FROM BoatType__c];
    }
    
     @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {
        List<Boat__c> boats = new List<Boat__c>();
        if (String.isEmpty(boatTypeId)) {
           // boats = [select Id,Name,Picture__c,Contact__r.name from Boat__c];
           boats = [select Id ,Name,Picture__c,Contact__r.name, Geolocation__Latitude__s, Geolocation__Longitude__s from Boat__c];
        } else{
            boats = [ select Id,Name,Picture__c,Contact__r.name,Geolocation__Latitude__s, Geolocation__Longitude__s from Boat__c where BoatType__c = :boatTypeId];
           // boats = [select Id,Name,Picture__c,Contact__r.name from Boat__c where BoatType__c = :boatTypeId ];
        }
        return boats;
    }

    
}