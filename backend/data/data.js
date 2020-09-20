const aray_to_json=()=>{
    const array_me=[
        "amirhossein",
        "Shamsi",
        "09391142064",
    ];
    
    const object_me={
        "firstname":array_me[0],
        "lastname":array_me[1],
        "phonenumber":array_me[2],


    };
    var myJsonString = JSON.stringify(array_me);
     
     console.log(myJsonString+"\n");
     console.log(object_me);
     return myJsonString;

};
export default aray_to_json;
