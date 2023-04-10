## Front-end for brandly Saas


<p align="center">
:new: Front-end for the Saas - Under heavy development :hourglass_flowing_sand:
</p>

\## Dependencies :

\[**Debian**\] :

```plaintext
sudo apt-get install nodejs npm -y
```

\[**Fedora**\] :

```plaintext
sudo dnf install -y nodejs
```

```plaintext
npm install antd axios react-redux redux redux-thunk react-router-dom react-intl antd@4 @ant-design/icons @ant-design/dark-theme less less-loader react-scripts@4
```

```plaintext
npm install @craco/craco@6
```

```plaintext
npm install craco-less less less-loader --legacy-peer-deps
```

## Commands usage

In the project directory, you can run:

```plaintext
npm install
```

### `Start app`

To remove the OpenSSL error :

```plaintext
export NODE_OPTIONS=--openssl-legacy-provider
```

```plaintext
npm start
```

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `Launch the test`

```plaintext
npm test
```

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Build app for production`

```plaintext
npm run build
```

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.