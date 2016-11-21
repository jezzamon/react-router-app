import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'
import {Button} from 'react-bootstrap'

class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }
  
  constructor(props, context) {
    super(props, context)
    
	this.state = {
		profile: props.auth.getProfile(),
		length: 0,
		title: "SPLASHPAGE typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
	
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  _logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
  }
	componentDidMount() {
    	this._startString();
	}
	
	componentWillUnmount() {
		clearInterval(this._timer);
	}

	_startString() {
		if (this.state.length < this.state.title.length ) {
		  var that = this;
		  this._timer = setTimeout(function() { //name your timeOut so you can clear it
			that.setState({
			  length : that.state.length + 1
			});

			that._startString();
		  }, 100);
		}
	}
	render() {
        return (
			<div className="Image">
				<h1>{this.state.title.substring(0, this.state.length)}</h1>
				<Button onClick={this._logout.bind(this)}>Logout</Button>
			</div>);
	}
}
export default Home;
