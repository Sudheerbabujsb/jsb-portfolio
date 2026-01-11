const admin = require("firebase-admin");
admin.initializeApp();

const { onValueCreated } =
  require("firebase-functions/v2/database");

/**
 * Gen-2 RTDB trigger
 */
exports.sendPushOnNewMessage = onValueCreated(
  "/messages/{msgId}",
  async (event) => {
    const msg = event.data.val();
    if (!msg || !msg.uid) return;

    const usersSnap =
      await admin.database().ref("users").once("value");

    const tasks = [];

    usersSnap.forEach((user) => {
      const u = user.val();
      if (user.key !== msg.uid && u.fcmToken) {
        tasks.push(
          admin.messaging().send({
            token: u.fcmToken,
            notification: {
              title: "New message 💚",
              body: msg.text || "New message received"
            }
          })
        );
      }
    });

    return Promise.all(tasks);
  }
);
