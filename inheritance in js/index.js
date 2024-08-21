class College {     // CLASS CREATED COLLEGE
    constructor(name,cid) {
        this.name = name;
        this.cid = cid;
    }
    Details() {     // COLLEGE DEATILS 
        console.log("college name is =" + this.name);
        console.log("the college id is =" + this.cid)
    }
}
const clginfo = new College ("SCOE","1234");         // OBJECT CREATED
clginfo.Details();      // DETAILS FETCHED FROM METHOD DETAILS