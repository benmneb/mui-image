import React, { Component } from 'react';
import { render } from 'react-dom';

import { Image } from '../../src';

export default class Demo extends Component {
	render() {
		return (
			<div>
				<h1>
					<code>mui-image</code> Demo
				</h1>
				<Image
					src="https://picsum.photos/1080"
					bgColor="lightgrey"
					width={500}
					height={500}
					showLoading
					// style={{ position: 'absolute' }}
					position="absolute"
				/>
			</div>
		);
	}
}

render(<Demo />, document.querySelector('#demo'));
