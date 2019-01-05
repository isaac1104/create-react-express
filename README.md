![react logo](https://cdn.iconscout.com/icon/free/png-256/react-2-458175.png) 

# Create-React-Express Boilerplate

## About This Boilerplate

Build your React app using Node and Express with this boilerplate. This boilerplate comes with most of the popular NPM packages, such as `redux`, `react-router-dom`, `axios` and many more out of the box! This boilerplate can effortlessly connect your app to `Mongodb` database and also takes care of authenticating users with `Google OAuth`. (signed-in users' information will be saved into your database)

## 💻 Tech Stack

Here is the list of packages / techs used in the boilerplate.

Full list of dependencies can be found inside `client/package.json` file.

```
Frontend

* React
* Redux
* React-Router
* Redux-Form

Backend

* Node
* Express
* Mongodb
* Passport.js 

```

## 💻 Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
npm install
cd client
npm install
cd ..
```

Inside the config folder on the root directory, create a file named `dev.js` with key/value pairs as below.

```
module.exports = {
  googleClientID: 'YOUR_GOOGLE_CLIENT_ID',
  googleClientSecret: 'YOUR_GOOGLE_CLIENT_SECRET', 
  mongodbURI: 'YOUR_MONGODB_URI', 
  cookieKey: 'RANDOM_STRING',
};
```

After all the setup, on the root directory, run this command to start the app.

``` npm run dev ```

Your app should automatically open on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## 🌎 Deployment (Heroku)

### Create a Git Repo

Once you're ready to deploy, start by making sure your project is a git repository. If so, proceed to the next section, otherwise run the following commands in your terminal:

```
git init
git add .
git commit -m "Initial commit"
```

### Heroku

Make sure that you have a Heroku app created for this project. If so, proceed to the next section, otherwise run the following command in your terminal:

```
heroku create
```

Optionally add an argument for your application's name after `create`, e.g.

```
heroku myawesomeapp
```

### Deploying

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
npm run build
```

2. Add and commit all changes to git

```
git add -A
git commit -m "commit message:
```
3. Push to Heroku

```
git push heroku master
```
4. Make sure to add `Config Vars` for your Heroku app on dashboard under settings
* The key/value pairs must match the content inside your `dev.js` file.

```
GOOGLE_CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID'
GOOGLE_CLIENT_SECRET: 'YOUR_GOOGLE_CLIENT_SECRET'
MONGODB_URI: 'YOUR_MONGODB_URI'
COOKIE_KEY: 'YOUR_COOKIE_KEY'
```

If all previous steps were followed correctly, your application should be deployed to Heroku!
