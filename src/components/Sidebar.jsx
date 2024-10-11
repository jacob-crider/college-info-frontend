const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Filter Colleges</h3>
      <input type="range" min="0" max="100000" step="1000" />
      <label>Tuition Range</label>

      <select name="programs">
        <option value="">Programs</option>
        <option value="engineering">Engineering</option>
        <option value="business">Business</option>
        {/* Add more options */}
      </select>
    </div>
  );
}

export default Sidebar;
