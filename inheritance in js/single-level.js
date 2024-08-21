class College {         // CLASS IS CREATED AS COLLEGE
    constructor(cname,cid) {
        this.cname = cname;
        this.cid = cid;
    }
    ClgDetails() {      // DISPLAYS THE COLLEGE DETAILS
        console.log("college name is =" + this.cname);
        console.log("the college id is =" + this.cid);
    }
}
class Department extends College {      //PARENT CLASS IS COLLEGE AND CHILD CLASS IS DEPARTMENT
    constructor (cname,cid,dname,did) {
        super(cname,cid);       // TO FETCH THE DETAILS FROM THE PARENT CLASS I.E COLLEGE
        this.dname = dname;
        this.did = did;
    }
    DeptDetails() {     // DISPLAY COLLEGE AND DEPARTMENT DETAILLS
        this.ClgDetails();      // GETS DETAILS FROM THE METHOD CLGDETAILS
        console.log("department name is =" + this.dname);
        console.log("the department id is =" + this.did);
    }

}
const clginfo = new Department ("SCOE","1234","IT","3456");     //OBJECT CREATED
clginfo.DeptDetails();      // FINAL DETAILS ARE DISLAYED