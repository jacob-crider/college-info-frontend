import { Link } from 'react-router-dom';

const colleges = [
  // Sample data
  { id: 1, name: 'Harvard University', location: 'Cambridge, MA', image: '/path-to-image' },
  { id: 2, name: 'Stanford University', location: 'Stanford, CA', image: '/path-to-image' }
  // Add more college data here
];

const CollegeList = () => {
  return (
    <div className="college-list">
      {colleges.map((college) => (
        <div className="college-card" key={college.id}>
          <img src={college.image} alt={college.name} />
          <h3>{college.name}</h3>
          <p>{college.location}</p>
          <Link to={`/college/${college.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default CollegeList;
