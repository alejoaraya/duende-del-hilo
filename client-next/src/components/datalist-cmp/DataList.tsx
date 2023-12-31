// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { SwitchViewMode } from './components';
// import { viewModeType } from './constants';
// import './datalist-cmp.scss';

import { viewModeType } from "./constants";

interface Props {
  children?: JSX.Element;
  title?: string;
  setViewMode?: string;
  element?: JSX.Element;
  grid?: JSX.Element;
  table?: JSX.Element;
  loading?: boolean;
}
function DataListFilters({ children }: Props) {
  return <div>{children}</div>;
}

function DataListHeader({ children }: Props) {
  return <div className='datalist-component-header-middle'>{children}</div>;
}

export function DataList({
  children,
  title,
  setViewMode,
  element,
  grid,
  table,
  loading = false,
}: Props) {
  // const [viewType, setViewType] = useState(
  //   s => setViewMode ?? viewModeType.TABLE
  // );
  return (
    <section className='datalist-component'>
      <header className='datalist-component-header'>
        <div className='datalist-component-header-top'>
          <h1 className='text-5xl font-semibold text-secondary'>{title}</h1>
          {/* {!element && (
            <SwitchViewMode currentType={viewType} handleChange={setViewType} />
          )} */}
        </div>
        {children}
      </header>
      <div className='datalist-component-content'>{element}</div>
    </section>
  );
}

DataList.Header = DataListHeader;
DataList.Filters = DataListFilters;
