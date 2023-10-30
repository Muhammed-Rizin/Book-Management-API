module.exports = {
    appName: process.env.appName,
    port: process.env.port || 3000,
    mongoURI: process.env.mongoURI || "mongodb://localhost:27017/nodeBackendDeveloperChallenge",

}