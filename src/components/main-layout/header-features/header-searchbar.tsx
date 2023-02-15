const SearchbarComponent = () => {
  return (
    <>
      <div
        id="kt_header_search"
        class="header-search d-flex align-items-center w-100 w-lg-300px"
        data-kt-search-keypress="true"
        data-kt-search-min-length="2"
        data-kt-search-enter="enter"
        data-kt-search-layout="menu"
        data-kt-search-responsive="lg"
        data-kt-menu-trigger="auto"
        data-kt-menu-permanent="true"
        data-kt-menu-placement="bottom-start"
      >
        <div
          data-kt-search-element="toggle"
          class="search-toggle-mobile d-flex d-lg-none align-items-center"
        >
          <div class="">
            <span class="svg-icon svg-icon-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.5"
                  x="17.0365"
                  y="15.1223"
                  width="8.15546"
                  height="2"
                  rx="1"
                  transform="rotate(45 17.0365 15.1223)"
                  fill="currentColor"
                />
                <path
                  d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </div>

        <form
          data-kt-search-element="form"
          class="d-none d-lg-block w-100 position-relative mb-5 mb-lg-0"
          autocomplete="off"
        >
          <input type="hidden" />

          <span class="svg-icon search-icon svg-icon-2 svg-icon-lg-3 svg-icon-gray-800 position-absolute top-50 translate-middle-y ms-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.5"
                x="17.0365"
                y="15.1223"
                width="8.15546"
                height="2"
                rx="1"
                transform="rotate(45 17.0365 15.1223)"
                fill="currentColor"
              />
              <path
                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                fill="currentColor"
              />
            </svg>
          </span>

          <input
            type="text"
            class="search-input form-control form-control-solid ps-13"
            name="search"
            value=""
            placeholder="Search..."
            data-kt-search-element="input"
          />

          <span
            class="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
            data-kt-search-element="spinner"
          >
            <span class="spinner-border h-15px w-15px align-middle text-gray-400"></span>
          </span>

          <span
            class="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
            data-kt-search-element="clear"
          >
            <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.5"
                  x="6"
                  y="17.3137"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                />
                <rect
                  x="7.41422"
                  y="6"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                />
              </svg>
            </span>
          </span>
        </form>

        <div
          data-kt-search-element="content"
          class="menu menu-sub menu-sub-dropdown w-300px w-md-350px py-7 px-7 overflow-hidden"
        >
          <div data-kt-search-element="wrapper">
            <div data-kt-search-element="results" class="d-none"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchbarComponent;
