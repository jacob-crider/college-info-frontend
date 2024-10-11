// import { useParams } from 'react-router-dom';

const CollegeDetails = () => {
//   const { id } = useParams();
  // Fetch or find college details by ID
  const college = {
    name: 'Harvard University',
    location: 'Cambridge, MA',
    overview: 'Overview of the college...',
    programs: ['Program A', 'Program B'],
    admissions: 'Admissions details here...',
    gallery: ['/path-to-image1', '/path-to-image2']
  };

  return (
    <div className="college-details">
      <img src="/path-to-large-image" alt={college.name} />
      <h2>{college.name}</h2>
      <p>{college.location}</p>

      <div className="tabs">
        <button>Overview</button>
        <button>Programs</button>
        <button>Admissions</button>
        <button>Gallery</button>
      </div>

      <div className="tab-content">
        <h3>Overview</h3>
        <p>{college.overview}</p>
        {/* Render other tab content here */}
      </div>

      <button className="apply-btn">Apply</button>
    </div>
  );
}

export default CollegeDetails;
