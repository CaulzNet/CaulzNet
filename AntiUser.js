Firebaceinfo()
function AntiUser() {
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        alert("Test");
        alert(user);
      } else {
        // No user is signed in.
        window.location.replace("Login.html");
      }
    });
}
+
