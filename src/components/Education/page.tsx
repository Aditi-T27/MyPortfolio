// // 'use client';
// // import FuzzyText from '@/blocks/TextAnimations/FuzzyText/fuzzyText1';
// // import React from 'react';
// // import { TooltipProps } from 'recharts';
// // import {
// //   RadialBarChart,
// //   RadialBar,
// //   Tooltip,
// //   LabelList,
// //   ResponsiveContainer,
// // } from 'recharts';

// // // ✅ Chart data
// // const data = [
// //   {
// //     name: 'School',
// //     yearRange: '2009–2020',
// //     uv: 120,
// //     fill: '#8884d8',
// //     grade: '96.4%',
// //     syllabus: 'ICSE',
// //     slot: `St.Theresa's School`,
// //   },
// //   {
// //     name: 'PU College',
// //     yearRange: '2020–2022',
// //     uv: 80,
// //     fill: '#83a6ed',
// //     grade: '96.6%',
// //     syllabus: 'State Board',
// //     slot: 'St.Aloysius Pre-University',
// //   },
// //   {
// //     name: 'University',
// //     yearRange: '2022–2026',
// //     uv: 100,
// //     fill: '#8dd1e1',
// //     grade: 'CGPA: 9.7',
// //     syllabus: 'Autonomous',
// //     slot: 'Sahyadri College of Engineering and Management',
// //   },
// // ];

// // // ✅ Custom tooltip
// // const CustomTooltip = ({ active, payload }: any) => {
// //    if (active && payload && payload.length) {
// //     const data = payload[0].payload;
// //     return (
// //       <div
// //         style={{
// //           backgroundColor: '#1f1f1f',
// //           color: '#fff',
// //           padding: '10px',
// //           fontSize: '14px',
// //           lineHeight: '1.6',
// //           borderRadius: '4px',
// //         }}
// //       >
// //         <p><strong>Syllabus:</strong> {data.syllabus}</p>
// //         <p><strong>Year Range:</strong> {data.yearRange}</p>
// //         <p><strong>Grade:</strong> {data.grade}</p>
// //         <p><strong>University:</strong> {data.slot}</p>
// //       </div>
// //     );
// //   }
// //   return null;
// // };

// // // ✅ Chart component
// // export default function EducationTimelineChart() {
// //   return (
// //     <div className="bg-[#121212]">
// //       <FuzzyText>Education</FuzzyText>

// //       <div
// //         style={{ fontFamily: 'Poppins' }}
// //         className="bg-[#121212] flex justify-center items-center mx-auto px-4 py-8 w-full"
// //       >
// //         <div className="w-full max-w-5xl h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
// //           <ResponsiveContainer width="100%" height="100%">
// //             <RadialBarChart
// //               innerRadius="10%"
// //               outerRadius="80%"
// //               data={data}
// //               startAngle={180}
// //               endAngle={0}
// //             >
// //               <RadialBar
// //                 dataKey="uv"
// //                 background
// //                 cornerRadius={3}
// //               >
// //                 <LabelList dataKey="name" position="inside" fill="#fff" />
// //               </RadialBar>

// //               <Tooltip content={<CustomTooltip />} />
// //             </RadialBarChart>
// //           </ResponsiveContainer>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';
// import FuzzyText from '@/blocks/TextAnimations/FuzzyText/fuzzyText1';
// import React from 'react';
// import { TooltipProps } from 'recharts';
// import {
//   RadialBarChart,
//   RadialBar,
//   Tooltip,
//   LabelList,
//   ResponsiveContainer,
// } from 'recharts';

// // ✅ Chart data type
// interface EducationData {
//   name: string;
//   yearRange: string;
//   uv: number;
//   fill: string;
//   grade: string;
//   syllabus: string;
//   slot: string;
// }

// const data: EducationData[] = [
//   {
//     name: 'School',
//     yearRange: '2009–2020',
//     uv: 120,
//     fill: '#8884d8',
//     grade: '96.4%',
//     syllabus: 'ICSE',
//     slot: `St.Theresa's School`,
//   },
//   {
//     name: 'PU College',
//     yearRange: '2020–2022',
//     uv: 80,
//     fill: '#83a6ed',
//     grade: '96.6%',
//     syllabus: 'State Board',
//     slot: 'St.Aloysius Pre-University',
//   },
//   {
//     name: 'University',
//     yearRange: '2022–2026',
//     uv: 100,
//     fill: '#8dd1e1',
//     grade: 'CGPA: 9.7',
//     syllabus: 'Autonomous',
//     slot: 'Sahyadri College of Engineering and Management',
//   },
// ];

// // ✅ Custom tooltip with proper type
// const CustomTooltip: React.FC<TooltipProps<number, string>> = (props) => {
//   const { active, payload } = props;

