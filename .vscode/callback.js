//callback

/*function submitForm(submit,db){
    
    var [dbName,comment]=db()
    console.log("DBName is",dbName);
    console.log(submit);
}

function database(){
    dbName="SECE"
    return [dbName,"Data stored in the database"]
}

submitForm("Form Submitted Successfully",database);

*/

/*function submitForm(submit, db) {
    
    var [isValid, message] = db();

    
    console.log("Validation Status:", isValid ? "Success" : "Failed");
    console.log("Message:", message);
    console.log("Submit Status:", submit);
}

function database() {
   
    const dbName = "SECE"; 
    if (dbName && dbName.length > 0) {
        return [true, `${dbName} - Data stored successfully`]; 
    } else {
        return [false, "Invalid database name."]; 
    }
}

submitForm("Form Submitted Successfully", database);*/

function submitform(submit,isformValid){
    if(isformValid){
        console.log("Fields Validated Successfully",submit);
    }
    else{
        console.log("Invalid Form",submit);
    }
}

function formValidation(){
    email="sece@sece.ac.in"
    password="12345678"
    if (email==="sece@sece.ac.in"&&password==="12345678"){
        return [true,"Valid Form"]
    }
    else{
        return [false,"Invalid Form"]
    }

}

submitform("Form Submitted Successfully",formValidation);
