import { firebaseAuth, googleProvider, githubProvider } from './firebase';

class AuthService {
  login(providerName) {

    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }
  logout() {
    firebaseAuth.signOut();
  }
  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider : ${providerName}`);
    }
  }
}
export default AuthService