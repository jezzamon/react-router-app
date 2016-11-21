import React from 'react';
import { browserHistory } from 'react-router';

class ListTask extends React.Component {
    handleRedirect(){
        browserHistory.push('/list');
    }
	
	render(){
        // Car array
        const cars = this.props.route.data;
        // Car Id from param
        const id = this.props.params.id;
        // Filter car with ID
//        const car = cars.filter(car => {
//            if(car.id == id) {
//                return car;
//            }
//        });
//		console.log(car)
		
		//use find instead of filter if you just want one match to return 
		// won't return an array just one obj
		const car = cars.find(car => {
            if(car.id == id) {
                return car;
            } 
        });
		console.log(car)

        return (
            <div className="Image">
                <h1>{car.name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={car.media} alt={car.name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {car.model}</li>
                           <li><strong>Make</strong>: {car.make}</li>
                           <li><strong>Year</strong>: {car.year}</li>
                           <li><strong>Price</strong>: {car.price}</li>
                       </ul>
                    </div>
                </div>
                <div className="col-md-12">
					<button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>
					Go to Cars</button>
	            </div>
            </div>
			
        );
    }
}

export default ListTask