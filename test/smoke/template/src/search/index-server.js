import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Logo from './images/1.jpg';
import { a } from './tree-shaking';
// import  '../../common';
import './search.css';
import './search.less';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Text: null
		}
	}

	handleText() {
		import(/* webpackChunkName: "text" */'./text.js').then((Text) => {
			this.setState({
				Text: Text.default
			})
		})
	}

	render() {
		const funcA = a();
		const { Text } = this.state;

		return (
			<div className='search-text'>Search Text test hh
				{Text ? <Text /> : null}
				{funcA}<img src={Logo} onClick={this.handleText.bind(this)} />
			</div>
		)
	}
}
module.exports = Search