import React from 'react';

import './job-card.styles.css';

const JobCard = ({company, position, postedAt, contract, location, logo }) => (
<div className="container">
    <div className='card'>
        <div className='companyName'>
            <img src={logo} alt="logo" width="100" height="100"></img>
        </div>
        <div className='content'>
            <h2>{company}</h2>
            <h1>{position}</h1>
            <div className='details'>
                <h3>{postedAt} &#183;</h3>
                <h3>{contract} &#183;</h3>
                <h3>{location}</h3>
            </div>

        </div>
    </div>
</div>
)

export default JobCard;