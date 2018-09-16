import React, {Component} from 'react';
import {Button, Input, Row} from 'react-materialize';
import Select from 'react-select'
import {Redirect, Link} from 'react-router-dom';
import MapLayout from './MapLayout.js';
import '../../styles/Map.css';


class MapForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            places: [],
            latitude: 50.6219427,
            longitude: 26.2493254,
            zoom: 15,
        };
    }

    componentDidMount() {
        fetch("/map")
            .then(response => response.json())
            .then(
                result => {
                    this.setState({places: result});
                    console.log("state", this.state.places)
                })
    }

    render() {
        const options = [
            {value: 'RESTAURANT', label: 'Restaurant'},
            {value: 'PARKING', label: 'Parking'},
            {value: 'HOTEL', label: 'Hotel'}
        ];
        return (
            <div class="row">
                <div class="col s2">
                    <Row>
                        <Input
                            id="place_name"
                            type="text"
                            placeholder="What are you looking for?"
                            onChange={e => this.handleChange("place_name", e.target.value)}
                        />
                        <Button id="search" waves="light" /*onClick={}*/>Search</Button>
                    </Row>
                    <Row>
                        <Select placeholder="Place Filter" className="select-form" options={options}/>
                    </Row>
                    {this.state.places.map(place => (
                        <Row key={place.name} className="place-row">
                            <a href="/#/map" onClick={() => {
                                this.setState({latitude: place.latitude, longitude: place.longitude, zoom: 18})
                            }}>{place.name}  </a>

                            <p/>
                            <span>Free place: {place.countFreePlaces}</span>
                            <p/>
                            <span>
                                <Link to={`/place/${place.id}`}>Place page</Link>
                            </span>

                        </Row>
                    ))}
                </div>
                <div class="col s10">
                    <MapLayout items={this.state.places}
                               latitude={this.state.latitude}
                               longitude={this.state.longitude}
                               zoom={this.state.zoom}/>
                </div>
            </div>
        );
    }

}

export default MapForm