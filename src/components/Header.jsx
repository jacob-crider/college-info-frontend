const Header = () => {
  return (
    <header>
      <div className="logo">CollegeInfo</div>
      <input type="text" placeholder="Search Colleges..." className="search-bar" />
      <div className="filters">
        <select name="state">
          <option value="">State</option>
          {/* Add options for states */}
        </select>
        <select name="type">
          <option value="">Type</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>
      <button className="login-btn">Login / Sign Up</button>
    </header>
  );
}

export default Header;
