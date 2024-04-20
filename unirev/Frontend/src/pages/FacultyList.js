import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FacultyList() {
    const universities = [
        { id: 1, name: 'Harvard University', departments: ['Computer Science', 'Philosophy', 'Physics'] },
        { id: 2, name: 'Stanford University', departments: ['Engineering', 'Mathematics', 'History'] }
    ];

    const [selectedUniversityId, setSelectedUniversityId] = useState(null);

    const toggleDropdown = (id) => {
        setSelectedUniversityId(selectedUniversityId === id ? null : id);
    };

    return (
        <div>
            <h1>Universities</h1>
            {universities.map((uni) => (
                <div key={uni.id}>
                    <button onClick={() => toggleDropdown(uni.id)}>{uni.name}</button>
                    {selectedUniversityId === uni.id && (
                        <ul>
                            {uni.departments.map((dept, index) => (
                                <li key={index}>
                                    <Link to={`/faculty/${uni.id}/department/${dept}`}>
                                        {dept}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FacultyList;
