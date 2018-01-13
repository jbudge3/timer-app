import React, { Component } from 'react';
import './styles.css';

export default class TimerApp extends Component {
	constructor() {
		super();

		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}

		this.updateTimer = this.updateTimer.bind(this);
	}

	componentWillMount() {
		this.updateTimer();
	}

	updateTimer() {
		const now = new Date();
		const futureDate = new Date('January 18, 2018 15:00:00');
		const diff = futureDate - now;

		const days = diff / 1000 / 60 / 60 / 24;
		const daysParsed = parseInt(days, 0);

		const hours = (diff / 1000 / 60 / 60) - (24 * daysParsed);
		const hoursParsed = parseInt(hours, 0);

		const minutes = (diff / 1000 / 60) - (daysParsed * 24 * 60) - (hoursParsed * 60);
		const minutesParsed = parseInt(minutes, 0);

		const seconds = (diff / 1000) - (daysParsed * 24 * 60 * 60) - (hoursParsed * 60 * 60) - (minutesParsed * 60);
		const secondsParsed = parseInt(seconds, 0)

		this.setState({
			days: daysParsed,
			hours: hoursParsed,
			minutes: minutesParsed,
			seconds: secondsParsed,
		});
	}

	render() {
		const { days, hours, minutes, seconds } = this.state;

		setTimeout(this.updateTimer, 1000);

		return (
			<div className="TimerApp">
				{days} days, {hours} hours : {minutes} minutes : {seconds} seconds
			</div>
		);
	}
}
