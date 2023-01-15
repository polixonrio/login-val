function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success","form__message--error")
    messageElement.classList.add(`form__message--${type}`,'text-danger');
}

function setInputError(inputElement, message) {
    inputElement.classList.add("border", "border-danger");
    inputElement.parentElement.parentElement.querySelector(".form__input-error-message").textContent = message;
    // inputElement.parentElement.parentElement.parentElement.parentElement.querySelector(".card").classList.add("border", "border-danger");
}

function clearInputError(inputElement) {
    inputElement.classList.remove("border", "border-danger");
    inputElement.parentElement.parentElement.querySelector(".form__input-error-message").textContent = "";
    // inputElement.parentElement.parentElement.parentElement.parentElement.querySelector(".card").classList.remove("border", "border-danger");

}
let fnamebool = emailbool = genbool = dobbool = mnobool = gnobool = addbool = citybool = pinbool = false;
let workbool = ccbool = enbool = false;
let = brunchbool = coobool = addbool = btbool = tbool = spubool = dpubool =false;
let = tfeesbool = pfeesbool = ptypebool = otnotbool = adbool = rnobool  =false;

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.querySelector("#login");
    // console.log(document.querySelector("#login"));
    // const createAccountForm = document.querySelector("#createAccount");
    // console.log(createAccountForm);
    // document.querySelector("#linkLogin ").addEventListener("click", e => {
    //     e.preventDefault();
    //     loginForm.classList.add("d-none");
    //     createAccountForm.classList.remove("d-none");
    // });

    // document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    //     e.preventDefault();
    //     loginForm.classList.remove("d-none");
    //     createAccountForm.classList.add("d-none");
    // });

    console.log(window.location.pathname);

  
    function Validate() {
        var ddlFruits = document.getElementById("ddlFruits");
        if (ddlFruits.value == "") {
            //If the "Please Select" option is selected display error.
            alert("Please select an option!");
            return false;
        }
        return true;
    }
   
    
        
    


    document.querySelectorAll(".form__input.form-control").forEach(inputElement => {
        let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let phonenoregex = /^\d{10}$/;
        let pincoderegex = /^\d{6}$/;
        let spaceregex = /^(?! )[A-Za-z0-9 ]*(?<! )$/;
        let feesregex = /^[0-9]*$/;

        


        inputElement.addEventListener("blur", e => {
            // console.log(emailregex.test(e.target.value));
            if (e.target.id === "ebox" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                emailbool = false;
            }
            else if(e.target.id === "ebox" && !(emailregex.test(e.target.value)) ){
                setInputError(inputElement, "Must be a valid email");
                emailbool = false;
                if(e.target.id === "ebox" && !spaceregex.test(e.target.value)){
                    setInputError(inputElement, "Please remove leading and trailing spaces");
                    emailbool = false;
                }
                }
            else if(e.target.id === "ebox" && (emailregex.test(e.target.value)) && e.target.value.length < 255 ){
                emailbool = true;
                localStorage.setItem("emailid",e.target.value);
                clearInputError(inputElement);
                bvalidate();
            }
        });

        inputElement.addEventListener("blur", e => {
            // console.log(emailregex.test(e.target.value));
            if(e.target.id === "fullname" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                fnamebool = false;
            }
            else if (e.target.id === "fullname" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                fnamebool = false;
            }
            else if(e.target.id === "fullname" && e.target.value.length > 0 && e.target.value.length < 6 ){
                fnamebool = false;
                setInputError(inputElement, "Must be a valid name");
                }
            else if(e.target.id === "fullname" &&  e.target.value.length > 6 &&  e.target.value.length < 255 ){
                fnamebool = true;    
                localStorage.setItem("fullnameid",e.target.value);
                clearInputError(inputElement);
                bvalidate();
            }
        });

        // inputElement.addEventListener("blur", e => {
        //     if (e.target.id === "fullname"  && e.target.value == "" ) {
        //         setInputError(inputElement, "This is a required question");
               
                
        //     }
           
        //     else if(e.target.id === "fullname" && e.target.value.length < 255  && e.target.value.length > 5){
        //         localStorage.setItem("fullnameid",e.target.value);
        //         console.log(localStorage.getItem("fullnameid"));
        //         clearInputError(inputElement);
        //     }
        // });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "gen"  && e.target.value == "" ) {
                setInputError(inputElement, "This is a required question");
                genbool = false;
            }
            else if(e.target.id === "gen" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                genbool = false;
            }
            else if(e.target.id === "gen"){
                genbool = true;
                localStorage.setItem("genid",e.target.value);
                console.log(localStorage.getItem("genid"));
                clearInputError(inputElement);
                bvalidate();
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "dateob"  && e.target.value == "" ) {
                dobbool = false;
                setInputError(inputElement, "This is a required question");
            }
            else if(e.target.id === "dateob" ){
                dobbool = true;
                localStorage.setItem("dateobid",e.target.value);
                console.log(localStorage.getItem("dateobid"));
                clearInputError(inputElement);
                bvalidate();
            }
        });

  
        // inputElement.addEventListener("blur", e => {
        //     if (e.target.id === "telnam1" && e.target.value.length=="" ) {
        //         setInputError(inputElement, "This is a required question");
                
        //     }
        //     else if(e.target.id === "telnam1"){
        //         localStorage.setItem("snumberid",e.target.value);
        //         console.log(localStorage.getItem("snumberid"));
        //         clearInputError(inputElement);
        //     }
        // });
        // inputElement.addEventListener("blur", e => {
        //     if (e.target.id === "telnam2" && e.target.value=="" ) {
        //         setInputError(inputElement, "This is a required question");
                
        //     }
        //     else if(e.target.id === "telnam2"){
        //         localStorage.setItem("pnumberid",e.target.value);
        //         console.log(localStorage.getItem("pnumberid"));
        //         clearInputError(inputElement);
        //     }
        // });

        inputElement.addEventListener("blur", e => {
            if(e.target.id === "telnam1" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                mnobool = false;
            }
            else if (e.target.id === "telnam1" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                mnobool = false;
            }
            else if(e.target.id === "telnam1" && !(phonenoregex.test(e.target.value))){
                mnobool = false;
                setInputError(inputElement, "Must be a valid number");
                }
            
            else if(e.target.id === "telnam1"){
                mnobool = true;
                localStorage.setItem("snumberid",e.target.value);
                console.log(localStorage.getItem("snumberid"));
                clearInputError(inputElement);
                bvalidate();
                
            }
        });

    

        inputElement.addEventListener("blur", e => {
            if(e.target.id === "telnam2" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                gnobool = false;
            }
            else if (e.target.id === "telnam2" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                gnobool = false;
            }
            else if(e.target.id === "telnam2" && !(phonenoregex.test(e.target.value))){
                setInputError(inputElement, "Must be a valid Mobile Number");
                gnobool = false;
                }
            
            else if(e.target.id === "telnam2" ){
                gnobool = true;
                localStorage.setItem("pnumberid",e.target.value);
                console.log(localStorage.getItem("pnumberid"));
                clearInputError(inputElement);
                bvalidate();
                
            }
        });

        // inputElement.addEventListener("blur", e => {
        //     if (e.target.id === "addr"  && e.target.value == "" ) {
        //         setInputError(inputElement, "This is a required question");
        //     }
        //     else if(e.target.id === "addr" && e.target.value.length < 255 ){
        //         localStorage.setItem("addrid",e.target.value);
        //         console.log(localStorage.getItem("addrid"));
        //         clearInputError(inputElement);
        //     }
        // });

        inputElement.addEventListener("blur", e => {
            // console.log(emailregex.test(e.target.value));
            if(e.target.id === "addr" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                addbool = false;
            }
            else if (e.target.id === "addr" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                addbool = false;
            }
            else if(e.target.id === "addr" && e.target.value.length > 0 && e.target.value.length < 6 ){
                
                setInputError(inputElement, "Must be a valid address");
                addbool = false;
                }
            else if(e.target.id === "addr" &&  e.target.value.length > 6 &&  e.target.value.length < 255 ){
                addbool = true;
                localStorage.setItem("addrid",e.target.value);
                clearInputError(inputElement);
                bvalidate();
            }
        });




        inputElement.addEventListener("blur", e => {
            // console.log(emailregex.test(e.target.value));
            if(e.target.id === "citye" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                citybool = false;
            }
            else if (e.target.id === "citye" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                citybool = false;
            }
            else if(e.target.id === "citye" && e.target.value.length > 0 && e.target.value.length < 2 ){
                
                setInputError(inputElement, "Must be a valid city");
                citybool = false;
                }
            else if(e.target.id === "citye" &&  e.target.value.length > 2 &&  e.target.value.length < 255 ){
                citybool = true;
                localStorage.setItem("cityeid",e.target.value);
                clearInputError(inputElement);
                bvalidate();
            }
        });

        inputElement.addEventListener("blur", e => {
            // console.log(emailregex.test(e.target.value));
            if(e.target.id === "pinco" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                pinbool = false;
            }
            else if (e.target.id === "pinco" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                pinbool = false;
            }
            else if(e.target.id === "pinco" && !(pincoderegex.test(e.target.value))){
                pinbool = false;
                setInputError(inputElement, "Must be a valid pincode");
                }
            else if(e.target.id === "pinco" ){
                pinbool = true;
                localStorage.setItem("pincoid",e.target.value);
                clearInputError(inputElement);
                bvalidate();
            }
        });

      


        // inputElement.addEventListener("blur", e => {
        //     if (e.target.id === "pinco" && e.target.value=="" ) {
        //         setInputError(inputElement, "This is a required question");
        //     }
        //     else if(e.target.id === "pinco" && !(pincoderegex.test(e.target.value))){
        //         setInputError(inputElement, "Must be a number");
        //         }
        //     else if(e.target.id === "pinco"){
        //         localStorage.setItem("pincoid",e.target.value);
        //         console.log(localStorage.getItem("pincoid"));
        //         clearInputError(inputElement);
                
        //     }
        // });
        inputElement.addEventListener("blur", e => {
            // console.log(emailregex.test(e.target.value));
            if(e.target.id === "ccname" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                ccbool = false;
            }
            else if (e.target.id === "ccname" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                ccbool = false;
            }
            else if(e.target.id === "ccname" && e.target.value.length > 0 && e.target.value.length < 6 ){
                
                setInputError(inputElement, "Must be a valid name");
                ccbool = false;
                }
            else if(e.target.id === "ccname" &&  e.target.value.length > 6 &&  e.target.value.length < 255 ){
                ccbool = true;
                localStorage.setItem("ccnameid",e.target.value);
                clearInputError(inputElement);
                bvalidate();
            }
        });




        inputElement.addEventListener("blur", e => {
            if (e.target.id === "workin"  && e.target.value == "" ) {
                setInputError(inputElement, "This is a required question");
                workbool = false;
            }
            else if(e.target.id === "workin" ){
                workbool = true;
                localStorage.setItem("workinid",e.target.value);
                console.log(localStorage.getItem("workinid"));
                clearInputError(inputElement);
                bvalidate();
            }
        });

        // inputElement.addEventListener("blur", e => {
        //     if (e.target.id === "ccname"  && e.target.value == "" ) {
        //         setInputError(inputElement, "This is a required question");
        //     }
        //     else if(e.target.id === "ccname" && e.target.value.length < 255 ){
        //         localStorage.setItem("ccnameid",e.target.value);
        //         console.log(localStorage.getItem("ccnameid"));
        //         clearInputError(inputElement);
        //     }
        // });


        inputElement.addEventListener("blur", e => {
            // console.log(emailregex.test(e.target.value));
            if(e.target.id === "enumber" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                enbool = false;
            }
            else if (e.target.id === "enumber" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                enbool = false;
            }
            else if(e.target.id === "enumber" && e.target.value.length > 0 && e.target.value.length < 6 ){
                
                setInputError(inputElement, "Must be a valid number");
                enbool = false;
                }
            else if(e.target.id === "enumber" &&  e.target.value.length > 6 &&  e.target.value.length < 255 ){
                enbool = true;
                localStorage.setItem("enumberid",e.target.value);
                clearInputError(inputElement);
                bvalidate();
            }
        });



        inputElement.addEventListener("blur", e => {
            if (e.target.id === "brunch"  && e.target.value == "" ) {
                setInputError(inputElement, "This is a required question");
                brunchbool = false;
            }
            else if(e.target.id === "brunch" && e.target.value.length < 255 ){
                brunchbool = true;
                localStorage.setItem("brunchid",e.target.value);
                console.log(localStorage.getItem("brunchid"));
                clearInputError(inputElement);
                bvalidate();
                
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "coname"  && e.target.value == "" ) {
                setInputError(inputElement, "This is a required question");
                coobool = false; 
            }
            else if(e.target.id === "coname" && e.target.value.length < 255 ){
                coobool = true; 
                localStorage.setItem("conameid",e.target.value);
                console.log(localStorage.getItem("conameid"));
                clearInputError(inputElement);
                bvalidate();
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "btname"  && e.target.value == "" ) {
                setInputError(inputElement, "This is a required question");
                btbool = false; 
            }
            else if(e.target.id === "btname" && e.target.value.length < 255 ){
                btbool = true; 
                localStorage.setItem("btnameid",e.target.value);
                console.log(localStorage.getItem("btnameid"));
                clearInputError(inputElement);
                bvalidate();
            }
        });

        inputElement.addEventListener("blur", e => {
            // console.log(emailregex.test(e.target.value));
            if(e.target.id === "tname" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                tbool = false; 
            }
            else if (e.target.id === "tname" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                tbool = false; 
            }
            else if(e.target.id === "tname" && e.target.value.length > 0 && e.target.value.length < 3 ){
                
                setInputError(inputElement, "Must be a valid name");
                tbool = false; 
                }
            else if(e.target.id === "tname" &&  e.target.value.length > 3 &&  e.target.value.length < 255 ){
                tbool = true; 
                localStorage.setItem("tnameid",e.target.value);
                clearInputError(inputElement);
                bvalidate();
            }
        });


        // inputElement.addEventListener("blur", e => {
        //     if (e.target.id === "tname"  && e.target.value == "" ) {
        //         setInputError(inputElement, "This is a required question");
        //     }
        //     else if(e.target.id === "tname" && e.target.value.length < 255 ){
        //         localStorage.setItem("tnameid",e.target.value);
        //         console.log(localStorage.getItem("tnameid"));
        //         clearInputError(inputElement);
        //     }
        // });
        // inputElement.addEventListener("blur", e => {
        //     if (e.target.id === "sfilename"  && e.target.value == "" ) {
        //         setInputError(inputElement, "This is a required question");
        //     }
        //     else if(e.target.id === "sfilename"){
        //         const reder = new FileReader();
        //         localStorage.setItem("sfilenameid",reder.result);
        //         console.log(localStorage.getItem("sfilenameid"));
        //         clearInputError(inputElement);
        //     }
        // });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "sfilename"  && e.target.value == "" ) {
                setInputError(inputElement, "This is a required question");
                spubool = false;
            }
            else if(e.target.id === "sfilename"){
                spubool = true;
                document.querySelector("#sfilename").addEventListener("change", function() {
                    const reader = new FileReader();
                    reader.addEventListener("load", () => {
                        localStorage.setItem("uplo1", reader.result);
                    })
                    reader.readAsDataURL(this.files[0]);
        
                })
                clearInputError(inputElement);
                bvalidate();
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "dfilename"  && e.target.value == "" ) {
                setInputError(inputElement, "This is a required question");
                dpubool = false;
            }
            else if(e.target.id === "dfilename"){
                dpubool = true;
                document.querySelector("#dfilename").addEventListener("change", function() {
                    const reader1 = new FileReader();
                    reader1.addEventListener("load", () => {
                        localStorage.setItem("uplo1", reader1.result);
                    })
                    reader1.readAsDataURL(this.files[0]);
        
                })
                clearInputError(inputElement);
                bvalidate();
            }
        });

        
        // inputElement.addEventListener("blur", e => {
        //     if (e.target.id === "dfilename"  && e.target.value == "" ) {
        //         setInputError(inputElement, "This is a required question");
        //         dpubool = false;
        //     }
        //     else if(e.target.id === "dfilename"){
        //         dpubool = false;
        //         console.log("sdf");
        //         document.querySelector("#dfilename").addEventListener("change", function() {
        //             const reader1 = new FileReader();
        //             reader1.addEventListener("load", () => {
        //                 localStorage.setItem("uplo2", reader1.result);
        //             })
        //             reader1.readAsDataURL(this.files[0]);
        
        //         })

        //         clearInputError(inputElement);
        //         bvalidate();
        //     }
        // });
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "tfees" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                tfeesbool = false;
            }
            else if (e.target.id === "tfees" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                tfeesbool = false;
            }
            else if(e.target.id === "tfees" && !(feesregex.test(e.target.value))){
                tfeesbool = false;
                setInputError(inputElement, "Must be a valid number");
                }
            
            else if(e.target.id === "tfees"){
                tfeesbool = true;
                localStorage.setItem("tfeesid",e.target.value);
                console.log(localStorage.getItem("tfeesid"));
                clearInputError(inputElement);
                bvalidate();
                
            }
        });

        // inputElement.addEventListener("blur", e => {
        //     // console.log(emailregex.test(e.target.value));
        //     if(e.target.id === "tfees" && !spaceregex.test(e.target.value)){
        //         setInputError(inputElement, "Please remove leading and trailing spaces");
        //         tfeesbool = false;
        //     }
        //     else if (e.target.id === "tfees" && e.target.value=="" ) {
        //         tfeesbool = false;
        //         setInputError(inputElement, "This is a required question");
        //     }
        //     else if(e.target.id === "tfees" && e.target.value.length > 0 && e.target.value.length < 6 ){
        //         tfeesbool = false;
        //         setInputError(inputElement, "Must be a valid number");
        //         }
        //     else if(e.target.id === "tfees" &&  e.target.value.length > 6 &&  e.target.value.length < 255 ){
        //         tfeesbool = true;
        //         localStorage.setItem("tfeesid",e.target.value);
        //         clearInputError(inputElement);
        //         bvalidate();
        //     }
        // });

        inputElement.addEventListener("blur", e => {
            if(e.target.id === "pfees" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                pfeesbool = false;
            }
            else if (e.target.id === "pfees" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                pfeesbool = false;
            }
            else if(e.target.id === "pfees" && !(feesregex.test(e.target.value))){
                pfeesbool = false;
                setInputError(inputElement, "Must be a valid number");
                }
            
            else if(e.target.id === "pfees"){
                pfeesbool = true;
                localStorage.setItem("pfeesboolid",e.target.value);
                console.log(localStorage.getItem("pfeesboolid"));
                clearInputError(inputElement);
                bvalidate();
                
            }
        });

        // inputElement.addEventListener("blur", e => {
        //     // console.log(emailregex.test(e.target.value));
        //     if(e.target.id === "pfees" && !spaceregex.test(e.target.value)){
        //         setInputError(inputElement, "Please remove leading and trailing spaces");
        //         pfeesbool = false;
        //     }
        //     else if (e.target.id === "pfees" && e.target.value=="" ) {
        //         setInputError(inputElement, "This is a required question");
        //         pfeesbool = false;
        //     }
        //     else if(e.target.id === "pfees" && e.target.value.length > 0 && e.target.value.length < 6 ){
                
        //         setInputError(inputElement, "Must be a valid number");
        //         pfeesbool = false;
        //         }
        //     else if(e.target.id === "pfees" &&  e.target.value.length > 6 &&  e.target.value.length < 255 ){
        //         pfeesbool = true;
        //         localStorage.setItem("pfeesid",e.target.value);
        //         clearInputError(inputElement);
        //         bvalidate();
        //     }
        // });




        inputElement.addEventListener("blur", e => {
            if (e.target.id === "ptype"  && e.target.value == "" ) {
                setInputError(inputElement, "This is a required question");
                ptypebool = false;
            }
            else if(e.target.id === "ptype"){
                ptypebool = true;
                localStorage.setItem("ptypeid",e.target.value);
                console.log(localStorage.getItem("ptypeid"));
                clearInputError(inputElement);
                bvalidate();
            }
        });


        inputElement.addEventListener("blur", e => {
            // console.log(emailregex.test(e.target.value));
            if(e.target.id === "otno" && !spaceregex.test(e.target.value)){
                setInputError(inputElement, "Please remove leading and trailing spaces");
                otnotbool = false;
            }
            else if (e.target.id === "otno" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
                otnotbool = false;
            }
            else if(e.target.id === "otno" && e.target.value.length > 0 && e.target.value.length < 6 ){
                
                setInputError(inputElement, "Must be a valid number");
                otnotbool = false;
                }
            else if(e.target.id === "otno" &&  e.target.value.length > 6 &&  e.target.value.length < 255 ){
                otnotbool = true;
                localStorage.setItem("otnoid",e.target.value);
                clearInputError(inputElement);
                bvalidate();
            }
        });



        inputElement.addEventListener("blur", e => {
            if (e.target.id === "adate"  && e.target.value == "" ) {
                setInputError(inputElement, "This is a required question");
                
                adbool = false;
            }
            else if(e.target.id === "adate"){
                adbool = true;
                localStorage.setItem("adateid",e.target.value);
                console.log(localStorage.getItem("adateid"));
                clearInputError(inputElement);
                bvalidate();
            }
        });

        inputElement.addEventListener("blur", e => {
            // console.log(emailregex.test(e.target.value));
            if(e.target.id === "rno" && !spaceregex.test(e.target.value)){
                rnobool = false;
                setInputError(inputElement, "Please remove leading and trailing spaces");
            }
            else if (e.target.id === "rno" && e.target.value=="" ) {
                rnobool = false;
                setInputError(inputElement, "This is a required question");
            }
            else if(e.target.id === "rno" && e.target.value.length > 0 && e.target.value.length < 6 ){
                rnobool = false;
                setInputError(inputElement, "Must be a valid number");
                }
            else if(e.target.id === "rno" &&  e.target.value.length > 6 &&  e.target.value.length < 255 ){
                rnobool = true;
                localStorage.setItem("rnoid",e.target.value);
                clearInputError(inputElement);
                bvalidate();
            }
        });




        inputElement.addEventListener("blur", e => {
            if (e.target.id === "fname"  && e.target.value == "" ) {
                setInputError(inputElement, "This is a required question");
            }
            else if(e.target.id === "fname"){
                clearInputError(inputElement);
            }
        });

        

    

        

        
  
  
    })
});

