import { useParams } from 'react-router-dom';

function UniversityDetails() {
  const { id } = useParams(); // Get university ID from URL
  // Fetch university details based on `id`
  
  return (
    <div>
      {}
    </div>
  );
}

export default UniversityDetails;