//   if (active && payload && payload.length > 0) {
//     const chartData = payload[0].payload as EducationData;

//     return (
//       <div
//         style={{
//           backgroundColor: '#1f1f1f',
//           color: '#fff',
//           padding: '10px',
//           fontSize: '14px',
//           lineHeight: '1.6',
//           borderRadius: '4px',
//           fontFamily:"Poppins"
//         }}
//       >
//         <p><strong>Syllabus:</strong> {chartData.syllabus}</p>
//         <p><strong>Year Range:</strong> {chartData.yearRange}</p>
//         <p><strong>Grade:</strong> {chartData.grade}</p>
//         <p><strong>University:</strong> {chartData.slot}</p>
//       </div>
//     );
//   }
//   return null;
// };

// // ✅ Chart component
// export default function EducationTimelineChart() {
//   return (
//     <div className="bg-[#121212]">
//       <FuzzyText>Education</FuzzyText>

//       <div className="bg-[#121212] flex justify-center items-center mx-auto px-4 py-8 w-full" style={{fontFamily:"Poppins"}}>
//         <div className="w-full max-w-5xl h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <RadialBarChart
//               innerRadius="10%"
//               outerRadius="80%"
//               data={data}
//               startAngle={180}
//               endAngle={0}
//             >
//               <RadialBar
//                 dataKey="uv"
//                 background
//                 cornerRadius={3}
//               >
//                 <LabelList dataKey="name" position="inside" fill="#fff" />
//               </RadialBar>

//               <Tooltip content={<CustomTooltip />} />
//             </RadialBarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';
import React from 'react';
import FuzzyText from '@/blocks/TextAnimations/FuzzyText/fuzzyText1';
import {
  RadialBarChart,
  RadialBar,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';

/* -------------------------
   data type
   ------------------------- */
interface EducationData {
  name: string;
  yearRange: string;
  uv: number;
  fill: string;
  grade: string;
  syllabus: string;
  slot: string;
}

/* -------------------------
   data
   ------------------------- */
const data: EducationData[] = [
  {
    name: 'School',
    yearRange: '2009–2020',
    uv: 120,
    fill: '#8884d8',
    grade: '96.4%',
    syllabus: 'ICSE',
    slot: `St.Theresa's School`,
  },
  {
    name: 'PU College',
    yearRange: '2020–2022',
    uv: 90,
    fill: '#83a6ed',
    grade: '96.6%',
    syllabus: 'KSSEEB',
    slot: 'St.Aloysius Pre-University',
  },
  {
    name: 'University',
    yearRange: '2022–2026',
    uv: 100,
    fill: '#8dd1e1',
    grade: 'CGPA: 9.7',
    syllabus: 'Autonomous',
    slot: 'Sahyadri College of Engineering and Management',
  },
];

/* -------------------------
   tooltip typing helper
   ------------------------- */
/**
 * Recharts' runtime payload items look like:
 *  { value: number, payload: EducationData, name: string, ... }
 * We only care about payload here (which contains EducationData).
 */
type RechartsPayloadItem = { payload: EducationData };
type RechartsPayload = RechartsPayloadItem[];

/**
 * Intersect TooltipProps with our payload shape so `payload` becomes available
 * to TypeScript without casting to `any`.
 */
type CustomTooltipProps = TooltipProps<number, string> & {
  payload?: RechartsPayload;
};

/* -------------------------
   CustomTooltip component
   ------------------------- */
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    const chartData = payload[0].payload;

    return (
      <div
        style={{
          backgroundColor: '#1f1f1f',
          color: '#fff',
          padding: '10px',
          fontSize: '14px',
          lineHeight: '1.6',
          borderRadius: '4px',
          fontFamily: 'Poppins',
        }}
      >
        <p className='ml-1'><strong>Syllabus:</strong> {chartData.syllabus}</p>
        <p className='ml-1'><strong>Year Range:</strong> {chartData.yearRange}</p>
        <p className='ml-1'><strong>Grade:</strong> {chartData.grade}</p>
        <p className='ml-1'><strong>University:</strong> {chartData.slot}</p>
      </div>
    );
  }
  return null;
};

/* -------------------------
   Chart component
   ------------------------- */
export default function EducationTimelineChart() {
  return (
    <div className="bg-[#121212]">
      <FuzzyText>Education</FuzzyText>

      <div
        className="bg-[#121212] flex justify-center items-center mx-auto px-4 py-8 w-full"
        style={{ fontFamily: 'Poppins' }}
      >
        <div className="w-full max-w-5xl h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="10%"
              outerRadius="80%"
              data={data}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar dataKey="uv" background cornerRadius={3}>
                <LabelList dataKey="name" position="middle" fill="#fff" />
              </RadialBar>

              {/* Pass the tooltip component instance — Recharts will inject props at render time */}
              <Tooltip content={<CustomTooltip />} />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