function setInputError(inputElement, message) {
    inputElement.classList.add("border", "border-danger");
    inputElement.parentElement.parentElement.querySelector(".form__input-error-message").textContent = message;
    // inputElement.parentElement.parentElement.parentElement.parentElement.querySelector(".card").classList.add("border", "border-danger");
}



function bvalidate() {
    console.log(fnamebool, emailbool, genbool, dobbool, mnobool, gnobool, addbool, citybool, pinbool);
        if(fnamebool && emailbool && genbool && dobbool && mnobool && gnobool && addbool && citybool && pinbool ){
            const elem = document.getElementById('mybtn');
            elem.classList.remove("disabled");
            
            const elem2 = document.getElementById('myform');
            elem2.setAttribute("action","page2.html")

        }

        console.log(workbool, ccbool, enbool);
        if(workbool && ccbool && enbool){
            const elem3 = document.getElementById('mybtn');
            elem3.classList.remove("disabled");
            
            const elem4 = document.getElementById('myform');
            elem4.setAttribute("action","page3.html")

        }

        console.log(brunchbool, coobool, btbool, tbool, spubool, dpubool);
        if(brunchbool && coobool  && btbool && tbool && spubool && dpubool){
            const elem5 = document.getElementById('mybtn');
            elem5.classList.remove("disabled");
            
            const elem6 = document.getElementById('myform');
            elem6.setAttribute("action","page4.html")

        }
        console.log(tfeesbool, pfeesbool, ptypebool, otnotbool, adbool, rnobool);
        if(tfeesbool && pfeesbool && ptypebool && otnotbool && adbool && rnobool){
            const elem7 = document.getElementById('mybtn');
            elem7.classList.remove("disabled");
            
            const elem8 = document.getElementById('myform');
            elem8.setAttribute("action","review.html")

        }
}

