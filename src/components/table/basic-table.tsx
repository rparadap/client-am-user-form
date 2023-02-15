import {
  arraySorter,
  arraySplitter,
  arrayFilter,
} from '../../shared/services/array-services';
import { createEffect, createSignal, For, Index } from 'solid-js';
import { Sorter, TableProps } from './types';
import { exportToExcel } from '../../shared/services/excel-services';

const BasicTableComponent = ({
  title = 'Table',
  header,
  data,
  pageSize = 20,
  isTableBordered = false,
  isTableStriped = false,
  isSearchEnabled = false,
  isExportEnabled = false,
}: TableProps) => {
  const [searchKeyword, setSearchKeyword] = createSignal('');
  const [sorter, setSorter] = createSignal<Sorter>({
    property: '',
    isDesecnding: false,
  });
  const [dataSplitted, setDataSplitted] = createSignal(
    arraySplitter(data, pageSize)
  );
  const [currentPage, setCurrentPage] = createSignal(0);
  const [pageData, setPageData] = createSignal(dataSplitted()[0]);
  const sortData = (property: string) => {
    setSorter({
      property: property,
      isDesecnding: !sorter().isDesecnding,
    });
  };
  const prepareTabeData = () => {
    setCurrentPage(0);
    const arrayFilterd = arrayFilter(data, searchKeyword());
    const arraySorted = arraySorter(
      arrayFilterd,
      sorter().property,
      sorter().isDesecnding
    );

    return arraySorted;
  };
  const getTableRowType = (name: string) => {
    const headerElement = header.find((e) => e.name === name);

    return headerElement
      ? {
          type: headerElement.type,
          controlType: headerElement.controlType,
        }
      : {
          type: 'text',
        };
  };
  const renderControlButton = (type: string, row: any) => {
    return (
      <button
        class={`btn btn-${type} py-1 m-auto`}
        onClick={() => {
          console.log(row);
        }}
      >
        Detalle
      </button>
    );
  };
  const getRowContent = (key: string, value: string, row: any) => {
    const rowType = getTableRowType(key);
    switch (rowType.type) {
      case 'control':
        return (
          <td style="vertical-align: middle;">
            {renderControlButton(rowType.controlType || 'primary', row)}
          </td>
        );
      default:
        return <td style="vertical-align: middle;">{value}</td>;
    }
  };
  /**
   * Effect that listens to changes in pagination
   */
  createEffect(() => {
    setPageData(dataSplitted()[currentPage()]);
  });
  /**
   * Effect that listens to changes in sorting behaviour
   */
  createEffect(() => {
    const tableDataPrepared = prepareTabeData();
    setDataSplitted(arraySplitter(tableDataPrepared, pageSize));
  });
  /**
   * Effect that listens to searchbar
   */
  createEffect(() => {
    const tableDataPrepared = prepareTabeData();
    setDataSplitted(arraySplitter(tableDataPrepared, pageSize));
  });

  return (
    <>
      <div class="card card-flush w-100">
        <div class="card-header">
          <h1 class="card-title">{title}</h1>
        </div>
        {(isSearchEnabled || isExportEnabled) && (
          <div class="card-header align-items-center py-5 gap-2 gap-md-5">
            <div class="card-title">
              <div class="d-flex align-items-center position-relative my-1">
                {isSearchEnabled && (
                  <input
                    type="text"
                    value={searchKeyword()}
                    onInput={(e) => {
                      setSearchKeyword(
                        (e.target as HTMLInputElement).value || ''
                      );
                    }}
                    data-kt-filter="search"
                    class="form-control form-control-solid w-250px ps-14"
                    placeholder="Buscar..."
                  />
                )}
              </div>
            </div>
            <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
              {isExportEnabled && (
                <button
                  type="button"
                  class="btn btn-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  onClick={() => {
                    const tableDataPrepared = prepareTabeData();
                    exportToExcel(tableDataPrepared, title);
                  }}
                >
                  Exportar
                </button>
              )}
            </div>
          </div>
        )}

        <div class="card-body">
          <div class="table-responsive table-loading">
            {/* <div class="table-loading-message">Loading...</div> */}
            <table
              class={`table ${isTableBordered && 'border'} ${
                isTableStriped && 'table-striped'
              } gy-7 gs-7`}
            >
              <thead>
                <tr class="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                  <Index each={header}>
                    {(header) => {
                      const { name, title, width, css, cssClass } = header();
                      const minColumWidth = width && `min-width: ${width}px;`;

                      return (
                        <th
                          role="button"
                          class={`custom-table-header text-capitalize ${
                            sorter().property === name
                              ? sorter().isDesecnding
                                ? 'table-sort-desc'
                                : 'table-sort-asc'
                              : ''
                          } ${cssClass}`}
                          style={`${minColumWidth} ${css} `}
                          onclick={() => {
                            sortData(name);
                          }}
                        >
                          {title}
                        </th>
                      );
                    }}
                  </Index>
                </tr>
              </thead>
              <tbody>
                <Index each={pageData()}>
                  {(row) => (
                    <tr>
                      {Object.entries(row()).map((data) => {
                        const [key, value] = data;
                        const rowContent = getRowContent(key, value, row());

                        return rowContent;
                      })}
                    </tr>
                  )}
                </Index>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card-footer text-right">
          <div class="row">
            <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
              <div class="dataTables_length">
                {/* <label>
                  <select
                    name="kt_datatable_both_scrolls_length"
                    aria-controls="kt_datatable_both_scrolls"
                    class="form-select form-select-sm form-select-solid"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </label> */}
              </div>
            </div>
            <div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
              <div class="dataTables_paginate paging_simple_numbers">
                <For each={dataSplitted()}>
                  {(_row, i) => (
                    <button
                      onClick={() => {
                        setCurrentPage(i());
                      }}
                      class={`btn ${
                        currentPage() === i()
                          ? 'btn-bg-primary btn-color-white'
                          : 'btn-bg-light btn-color-gray-400'
                      } px-3 py-1 mx-1`}
                    >
                      {i() + 1}
                    </button>
                  )}
                </For>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BasicTableComponent;
