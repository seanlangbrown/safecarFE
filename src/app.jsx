import  React  from  'react';
import _ from 'lodash';
import css from './app.css';
import UserInfo from './userInfo.jsx';


class App extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			age: null,
			zip: null,
			make: null,
			model: null,
			year: null,
			rating: null
		};
	}



	render () {

		return(

			<div id="safe-car app" className={css.safeCarApp}>
				Welcome to SafeCarApp
				<div id="user-info">
				  {[this.state.age, this.state.zip].map((x) => '' + x).join(' ')}

					<UserInfo />
				</div>

				<div id="car-info">
					{[this.state.make, this.state.model, this.state.year].map((x) => '' + x).join(' ')}
				</div>

				<div id="car-rating">
					{this.state.rating + ''}
				</div>
			</div>
		);
	}
}



export default App;