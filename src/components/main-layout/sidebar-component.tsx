/** @jsxImportSource solid-js */
import { createSignal, For } from 'solid-js';
import { SidebarServiceResponse } from './types';
import img from '../../assets/media/logos/arcelormittal-logo.gif';
import icon from '../../assets/media/logos/arcelormittal-mini-logo2.jpeg';

const SidebarComponent = () => {
  const SIDEBAR_CONTENT_MOCKED: SidebarServiceResponse = {
    apps: [
      {
        id: 1,
        title: 'APP',
        content: [
          {
            appId: 1,
            title: 'Feature #1',
            icon: `
              <span class="svg-icon svg-icon-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                  <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2"
                    fill="currentColor" />
                  <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2"
                    fill="currentColor" />
                  <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2"
                    fill="currentColor" />
                </svg>
              </span>`,
            subcontent: [
              {
                title: 'Child 1',
                href: 'index.html',
              },
              {
                title: 'Child 2',
                href: 'index.html',
              },
              {
                title: 'Child 3',
                href: 'index.html',
              },
              {
                title: 'Child 4',
                href: 'index.html',
              },
            ],
          },
          {
            appId: 2,
            title: 'Feature #2',
            icon: `
          <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
          <span class="svg-icon svg-icon-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
              <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2"
                fill="currentColor" />
              <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2"
                fill="currentColor" />
              <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2"
                fill="currentColor" />
            </svg>
          </span>
          <!--end::Svg Icon-->`,
            subcontent: [
              {
                title: 'Child 1',
                href: 'index.html',
              },
              {
                title: 'Child 2',
                href: 'index.html',
              },
              {
                title: 'Child 3',
                href: 'index.html',
              },
              {
                title: 'Child 4',
                href: 'index.html',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'APP',
        content: [
          {
            appId: 2,
            title: 'Feature #1',
            icon: `
          <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
          <span class="svg-icon svg-icon-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
              <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2"
                fill="currentColor" />
              <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2"
                fill="currentColor" />
              <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2"
                fill="currentColor" />
            </svg>
          </span>
          <!--end::Svg Icon-->`,
            subcontent: [
              {
                title: 'Child 1',
                href: 'index.html',
              },
              {
                title: 'Child 2',
                href: 'index.html',
              },
              {
                title: 'Child 3',
                href: 'index.html',
              },
              {
                title: 'Child 4',
                href: 'index.html',
              },
            ],
          },
          {
            appId: 2,
            title: 'Feature #2',
            icon: `
          <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
          <span class="svg-icon svg-icon-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
              <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2"
                fill="currentColor" />
              <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2"
                fill="currentColor" />
              <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2"
                fill="currentColor" />
            </svg>
          </span>
          <!--end::Svg Icon-->`,
            subcontent: [
              {
                title: 'Child 1',
                href: 'index.html',
              },
              {
                title: 'Child 2',
                href: 'index.html',
              },
              {
                title: 'Child 3',
                href: 'index.html',
              },
              {
                title: 'Child 4',
                href: 'index.html',
              },
            ],
          },
        ],
      },
    ],
  };
  const [sidebarContnet] = createSignal(SIDEBAR_CONTENT_MOCKED.apps);

  return (
    <div
      id="kt_aside"
      class="aside aside-default aside-hoverable"
      data-kt-drawer="false"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_toggle"
    >
      <div
        class="aside-logo flex-column-auto px-10 pt-9 pb-5 m-auto"
        id="kt_aside_logo"
      >
        <a href="../index.html">
          <img
            alt="Logo"
            src={img}
            class="max-h-50px logo-default theme-light-show mx-auto"
            height={50}
          />
          <img
            alt="Logo"
            src={img}
            class="max-h-50px logo-default theme-dark-show mx-auto"
          />
          <img
            alt="Logo"
            src={icon}
            class="max-h-50px logo-minimize"
            height={40}
          />
        </a>
      </div>
      <div class="aside-menu flex-column-fluid px-4 px-lg-7">
        <div
          class="menu menu-sub-indention menu-column menu-rounded menu-title-gray-600 menu-icon-gray-400 menu-active-bg menu-state-primary menu-arrow-gray-500 fw-semibold fs-6 my-5 mt-lg-2 mb-lg-0"
          id="kt_aside_menu"
          data-kt-menu="true"
        >
          <div
            class="hover-scroll-y me-lg-n5 pe-lg-5"
            id="kt_aside_menu_wrapper"
            data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}"
            data-kt-scroll-height="auto"
            data-kt-scroll-wrappers="#kt_aside_menu"
            data-kt-scroll-offset="20px"
            data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
          >
            <For each={sidebarContnet()}>
              {(section) => (
                <>
                  <div class="menu-item pt-5">
                    <div class="menu-content">
                      <span class="fw-bold text-muted text-uppercase fs-7">
                        {section.title}
                      </span>
                    </div>
                  </div>
                  <For each={section.content}>
                    {(content) => (
                      <>
                        <div
                          data-kt-menu-trigger="click"
                          class="menu-item menu-accordion"
                        >
                          <span class="menu-link">
                            <span class="menu-icon">
                              {' '}
                              <span class="svg-icon svg-icon-2">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="2"
                                    y="2"
                                    width="9"
                                    height="9"
                                    rx="2"
                                    fill="currentColor"
                                  />
                                  <rect
                                    opacity="0.3"
                                    x="13"
                                    y="2"
                                    width="9"
                                    height="9"
                                    rx="2"
                                    fill="currentColor"
                                  />
                                  <rect
                                    opacity="0.3"
                                    x="13"
                                    y="13"
                                    width="9"
                                    height="9"
                                    rx="2"
                                    fill="currentColor"
                                  />
                                  <rect
                                    opacity="0.3"
                                    x="2"
                                    y="13"
                                    width="9"
                                    height="9"
                                    rx="2"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </span>
                            <span class="menu-title">{content.title}</span>
                            <span class="menu-arrow"></span>
                          </span>
                          <div class="menu-sub menu-sub-accordion">
                            <For each={content.subcontent}>
                              {(subcontent) => (
                                <div class="menu-item">
                                  <a class="menu-link" href={subcontent.href}>
                                    <span class="menu-bullet">
                                      <span class="bullet bullet-dot"></span>
                                    </span>
                                    <span class="menu-title">
                                      {subcontent.title}
                                    </span>
                                  </a>
                                </div>
                              )}
                            </For>
                          </div>
                        </div>
                      </>
                    )}
                  </For>
                </>
              )}
            </For>
          </div>
        </div>
      </div>
      <div
        class="aside-footer flex-column-auto pb-5 d-none"
        id="kt_aside_footer"
      >
        <a href="../index.html" class="btn btn-light-primary w-100">
          Button
        </a>
      </div>
    </div>
  );
};
export default SidebarComponent;
