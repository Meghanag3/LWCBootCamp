public with sharing class LookupRecordsController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(Id accountId) {
        return [
            SELECT Name, Title, Email, Phone
            FROM Contact
            WHERE AccountId = :accountId
            WITH SECURITY_ENFORCED
       ];
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String searchKey) {
        String strKey = '%' + searchKey + '%';
        return [
            SELECT Id, Name FROM Account WHERE name like :strKey limit 100
       ];
    }
    
}