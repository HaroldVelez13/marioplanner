const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification =>{
	return admin.firestore().collection('notifications')
	.add(notification)
	.then(doc=> console.log('Notificacion agregada', doc))
})

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Agrego un proyecto',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: new Date()
    }

    return createNotification(notification);

});

exports.userJoined = functions.firestore.document('users/{userID}').onCreate(doc => {
    const user = doc.data();
    const displayName = `${user.firstName} ${user.lastName}`;

    const notification = {
      content: 'Se unio a la fiesta',
      user: displayName,
      time: new Date()
    };

    return createNotification(notification);

     
});
