class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const es = new Set();
        for(let i = 0; i < emails.length; i++){
            const em = emails[i];
            const esp = em.split("@");
            let p1 = esp[0].trim().replaceAll(".", "")
            p1 = p1.includes("+") ? p1.substring(0, p1.indexOf("+")) : p1
            let p2 = esp[1].trim()
            const e = p1+"@"+p2
            es.add(e)
        }
        //console.log(es)
        return es.size;
    }
}
