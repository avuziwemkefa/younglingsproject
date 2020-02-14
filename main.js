// Initialize Firebase 

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBVsNy6YrO8w0PTzfJOJisXpDl00aABd24",
    authDomain: "vuvu-35135.firebaseapp.com",
    databaseURL: "https://vuvu-35135.firebaseio.com",
    projectId: "vuvu-35135",
    storageBucket: "vuvu-35135.appspot.com",
    messagingSenderId: "28537116989",
    appId: "1:28537116989:web:c88eeff75ef300dc480d54",
    measurementId: "G-L37TNPBGZQ"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, subject, email, phone, message);
  
   // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, subject, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      subject:subject,
      email:email,
      phone:phone,
      message:message
    });
  }
