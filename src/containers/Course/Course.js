import React, { Component } from 'react';

class Course extends Component {

    render () {
        const params = new URLSearchParams(this.props.location.search);
        const title = params.get('title');
        const courseId = this.props.match.params["id"];
        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {courseId}</p>
            </div>
        );
    }
}

export default Course;