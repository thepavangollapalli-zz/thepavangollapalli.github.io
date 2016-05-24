function validate(){
    var zipcode = $("#zipcode").val();
    console.log(zipcode);
    console.log(zipcode.length);
    if(zipcode.length > 0)
    {
        if(isNaN(zipcode) || zipcode.length != 5)
        {
            alert("Zipcode is not valid or not the correct length.");
            return false;
        }
    }
}