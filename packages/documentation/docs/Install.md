# Installing your own instance

Requirements

* A [Google Firebase project](https://console.firebase.google.com/)
  * A Firebase Web App
  * [FireBase Hosting enabled](https://firebase.google.com/docs/hosting/quickstart#install-cli)
  * [Cloud Firestore](https://firebase.google.com/docs/firestore/quickstart)
* Firebase CLI tools locally
* [Create an application](https://console.cloud.google.com/appengine/start/create)
* Your project must be on the Blaze pay as you go pricing plan


Deploying:

```
firebase use <my-new-project-id>
firebase deploy --only hosting # We are skipping functions atm due to issues
```

**:warning: Issues:**

* There is an issue with the database URL in the functions. Requires further investigation.