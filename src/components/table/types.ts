import { JSX } from 'solid-js/jsx-runtime';

export type TableProps = {
  title?: string;
  header: TableHeader[];
  data: any[];
  pageSize?: number;
  isTableBordered?: boolean;
  isTableStriped?: boolean;
  isSearchEnabled?: boolean;
  isExportEnabled?: boolean;
};
export type TableHeader = {
  name: string;
  title: string;
  type: 'text' | 'number' | 'control';
  controlType?: 'danger' | 'primary' | 'secondary';
  width?: number;
  css?: string;
  cssClass?: string;
  element?: JSX.Element;
};
export type Sorter = {
  property: string;
  isDesecnding?: boolean;
};
