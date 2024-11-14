import React from "react";
import { Table } from "@mantine/core";

interface AggregationTableProps {
  data: { crop: string; averageYield: number; averageArea: number }[];
}

const AggregationTable: React.FC<AggregationTableProps> = ({ data }) => (
  <Table style={{ border: "1px solid black" }}>
    <Table.Thead>
      <Table.Tr>
        <Table.Th>Crop</Table.Th>
        <Table.Th>Average Yield of the Crop between 1950-2020</Table.Th>
        <Table.Th>
          Average Cultivation Area of the Crop between 1950-2020
        </Table.Th>
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>
      {data.map((row) => (
        <Table.Tr key={row.crop}>
          <Table.Td>{row.crop}</Table.Td>
          <Table.Td>{row.averageYield.toFixed(3)}</Table.Td>
          <Table.Td>{row.averageArea.toFixed(3)}</Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  </Table>
);

export default AggregationTable;
