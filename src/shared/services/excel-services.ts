import * as XLSX from 'xlsx';

export const exportToExcel = (array: object[], fileName = 'reporte') => {
  const worksheet = XLSX.utils.json_to_sheet(array);
  const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};
