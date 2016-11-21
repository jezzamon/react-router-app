import React from 'react';
import { Link } from 'react-router';

class List extends React.Component {
    // Constructor is responsible for setting up props and setting initial state
	//Call super(props) only if you want to access this.props inside the constructor. 
	//React automatically set it for you if you want to access it anywhere else.
	// In this case, we don't really need to pass it, but its a good habit to have
	// This state is no longer needed since data is passed from index.js, but kept as reference
    constructor() {
		super()
	}

    render(){
		console.log(this.props)
		//Get data from route props
		const cars = this.props.route.data;
//         Map through cars and return linked cars
        const carNode = cars.map((car) => {
            return (
                <Link
                    to={"/list/" + car.id}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
					
                </Link>
            )
        });
        return (
			<div className="Image">
			    <h1>Task page</h1>
                <div className="list-group">
                    {carNode}
                </div>
			</div>
        );
    }
}

export default List

