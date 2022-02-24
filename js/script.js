 
 const form = document.getElementById('form');
 const name = document.getElementById('name');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const phone = document.getElementById('phone');
 const password = document.getElementById('password');
 const cpassword = document.getElementById('cpassword');
 //const dob = document.getElementById('dob');
 const city = document.getElementById('city');
 const state = document.getElementById('state');
 const country = document.getElementById('country');
 
 //Add EventListener
 form.addEventListener('submit' ,(event) => {
     event.preventDefault();
     validate();
     //setSuccessMsg();
 })
      const sendData =(sRate, count) =>{
          if(sRate == count){
              alert('Registration successfull');
              swal("Great job !" ,"Registration Successfull !","success" );
          }
          else{
            swal("OOP's !" ,"Registration Unsuccessfull !","error" );
          }
      }
      

    //final validation
     const SuccessMsg = () => {
         let formCon = document.getElementsByClassName('form-content');
         var count = formCon.length -1;
         for(var i = 0; i < formCon.length; i++)
         {
             if(formCon[i].className == "form-content success"){
                 var sRate = 0 + i;
                 console.log(sRate);
                 sendData(sRate, count);
             }
             else{
                 return false;
             }
         }
     }
 // more Email Validate
    const isEmail =(emailVal) => {
        var atSymbol = emailVal.indexOf('@');
        if(atSymbol < 1) return false;
        var dot = emailVal.lastIndexOf('.');
        if(dot <= atSymbol +2)return false;
        if(dot === emailVal.length -1) return false;
        return true;
    }
 const validate = () =>{
 const nameVal = name.value.trim();
 const usernameval = username.value.trim();
 const emailVal = email.value.trim();
 const phoneVal = phone.value.trim();
 const passwordVal = password.value.trim();
 const cpasswordVal = cpassword.value.trim();
 //const dobVal = dob.value();
 const cityVal = city.value.trim();
 const stateVal = state.value.trim();
 const countryVal = country.value.trim();
// validate Name
 if(nameVal == ""){
     setErrorMsg(name, '*Invalid Input');
 }
 else if(nameVal.length <= 3){
     setErrorMsg(name, '*Min. 4 Charecter');
 }
 else{
     setSuccessMsg(name);
 }
 // validate Username
 if(usernameval === ""){
     setErrorMsg(username, '*Invalid Input');
 }
 else if(usernameval.length < 4){
     setErrorMsg(username, '*Min. 4 Charecter');
 }
 else{
     setSuccessMsg(username);
 }
 //validate Email
 if(emailVal === ""){
     setErrorMsg(email, '*Invalid Input');
 }
 else if(!isEmail(emailVal)){
     setErrorMsg(emailVal, '*Not a Valid Email');
 }
 else{
     setSuccessMsg(email);
 }
 // validate phone
 if(phoneVal === ""){
     setErrorMsg(phone, '*Invalid Input');
 }
 else if(phoneVal.length != 10){
     setErrorMsg(phone, '*Input 10 digit');
 }
 else{
     setSuccessMsg(phone);
 }
 //validate password
 if(passwordVal === ""){
     setErrorMsg(password, '*Invalid Input');
 }
 else if(passwordVal.length < 6){
     setErrorMsg(password, '*Min. 6 digit');
 }
 else{
     setSuccessMsg(password);
 }
 //validate confirm-password
 if(cpasswordVal === ""){
     setErrorMsg(cpassword, '*Invalid Input');
 }
 else if(passwordVal != cpasswordVal){
     setErrorMsg(cpassword, '*Not Matching')
 }
 else{
     setSuccessMsg(cpassword);
 }
 //validate DOB
 /*if(dobVal == ""){
 //    setErrorMsg(dob, '*Select your DOB');
 }
 else{
  setSuccessMsg(dob);
 }*/
  //validate city
 if(cityVal == ""){
     setErrorMsg(city, '*Enter your City');
 }
 else{
     setSuccessMsg(city);
 }
 //validate state
 if(stateVal == ""){
    setErrorMsg(state, '*Enter your State');
}
else{
    setSuccessMsg(state);
}
 //validate country
 if(countryVal == ""){
    setErrorMsg(country, '*Enter your Contry');
}
else{
    setSuccessMsg(country);
}
//validate Gender

  SuccessMsg();
}

 function setErrorMsg(input, errormsg){
      const formContent =input.parentElement;
      const small = formContent.querySelector('small');
      formContent.className = "form-content error";
      small.innerText = errormsg;
 }
 function setSuccessMsg(input ){
      const formContent = input.parentElement;
      formContent.className = "form-content success";
     
 }
 

/*	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}*/

