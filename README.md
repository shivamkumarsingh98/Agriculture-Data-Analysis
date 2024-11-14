# Agriculture Data Analysis

## Project Overview

This project is an analytics application designed to process and display the Indian Agriculture dataset provided by NITI Aayog's National Data and Analytics Platform. The dataset includes information on crop production, yield, and cultivation area between 1950 and 2020. The application aggregates this data and displays it in two tables:

1. **Table 1:** Displays the crop with maximum and minimum production for each year from 1950 to 2020.
2. **Table 2:** Displays the average yield and average cultivation area for each crop from 1950 to 2020.

The project is built using **TypeScript** and **Mantine v7** for rendering tables, and it does not rely on external libraries such as Bootstrap, jQuery, or Lodash.

## Features

- **Table 1:** Displays the crop with maximum and minimum production for each year between 1950 and 2020.
- **Table 2:** Shows the average yield and average cultivation area for each crop between 1950-2020.
- **Data Processing:** Handles missing data by treating all missing values as zero and rounds averages to three decimal places.

## Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 14.x or higher)
- **Yarn** (package manager)

### Steps to Install

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shivamkumarsingh98/Agriculture-Data-Analysis.git

   ``bash
   cd Agriculture-Data-Analysis

   ``bash
   yarn install

2. **Run this Project:**
   ```bash
   yarn dev

