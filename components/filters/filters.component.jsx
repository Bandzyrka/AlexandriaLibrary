import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Filters = ({setFilters, filters, pages}) => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="flex w-full items-center justify-around">
      <div className="flex justify-center">
        <div className="xl:w-96">
          <div
            div
            className="input-group relative flex w-full flex-wrap items-stretch"
          >
            <input
              type="search"
              onChange={(event) => setSearchInput(event.target.value)}
              value={searchInput}
              className="form-control relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              onClick={() => setFilters({ ...filters, search: searchInput })}
              className="btn inline-block flex items-center rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition  duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={(event) =>
          setFilters({ ...filters, page: event.selected + 1 })
        }
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />

      <div className="p-10">
        <div className="dropdown relative inline-block">
          <button className="inline-flex items-center rounded bg-gray-300 py-2 px-24 font-semibold text-gray-700">
            <span className="mr-1">Order By</span>
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden pt-1 text-gray-700">
            <li>
              <p onClick={() => setFilters({...filters, ordering: 'downloads'})} className="whitespace-no-wrap block cursor-pointer rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400">
                Downloads - Descending
              </p>
            </li>
            <li>
              <p onClick={() => setFilters({...filters, ordering: '-downloads'})} className="whitespace-no-wrap block cursor-pointer bg-gray-200 py-2 px-4 hover:bg-gray-400">
                Downloads - Ascending{' '}
              </p>
            </li>
            <li>
              <p onClick={() => setFilters({...filters, ordering: 'title'})} className="whitespace-no-wrap block cursor-pointer rounded-b bg-gray-200 py-2 px-4 hover:bg-gray-400">
                Title - Descending
              </p>
            </li>
            <li>
              <p onClick={() => setFilters({...filters, ordering: '-title'})} className="whitespace-no-wrap block cursor-pointer rounded-b bg-gray-200 py-2 px-4 hover:bg-gray-400">
                Title - Ascending
              </p>
            </li>{' '}
          </ul>
        </div>
      </div>

      <select className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 " name="languages" onChange={(e) => setFilters({...filters, languages: e.target.value})}>
        <option value="" selected=""> Language </option>
        <option value="zh">zh</option>
        <option value="yi">yi</option>
        <option value="tl">tl</option>
        <option value="te">te</option>
        <option value="sv">sv</option>
        <option value="sr">sr</option>
        <option value="sl">sl</option>
        <option value="sa">sa</option>
        <option value="ru">ru</option>
        <option value="ro">ro</option>
        <option value="rmr">rmr</option>
        <option value="pt">pt</option>
        <option value="pl">pl</option>
        <option value="oji">oji</option>
        <option value="oc">oc</option>
        <option value="no">no</option>
        <option value="nl">nl</option>
        <option value="nav">nav</option>
        <option value="nap">nap</option>
        <option value="nai">nai</option>
        <option value="nah">nah</option>
        <option value="myn">myn</option>
        <option value="mi">mi</option>
        <option value="lt">lt</option>
        <option value="la">la</option>
        <option value="ko">ko</option>
        <option value="kld">kld</option>
        <option value="kha">kha</option>
        <option value="ja">ja</option>
        <option value="iu">iu</option>
        <option value="it">it</option>
        <option value="is">is</option>
        <option value="ilo">ilo</option>
        <option value="ia">ia</option>
        <option value="hu">hu</option>
        <option value="he">he</option>
        <option value="grc">grc</option>
        <option value="gla">gla</option>
        <option value="gl">gl</option>
        <option value="ga">ga</option>
        <option value="fy">fy</option>
        <option value="fur">fur</option>
        <option value="fr">fr</option>
        <option value="fi">fi</option>
        <option value="fa">fa</option>
        <option value="et">et</option>
        <option value="es">es</option>
        <option value="eo">eo</option>
        <option value="enm">enm</option>
        <option value="en">en</option>
        <option value="el">el</option>
        <option value="de">de</option>
        <option value="da">da</option>
        <option value="cy">cy</option>
        <option value="csb">csb</option>
        <option value="cs">cs</option>
        <option value="ceb">ceb</option>
        <option value="ca">ca</option>
        <option value="brx">brx</option>
        <option value="br">br</option>
        <option value="bgs">bgs</option>
        <option value="bg">bg</option>
        <option value="arp">arp</option>
        <option value="ar">ar</option>
        <option value="ang">ang</option>
        <option value="ale">ale</option>
        <option value="af">af</option>
    </select>




    </div>
  )
}

export default Filters
