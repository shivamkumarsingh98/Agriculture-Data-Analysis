interface CropData {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": string;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string;
  "Area Under Cultivation (UOM:Ha(Hectares))": string;
}

interface ProcessedData {
  year: number;
  maxCrop: string;
  minCrop: string;
}

export function calculateCropDataByYear(data: CropData[]): ProcessedData[] {
  const yearsData = data.reduce((acc, item) => {
    const yearMatch = item.Year.match(/(\d{4})/);
    const year = yearMatch ? yearMatch[0] : "0";

    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<string, CropData[]>);

  console.log("Grouped by Year:", yearsData);

  return Object.keys(yearsData).map((year) => {
    const cropsInYear = yearsData[year];

    const validCrops = cropsInYear.filter(
      (item) => parseFloat(item["Crop Production (UOM:t(Tonnes))"]) > 0
    );

    if (validCrops.length === 0) {
      return {
        year: parseInt(year),
        maxCrop: "N/A",
        minCrop: "N/A",
      };
    }

    const maxCrop = validCrops.reduce(
      (max, item) =>
        parseFloat(item["Crop Production (UOM:t(Tonnes))"]) >
        parseFloat(max["Crop Production (UOM:t(Tonnes))"])
          ? item
          : max,
      validCrops[0]
    );
    const minCrop = validCrops.reduce(
      (min, item) =>
        parseFloat(item["Crop Production (UOM:t(Tonnes))"]) <
        parseFloat(min["Crop Production (UOM:t(Tonnes))"])
          ? item
          : min,
      validCrops[0]
    );

    return {
      year: parseInt(year),
      maxCrop: maxCrop["Crop Name"] || "N/A",
      minCrop: minCrop["Crop Name"] || "N/A",
    };
  });
}

export function calculateAverageDataByCrop(data: CropData[]) {
  const cropGroups = data.reduce((acc, item) => {
    const cropName = item["Crop Name"];

    if (!acc[cropName]) {
      acc[cropName] = { totalYield: 0, totalArea: 0, count: 0 };
    }

    const Cropyield =
      parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0;
    const area =
      parseFloat(item["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0;

    acc[cropName].totalYield += Cropyield;
    acc[cropName].totalArea += area;
    acc[cropName].count += 1;

    return acc;
  }, {} as Record<string, { totalYield: number; totalArea: number; count: number }>);

  return Object.keys(cropGroups).map((crop) => ({
    crop,
    averageYield: cropGroups[crop].totalYield / cropGroups[crop].count,
    averageArea: cropGroups[crop].totalArea / cropGroups[crop].count,
  }));
}
