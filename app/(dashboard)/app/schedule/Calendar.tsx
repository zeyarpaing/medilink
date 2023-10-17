// @ts-nocheck
'use client';
import ChevronDownIcon from '@/assets/icons/ChevronDownIcon';
import Link from 'next/link';
import { Fragment, useEffect, useRef } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Calendar() {
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);

  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;
    container.current.scrollTop =
      ((container.current.scrollHeight - containerNav.current.offsetHeight - containerOffset.current.offsetHeight) *
        currentMinute) /
      1440;
  }, []);

  return (
    <div className="h-[80vh]">
      <div className="flex h-full flex-col">
        <header className="relative z-20 flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
          <h1 className="text-lg font-semibold text-gray-900">
            <time dateTime="2022-01">January 2022</time>
          </h1>
          <div className="flex items-center">
            <div className="flex items-center rounded-md shadow-sm md:items-stretch">
              <button
                className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                type="button"
              >
                <span className="sr-only">Previous month</span>
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 rotate-90" />
              </button>
              <button
                className="hidden border-b border-t border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
                type="button"
              >
                Today
              </button>
              <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
              <button
                className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                type="button"
              >
                <span className="sr-only">Next month</span>
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 -rotate-90" />
              </button>
            </div>
            <div className="hidden md:ml-4 md:flex md:items-center">
              <div className="ml-6 h-6 w-px bg-gray-300" />
              <button
                className="ml-6 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="button"
              >
                Add event
              </button>
            </div>
          </div>
        </header>
        <div className="flex flex-auto flex-col overflow-auto bg-white" ref={container}>
          <div className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full" style={{ width: '165%' }}>
            <div
              className="sticky top-0 z-10 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
              ref={containerNav}
            >
              <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
                <button className="flex flex-col items-center pb-3 pt-2" type="button">
                  M{' '}
                  <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">10</span>
                </button>
                <button className="flex flex-col items-center pb-3 pt-2" type="button">
                  T{' '}
                  <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">11</span>
                </button>
                <button className="flex flex-col items-center pb-3 pt-2" type="button">
                  W{' '}
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                    12
                  </span>
                </button>
                <button className="flex flex-col items-center pb-3 pt-2" type="button">
                  T{' '}
                  <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">13</span>
                </button>
                <button className="flex flex-col items-center pb-3 pt-2" type="button">
                  F{' '}
                  <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">14</span>
                </button>
                <button className="flex flex-col items-center pb-3 pt-2" type="button">
                  S{' '}
                  <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">15</span>
                </button>
                <button className="flex flex-col items-center pb-3 pt-2" type="button">
                  S{' '}
                  <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">16</span>
                </button>
              </div>

              <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
                <div className="col-end-1 w-14" />
                <div className="flex items-center justify-center py-3">
                  <span>
                    Mon <span className="items-center justify-center font-semibold text-gray-900">10</span>
                  </span>
                </div>
                <div className="flex items-center justify-center py-3">
                  <span>
                    Tue <span className="items-center justify-center font-semibold text-gray-900">11</span>
                  </span>
                </div>
                <div className="flex items-center justify-center py-3">
                  <span className="flex items-baseline">
                    Wed{' '}
                    <span className="ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                      12
                    </span>
                  </span>
                </div>
                <div className="flex items-center justify-center py-3">
                  <span>
                    Thu <span className="items-center justify-center font-semibold text-gray-900">13</span>
                  </span>
                </div>
                <div className="flex items-center justify-center py-3">
                  <span>
                    Fri <span className="items-center justify-center font-semibold text-gray-900">14</span>
                  </span>
                </div>
                <div className="flex items-center justify-center py-3">
                  <span>
                    Sat <span className="items-center justify-center font-semibold text-gray-900">15</span>
                  </span>
                </div>
                <div className="flex items-center justify-center py-3">
                  <span>
                    Sun <span className="items-center justify-center font-semibold text-gray-900">16</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-auto">
              <div className="sticky left-0 w-14 flex-none bg-white ring-1 ring-gray-100" />
              <div className="grid flex-auto grid-cols-1 grid-rows-1">
                {/* Horizontal lines */}
                <div
                  className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                  style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}
                >
                  <div className="row-end-1 h-7" ref={containerOffset}></div>
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      12AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      1AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      2AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      3AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      4AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      5AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      6AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      7AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      8AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      9AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      10AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      11AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      12PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      1PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      2PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      3PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      4PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      5PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      6PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      7PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      8PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      9PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      10PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      11PM
                    </div>
                  </div>
                  <div />
                </div>

                {/* Vertical lines */}
                <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
                  <div className="col-start-1 row-span-full" />
                  <div className="col-start-2 row-span-full" />
                  <div className="col-start-3 row-span-full" />
                  <div className="col-start-4 row-span-full" />
                  <div className="col-start-5 row-span-full" />
                  <div className="col-start-6 row-span-full" />
                  <div className="col-start-7 row-span-full" />
                  <div className="col-start-8 row-span-full w-8" />
                </div>

                {/* Events */}
                <ol
                  className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                  style={{ gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto' }}
                >
                  <li className="relative mt-px flex sm:col-start-3" style={{ gridRow: '2.5 / span 6' }}>
                    <Link
                      className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
                      href="#"
                    >
                      <p className="order-1 font-semibold text-blue-700">Breakfast</p>
                      <p className="text-blue-500 group-hover:text-blue-700">
                        <time dateTime="2022-01-12T06:00">6:00 AM</time>
                      </p>
                    </Link>
                  </li>
                  <li className="relative mt-px flex sm:col-start-3" style={{ gridRow: '92 / span 30' }}>
                    <Link
                      className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                      href="#"
                    >
                      <p className="order-1 font-semibold text-pink-700">Flight to Paris</p>
                      <p className="text-pink-500 group-hover:text-pink-700">
                        <time dateTime="2022-01-12T07:30">7:30 AM</time>
                      </p>
                    </Link>
                  </li>
                  <li className="relative mt-px hidden sm:col-start-6 sm:flex" style={{ gridRow: '122 / span 24' }}>
                    <Link
                      className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs leading-5 hover:bg-gray-200"
                      href="#"
                    >
                      <p className="order-1 font-semibold text-gray-700">Meeting with design team at Disney</p>
                      <p className="text-gray-500 group-hover:text-gray-700">
                        <time dateTime="2022-01-15T10:00">10:00 AM</time>
                      </p>
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
