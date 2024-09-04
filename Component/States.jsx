import { useEffect, useState } from "react";

export const States = () => {
  const [tableData, showTable] = useState(false);
  const handelOnclick = (e) => {
    showTable(true);
  };
  const [data, setData] = useState([]);
  const [selectedState, setStateData] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://dev-masterservice.agrozone.in/master/states/v1"
  //     );

  //     const data = await response.json();
  //     setData(data.data);
  //     console.log(data.data);
  //   } catch (error) {}
  // };

  //Effi function

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://dev-masterservice.agrozone.in/master/states/v1"
        );

        const data = await response.json();
        setData(data.data.states);
        console.log(data.data.states);
      } catch (error) {}
    })();
  }, []);

  const fetchStateDetails = async (stateId) => {
    try {
      const stateData = await fetch(
        `https://dev-masterservice.agrozone.in/master/state/v1/${stateId}`
      );
      const result = await stateData.json();
      setStateData(result.data);
      console.log(result.data);
    } catch (error) {}
  };
  return (
    <div className="table-container">
      <button onClick={handelOnclick}>States List</button>
      {tableData && (
        <table>
          <thead>
            <tr>
              <th>stateId</th>
              <th>state</th>
              <th>stateCode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((state) => (
              <tr key={state.id}>
                <td>{state.stateId}</td>
                <td>{state.state}</td>
                <td>{state.stateCode}</td>
                <button onClick={() => fetchStateDetails(state.stateId)}>
                  View
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {selectedState && (
        <div>
          <h3>State Details</h3>
          <table border="1">
            <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>State ID</td>
                <td>{selectedState.stateId}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{selectedState.state}</td>
              </tr>
              <tr>
                <td>State Code</td>
                <td>{selectedState.stateCode}</td>
              </tr>
              <tr>
                <td>Is Live On Marketplace</td>
                <td>{selectedState.isLiveOnMarketPlace ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Is Live For Delivery</td>
                <td>{selectedState.isLiveForDelivery ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
