import React from "react";
import { Table, Text } from "@mantine/core";

interface CropTableProps {
  data: { year: number; maxCrop: string; minCrop: string }[];
}

const CropTable: React.FC<CropTableProps> = ({ data }) => (
  <Table style={{ border: "1px solid black" }}>
    <Table.Thead style={{ fontWeight: "bold" }}>Table 1</Table.Thead>
    <br />
    <Table.Thead>
      <Table.Tr>
        <Table.Th>Year</Table.Th>
        <Table.Th>Crop with Maximum Production in that Year</Table.Th>
        <Table.Th>Crop with Minimum Production in that Year</Table.Th>
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>
      {data.map((row) => (
        <Table.Tr key={row.year}>
          <Table.Td>{row.year}</Table.Td>
          <Table.Td>{row.maxCrop}</Table.Td>
          <Table.Td>{row.minCrop}</Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  </Table>
);

export default CropTable;
