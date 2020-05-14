import React from 'react';

import './job-card.styles.css';

const JobCard = ({company, position }) => (
<div className='card'>
<h1>{company.toUpperCase()}</h1>
<h2>{position}</h2>
</div>
)

export default JobCard;