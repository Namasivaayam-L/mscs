import React from 'react';
import ReactCaptcha from 'modern-react-captcha';

const Captcha = (props) => {

	return (
		<div>
			<ReactCaptcha
				charset='ulns'
				length={4}
				color='white'
				bgColor='black'
				reload
				handleSuccess={()=>props.handleSuccess()}
				handleFailure={()=>props.handleFailure()} />
		</div>
	);
}

export default Captcha;