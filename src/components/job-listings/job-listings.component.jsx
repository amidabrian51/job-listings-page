import React from 'react';
// import data from '../../data/data.json';
import './job-listing.styles.css';
import JobCard from '../job-card/job-card.component.jsx/job-card.component';
import { Component } from 'react';


class JobListing extends Component {
    constructor() {
        super();
        this.state = {
            jobs: []
        }
    };

    componentDidMount() {
        fetch('/data.json')
        .then(response => response.json())
        .then((data) => {
            console.log('data:', data);
          })
       
    }
    render() {
        return (
            <div>
                {this.state.jobs.map(({id, ...otherJobProps}) =>(
                <JobCard key={id} {...otherJobProps} />
                ))}
            </div>

        )
    }
}

export default JobListing;