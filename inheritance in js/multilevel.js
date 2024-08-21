class College {         //PARENT CLASS
    constructor(cname,cid) {
        this.cname = cname;
        this.cid = cid;
    }
    ClgDetails() {              // DISPLAYS THE DETAILS OF COLLEGE
        console.log("college name is =" + this.cname);
        console.log("the college id is =" + this.cid);
    }
}
class Department extends College {      //DEPARTMENT = CHILD CLASS AND COLLEGE = PARENT CLASS
    constructor (cname,cid,dname,did) {
        super(cname,cid);        // FETCHES THE DETAILS FROM THE PARENT CLASS ACCORDING TO THE PARAMETER HERE CNAME AND CID
        this.dname = dname;
        this.did = did;
    }
    DeptDetails() {                 // DISPLAYS THE DETAILS OF COLLEGE AND DEPARTMENT
        this.ClgDetails();
        console.log("department name is =" + this.dname);
        console.log("the department id is =" + this.did);
    }

}
class Student extends Department {      // STUDENT = CHILD CLASS AND DEPARTMENT = PARENT CLASS
    constructor (cname,cid,dname,did,sname,rollno) {
        super(cname,cid,dname,did);     // FETCHES THE DETAILS FROM THE PARENT CLASS ACCORDING TO THE PARAMETER HERE, CNAME,CID, DNAME,DID
        this.sname = sname;
        this.rollno = rollno;
    }
    SDetails() {        // DISPLAYS THE DETAILS OF COLLEGE, DEPARTMENT AND STUDENT
        this.ClgDetails();
        this.DeptDetails();
        console.log("Student name is =" + this.sname);
        console.log("the student rollno is =" + this.rollno);
    }
}
const clginfo = new Student ("SCOE","1234","IT","3456","HARHIT","51");      // OBJECT CREATIONS OF THE CHILD CLASS
clginfo.SDetails();         // FETCHES THE DETAILS OF THAT METHOD
