import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider).catch(function (error) {

      if (error.code === 'auth/account-exists-with-different-credential') {
        var pendingCred = error.credential;
        var email = error.email;
        firebaseApp.auth.fetchSignInMethodsForEmail(email).then(function (methods) {
          if (methods[0] === 'password') {

            var password = firebaseApp.promptUserForPassword(); // TODO: implement promptUserForPassword.
            firebaseApp.auth.signInWithEmailAndPassword(email, password).then(function (user) {
              return user.linkWithCredential(pendingCred);
            });
          }
        });
      }
    });
  }
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }
  logout() {
    firebase.auth().signOut();
  }
}
export default AuthService