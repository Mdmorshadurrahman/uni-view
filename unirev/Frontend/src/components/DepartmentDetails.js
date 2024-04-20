import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from '@mui/material';

function DepartmentDetails() {
    const { universityId, departmentName } = useParams();
    const [facultyData, setFacultyData] = useState([]);
    console.log(departmentName)
    useEffect(() => {
        const fetchedFacultyData = [
            { universityName: 'Harvard University', facultyName: 'John Doe' },
            { universityName: 'Harvard University', facultyName: 'Jane Smith' }
        ];

        setFacultyData(fetchedFacultyData);
    }, [universityId, departmentName]);

    return (
        <div>
            <h2>Department: {decodeURIComponent(departmentName)}</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>University Name</TableCell>
                            <TableCell>Department Name</TableCell>
                            <TableCell>Faculty Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {facultyData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>{data.universityName}</TableCell>
                                <TableCell>{departmentName}</TableCell>
                                <TableCell>{data.facultyName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default DepartmentDetails;
