import { EventEmitter, QueryList, TemplateRef, OnInit } from '@angular/core';
import { DataTableColumn } from './column.component';
import { DataTableRow } from './row.component';
import { DataTableParams } from './types';
import { RowCallback } from './types';
import { DataTableTranslations } from './types';
export declare class DataTable implements DataTableParams, OnInit {
    private _items;
    items: any[];
    itemCount: number;
    columns: QueryList<DataTableColumn>;
    rows: QueryList<DataTableRow>;
    expandTemplate: TemplateRef<any>;
    headerTitle: string;
    header: boolean;
    pagination: boolean;
    indexColumn: boolean;
    indexColumnHeader: string;
    rowColors: RowCallback;
    rowTooltip: RowCallback;
    selectColumn: boolean;
    multiSelect: boolean;
    substituteRows: boolean;
    expandableRows: boolean;
    translations: DataTableTranslations;
    selectOnRowClick: boolean;
    autoReload: boolean;
    showReloading: boolean;
    indexColumnVisible: boolean;
    selectColumnVisible: boolean;
    expandColumnVisible: boolean;
    private _sortBy;
    private _sortAsc;
    private _offset;
    private _limit;
    sortBy: string;
    sortAsc: boolean;
    offset: number;
    limit: number;
    page: number;
    readonly lastPage: number;
    sort(sortBy: string, asc: boolean): void;
    ngOnInit(): void;
    private _initDefaultValues();
    private _initDefaultClickEvents();
    _reloading: boolean;
    readonly reloading: boolean;
    reload: EventEmitter<{}>;
    reloadItems(): void;
    private _onReloadFinished();
    _displayParams: DataTableParams;
    readonly displayParams: DataTableParams;
    _updateDisplayParams(): void;
    _scheduledReload: any;
    _triggerReload(): void;
    rowClick: EventEmitter<{}>;
    rowDoubleClick: EventEmitter<{}>;
    headerClick: EventEmitter<{}>;
    cellClick: EventEmitter<{}>;
    private rowClicked(row, event);
    private rowDoubleClicked(row, event);
    private headerClicked(column, event);
    private cellClicked(column, row, event);
    private _getRemoteParameters();
    private sortColumn(column);
    readonly columnCount: number;
    private getRowColor(item, index, row);
    selectedRow: DataTableRow;
    selectedRows: DataTableRow[];
    private _selectAllCheckbox;
    selectAllCheckbox: boolean;
    private _onSelectAllChanged(value);
    onRowSelectChanged(row: DataTableRow): void;
    readonly substituteItems: {}[];
    private _resizeInProgress;
    private resizeColumnStart(event, column, columnElement);
    resizeLimit: number;
    private _isResizeInLimit(columnElement, dx);
}
