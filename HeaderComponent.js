import React, {Component} from 'react'
import Axios from 'axios'

export default class HeaderComponent extends Component {

	constructor(){
		super();
		this.state = {
			country_id: [],
			country_name: [],
			district_id: [],
			district_name: [],
			state_id: [],
			state_name: []
		}

		this.getstate = this.getstate.bind(this);
		this.getdistrict = this.getdistrict.bind(this);
	}

	getstate(e) {
		e.preventDefault();

		const array = {
			country_id: e.target.value
		};
		console.log("sid", array);
		Axios.post(`http://localhost:5000/getstate`, array).then(res => {
			res = res.data;
			const state_id = res.data.state_id;
			const state_name = res.data.state_name;
			this.setState({state_id, state_name})
		});
	}

	getdistrict(e) {
		e.preventDefault();

		const array = {
			state_id: e.target.value
		};

		Axios.post(`http://localhost:5000/getdistrict`, array).then(res => {
			res = res.data;
			const district_id = res.map(r => (r = r.district_id));
			const district_name = res.map(r => (r = r.district_name));
			this.setState({district_id, district_name})
			console.log(this.state);
		});
	}

	render() {
		return(
			<div className="col-md-12" style={{marginTop: 50}}>
				<div className="col-md-4">
					<select onChange={this.getstate}>
						<option>Please select</option>
						<option value="1">India</option>
						<option value="2">USA</option>
					</select>
				</div>
				<div className="col-md-4">
					<select onChange={this.getdistrict}>
						<option>Please select</option>
						{this.state.state_id.map((b, i) => <option value={this.state.state_id[i]}>{this.state.state_name[i]}</option>)}
					</select>
				</div>
				<div className="col-md-4">
					<select>
						<option>Please select</option>
						{this.state.district_id.map((b, i) => <option value={this.state.district_id[i]}>{this.state.district_name[i]}</option>)}
					</select>
				</div>
			</div>
		);
	}
}