document.addEventListener("DOMContentLoaded", () => {

    if( window.location.pathname == "/review.html"){
        document.getElementById("emailid-rvw").textContent=localStorage.getItem("emailid");
        document.getElementById("fullnameid-rvw").textContent=localStorage.getItem("fullnameid");
        document.getElementById("genid-rvw").textContent=localStorage.getItem("genid");
        document.getElementById("dateobid-rvw").textContent=localStorage.getItem("dateobid");
        

        document.getElementById("snumberid-rvw").textContent=localStorage.getItem("snumberid");
        document.getElementById("pnumberid-rvw").textContent=localStorage.getItem("pnumberid");
        document.getElementById("addrid-rvw").textContent=localStorage.getItem("addrid");
        document.getElementById("cityeid-rvw").textContent=localStorage.getItem("cityeid");

        document.getElementById("pincoid-rvw").textContent=localStorage.getItem("pincoid");
        document.getElementById("workinid-rvw").textContent=localStorage.getItem("workinid");
        document.getElementById("ccnameid-rvw").textContent=localStorage.getItem("ccnameid");
        document.getElementById("enumberid-rvw").textContent=localStorage.getItem("enumberid");

        document.getElementById("brunchid-rvw").textContent=localStorage.getItem("brunchid");
        document.getElementById("conameid-rvw").textContent=localStorage.getItem("conameid");
        document.getElementById("btnameid-rvw").textContent=localStorage.getItem("btnameid");
        document.getElementById("tnameid-rvw").textContent=localStorage.getItem("tnameid");

        document.getElementById("uplo1-rvw").textContent=localStorage.getItem("uplo1");
        document.getElementById("uplo2-rvw").textContent=localStorage.getItem("uplo2");
        document.getElementById("tfeesid-rvw").textContent=localStorage.getItem("tfeesid");
        document.getElementById("pfeesid-rvw").textContent=localStorage.getItem("pfeesid");

        document.getElementById("ptypeid-rvw").textContent=localStorage.getItem("ptypeid");
        document.getElementById("otnoid-rvw").textContent=localStorage.getItem("otnoid");
        document.getElementById("adateid-rvw").textContent=localStorage.getItem("adateid");
        document.getElementById("rnoid-rvw").textContent=localStorage.getItem("rnoid");


        
    }

    



    

});






//  const form = document.querySelector("form"),
//         nextBtn = form.querySelector(".btn.nextBtn.btn-primary.submit.p-3")

//         nextBtn.addEventListener("click", ()=> {
//             allInput.forEach(input => {
//                 if(input.value != ""){
//                     form.classList.add('secActive');
//                 }else{
//                     form.classList.remove('secActive');
//                 }
//             })
//         })
// nextBtn.addEventListener("click", ()=> {
//     allInput.forEach(input => {
//         if(input.value != ""){
//             form.classList.add('secActive');
//         }else{
//             form.classList.remove('secActive');
//         }
//     })
// })

// backBtn.addEventListener("click", () => form.classList.remove('secActive'));