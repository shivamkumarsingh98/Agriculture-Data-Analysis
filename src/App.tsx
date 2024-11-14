// App.tsx

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import agricultureData from "../data/agricultureData.json";
import {
  calculateCropDataByYear,
  calculateAverageDataByCrop,
} from "./utils/dataProcessing";
import CropTable from "./components/CoreTable";
import AggregationTable from "./components/AggregationTable";

interface CropData {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": string;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string;
  "Area Under Cultivation (UOM:Ha(Hectares))": string;
}

const App = () => {
  const cropDataByYear = calculateCropDataByYear(agricultureData as CropData[]);
  const averageDataByCrop = calculateAverageDataByCrop(
    agricultureData as CropData[]
  );
  console.log("Agriculture Data:", agricultureData);
  console.log("Processed Crop Data By Year:", cropDataByYear);

  return (
    <MantineProvider theme={theme}>
      <div>
        <h1 style={{ textAlign: "center" }}>Agriculture Data Analysis</h1>
        <CropTable data={cropDataByYear} />
        <br />
        <AggregationTable data={averageDataByCrop} />
      </div>
    </MantineProvider>
  );
};

export default App;
