import React from 'react'
import Header from './Header'

class App extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			console.log('hi')
      window.gapi.client
        .init({
          clientId:
            '319887011046-r0oq6n1itcpbd0j1bn3kc74jga2lg529.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          // this.onAuthChange(this.auth.isSignedIn.get());
          // this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
	}

	render() {
		return (
			<div>
				<Header />
				<div>App.js</div>
			</div>
		)
	}
}

export default App