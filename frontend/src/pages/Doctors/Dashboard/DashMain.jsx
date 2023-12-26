
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const data2 = [
    {
        subject: 'Diabetes',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Asthma',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Allergies',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Skin conditions',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Fever',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'Nosebleeds',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];
const stats = [
    { id: 1, name: 'Appointments every 24 hours', value: '8' },
    { id: 2, name: 'Assets Per Week', value: '$1 Million' },
    { id: 3, name: 'New users annually', value: '150' },
  ]

const DashMain = () => {
    return (
        <><h2 className='m-5 font-extrabold text-transparent text-4xl bg-clip-text bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200'>Welcome Doctor,</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='col-span-2  space-y-4 p-9'>
                    <h2 className='font-bold text-xl text-gray-400'>You have today : <span className='text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100 to-teal-100'>6 appointments</span></h2>

                    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl
                        rounded-3xl sm:px-16">
                            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Boost your productivity today.
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                                Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                                commodo do ea.
                            </p>
                            <div className="mt-10 flex  items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-white">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                            <svg
                                viewBox="0 0 1024 1024"
                                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                                aria-hidden="true"
                            >
                                <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                                <defs>
                                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                        <stop stopColor="#7775D6" />
                                        <stop offset={1} stopColor="#E935C1" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    

                </div>
                <div className='md:col-span-2 lg:col-span-1 flex flex-col gap-10 px-4'>
                    <div className='bg-gray-900 h-full max-h-80 w-full border-[#394049] border-2 rounded shadow-2xl'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>

                    </div>
                    <div className='bg-gray-900 h-full max-h-80 w-full border-[#394049] border-2 rounded shadow-2xl'>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                    <div>
                    </div>

                </div>
            </div>
            <div className="bg-gray-900 py-10 max-w-7xl mx-auto sm:py-32 rounded-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
   
        </>
    )
}

export default DashMain