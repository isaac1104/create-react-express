# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

Also has Google OAuth setup for easy authentication using your Google account.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
npm install
cd client
npm install
cd ..
npm run dev
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

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
GOOGLE_CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET: 'YOUR_GOOGLE_CLIENT_SECRET
MONGODB_URI: 'YOUR_MONGODB_URI
```

If all previous steps were followed correctly, your application should be deployed to Heroku!
