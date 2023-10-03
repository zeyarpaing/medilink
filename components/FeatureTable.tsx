'use client';

import { TableColumn, TableHeader, TableCell, TableBody, TableRow, Table } from '@nextui-org/react';

export default function FeatureTable() {
  return (
    <Table
      style={{
        // @ts-ignore
        '--nextui-default-100': '187 100% 33%',
      }}
      className="overflow-hidden rounded-xl border border-primary  [&_thead>tr[aria-hidden=true]]:hidden"
      aria-label="Example static collection table"
      defaultSelectedKeys={['2', '4']}
      disabledBehavior="selection"
      selectionBehavior="replace"
      selectedKeys={['2', '4']}
      selectionMode="multiple"
      color="primary"
      removeWrapper
    >
      <TableHeader className="bg-primary text-white">
        <TableColumn className="!rounded-b-none text-lg text-white"> </TableColumn>
        <TableColumn className="hidden !rounded-b-none pr-8 text-lg text-white md:table-cell" width={10}>
          Plan 1
        </TableColumn>
        <TableColumn className="hidden !rounded-b-none pr-8 text-lg text-white md:table-cell" width={10}>
          Plan 2
        </TableColumn>
        <TableColumn className="hidden !rounded-b-none pr-8 text-lg text-white md:table-cell" width={10}>
          Plan 3
        </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow className="md:hidden">
          <TableCell className="pointer-events-none">
            <div className=" absolute z-30 -mx-[0.8rem] -mt-12 flex overflow-hidden rounded-lg bg-primary py-4 text-center text-white [&>*:not(last-child)]:border-r [&>*]:flex-1">
              <div>
                <p className="mb-2 text-lg font-bold">Plan 1</p>
                <p>Sum Insured</p>
                <b className="text-lg">$25000</b>
              </div>
              <div>
                <p className="mb-2 text-lg font-bold">Plan 2</p>
                <p>Sum Insured</p>
                <b className="text-lg">$50000</b>
              </div>
              <div>
                <p className="mb-2 text-lg font-bold">Plan 3</p>
                <p>Sum Insured</p>
                <b className="text-lg">$7000</b>
              </div>
            </div>
          </TableCell>
          <TableCell className="hidden"> </TableCell>
          <TableCell className="hidden"> </TableCell>
          <TableCell className="hidden"> </TableCell>
        </TableRow>
        {
          [
            {
              description:
                "Policyholder's spouse, children, parents an parent-in-law who stay in the same Tengah address",
              title: 'Cover not only yourself, but 3 generations of your family against hospitalisation',
              available: true,
            },
            {
              title: 'Get affordable protection today from unforeseen emergencies tomorrow',
              description: '',
              available: true,
            },
            {
              description: 'Family Protection benefits per policy year limit will be refreshed upon renewal',
              title: 'Enjoy loyalty benefits with every renewal',
              available: true,
            },
            {
              title: 'Flexibility to increase coverage with Spouse Rider',
              description: '',
              available: true,
            },
            {
              description:
                "Policy continue even after the Policyholder's death or disability if Spouse Rider is attached",
              title: 'Securing your future with policy continuity',
              available: true,
            },
          ].map((item, idx) => (
            <TableRow className="pointer-events-none" key={idx + 1}>
              <TableCell>
                <p className="text-lg font-bold text-foreground">{item.title}</p>
                <p className="text-foreground">{item.description}</p>
              </TableCell>
              <TableCell
                className={idx !== 0 ? 'hidden' : 'hidden bg-primary/30 text-center md:table-cell'}
                rowSpan={5}
              >
                <p>Sum Insured</p>
                <b className="text-lg">$25000</b>
              </TableCell>
              <TableCell
                className={idx !== 0 ? 'hidden' : 'hidden bg-primary/10 text-center md:table-cell'}
                rowSpan={5}
              >
                <p>Sum Insured</p>
                <b className="text-lg">$50000</b>
              </TableCell>
              <TableCell
                className={idx !== 0 ? 'hidden' : 'hidden bg-primary/30 text-center md:table-cell'}
                rowSpan={5}
              >
                <p>Sum Insured</p>
                <b className="text-lg">$7000</b>
              </TableCell>

              {/* <TableCell className="align-middle">
                {item.available ? (
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle
                      cx="14.3755"
                      cy="15.0122"
                      r="12.8716"
                      fill="#D2D711"
                      stroke="#0096A9"
                      stroke-width="1.38557"
                    />
                    <path
                      d="M9.26514 15.6019L12.0167 18.5499L19.4852 11.4746"
                      stroke="#0096A9"
                      stroke-width="2.77114"
                      stroke-linecap="round"
                    />
                  </svg>
                ) : (
                  ''
                )}
              </TableCell>
              <TableCell> </TableCell>
              <TableCell> </TableCell> */}
            </TableRow>
          )) as any
        }
      </TableBody>
    </Table>
  );
}
