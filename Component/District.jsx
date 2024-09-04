import { useEffect, useState } from "react";

export const District = () => {
  const [district, setDistrict] = useState([]);
  const [showData, setShowData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDistrictDetails = async () => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const fetchData = await fetch(
        "https://dev-masterservice.agrozone.in/master/state/districts/v1/1"
      );
      const data = await fetchData.json();
      console.log(data.data.districts); // Adjust if needed
      setDistrict(data.data.districts || []); // Handle possible null or undefined
    } catch (error) {
      console.error("Error fetching district details:", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showData) {
      fetchDistrictDetails();
    }
  }, [showData]); // Fetch data only when showData changes

  const handleShowData = () => {
    setShowData(true); // Trigger data fetch by setting showData to true
  };

  return (
    <div className="table-container">
      <h1>District Details</h1>
      <button onClick={handleShowData}>Show District Details</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {showData && district.length > 0 && (
        <table border>
          <thead>
            <tr>
              <th>districtId</th>
              <th>district</th>
              <th>stateName</th>
              <th>stateId</th>
              <th>isLiveOnMarketPlace</th>
              <th>isLiveForDelivery</th>
            </tr>
          </thead>
          <tbody>
            {district.map((d) => (
              <tr key={d.districtId}>
                <td>{d.districtId}</td>
                <td>{d.district}</td>
                <td>{d.stateName}</td>
                <td>{d.stateId}</td>
                <td>{d.isLiveOnMarketPlace ? "Yes" : "No"}</td>
                <td>{d.isLiveForDelivery ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showData && district.length === 0 && !loading && !error && (
        <p>No district data available</p>
      )}
    </div>
  );
};
