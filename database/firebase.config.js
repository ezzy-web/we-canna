require('dotenv').config()
const admin = require('firebase-admin')

const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG)

if (admin.apps.length === 0) admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})


module.exports = {
    
}