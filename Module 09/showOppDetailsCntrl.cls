public with sharing class showOppDetailsCntrl {
    
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> searchOpportunity(String searchKey, string recordId) {
        string key = '%' + searchKey + '%';
        List<Opportunity> opptyList = [SELECT Id, Name, AccountId, CloseDate, Amount 
                                       FROM Opportunity 
                                       WHERE Name LIKE :key AND AccountId =: recordId LIMIT 50];
        return opptyList;
    }
}