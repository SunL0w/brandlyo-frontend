## Front-end for brandly Saas

:new: Front-end for the Saas

PLEASE CHECK THE MVP, THIS BRANCH IS NOT MAINTENED : [https://github.com/SunL0w/brandly-frontend/tree/mvp](https://github.com/SunL0w/brandly-frontend/tree/mvp)

## Dependencies :

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

---

_**Full dependencies with versions :**_

```plaintext
├── @ant-design/dark-theme@2.0.2
├── @ant-design/icons@5.0.1
├── @craco/craco@6.4.5
├── @testing-library/jest-dom@5.16.5
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── antd@4.24.8
├── axios@1.3.5
├── bindings@1.5.0
├── craco-less@2.0.0
├── file-uri-to-path@1.0.0
├── less-loader@11.1.0
├── less@4.1.3
├── nan@2.17.0
├── react-dom@18.2.0
├── react-intl@6.3.2
├── react-redux@8.0.5
├── react-router-dom@6.10.0
├── react-scripts@4.0.3
├── react@18.2.0
├── redux-thunk@2.4.2
├── redux@4.2.1
└── web-vitals@2.1.4
```

---

You can list with :

```plaintext
npm list --depth=0
```

---

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
