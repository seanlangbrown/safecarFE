import React, { Component } from 'react';
import _ from 'lodash'

export default class UserInfo
 extends Component {
 	constructor(props) {
 		super(props)
 	}

 	submitUserInfo() {
 		alert('user info sent');
 	}

	render() {
		return (
			<div id='user-info-component'>
				<div id='user-info-form'>

					<input id='name-input'></input>

					<input id='age-input'></input>

					<input id='sex-input'></input>

					<input id='zip-input'></input>

					<button id='submit-user-info' onClick={this.submitUserInfo}></button>

				</div>

			</div>
		);
	}
}