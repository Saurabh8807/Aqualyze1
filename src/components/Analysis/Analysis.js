// Analysis.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './Chart.js/Chart';
import './Analysis.css';
import Navbar from '../Navbar/Navbar2';

const fieldIds = [1, 2, 3];

const fetchData = async (fieldId) => {
  const response = await axios.get(
    `https://environment-monitoring.onrender.com/fields-data/${fieldId}`
  );
  return response.data;
};

const initialFieldData = fieldIds.reduce((acc, fieldId) => {
  acc[`field${fieldId}Data`] = [];
  acc[`field${fieldId}Id`] = [];
  return acc;
}, {});

const Analysis = () => {
  const [fieldData, setFieldData] = useState(initialFieldData);

  useEffect(() => {
    const fetchingData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));

      for (const fieldId of fieldIds) {
        const response = await fetchData(fieldId);
        const fieldValues = response.map((item) =>
          item[`field${fieldId}`].trim()
        );
        const fieldIdValues = response.map((item) => item.entry_id);

        setFieldData((prevData) => ({
          ...prevData,
          [`field${fieldId}Data`]: fieldValues,
          [`field${fieldId}Id`]: fieldIdValues,
        }));
      }
    };

    fetchingData();
  }, [fieldData]);

  return (
    <>
      <div className="analyze">
        <Navbar />
        <div className="chart-container">
          {fieldIds.map((fieldId) => (
            <Chart
              key={fieldId}
              fieldId={fieldData[`field${fieldId}Id`]}
              fieldData={fieldData[`field${fieldId}Data`]}
              fieldName={
                fieldId === 1
                  ? 'pH Value'
                  : fieldId === 2
                  ? 'TDS Value'
                  : fieldId === 3
                  ? 'Turbidity'
                  : ''
              }
              fieldColor={
                fieldId === 1
                  ? 'green'
                  : fieldId === 2
                  ? 'aqua'
                  : fieldId === 3
                  ? 'brown'
                  : ''
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Analysis;
