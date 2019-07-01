import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 
// Your web app's Firebase configuration
const  config = {
	apiKey: "AIzaSyCVcGw9o7KeWDnK6sVN6jzDq5y2rVw7m5Y",
	authDomain: "hyde-project-mario-plan.firebaseapp.com",
	databaseURL: "https://hyde-project-mario-plan.firebaseio.com",
	projectId: "hyde-project-mario-plan",
	storageBucket: "",
	messagingSenderId: "850072433320",
	appId: "1:850072433320:web:549e7cbc97faeeb3"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase 