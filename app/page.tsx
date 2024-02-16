import Image from "next/image";
import { describe } from "node:test";
import Link from 'next/link'

type dataItem = {
  title: String, description: String
}

export default function Home() {
  return ( 
      <div className="flex grow justify-between flex-row p-4 gap-4 items-center">
        <div className="flex gap-4 flex-col justify-center w-2/5 min-h-[500px] text-white px-32 bg-gray-800">
          <p className="text-4xl">Easily Find Future Rommates</p>
          <Link href="/profile" className="text-2xl hover:text-sky-200">Login {"->"}</Link>
          
        </div>
        <div className="grow pl-36 ">
        {appFeatures.map((item: dataItem, i)=> <li key={i}>{item.description}</li>)}
        </div>
      </div>
    
  );
}

const appFeatures = [
  { 
    title: "User-Friendly Interface",
    description: "Ensure the homepage has an intuitive and easy-to-navigate design to provide a seamless user experience."
  },
  {
    title: "Advanced Search Filters",
    description: "Highlight the app's ability to filter roommates based on preferences such as interests, habits, and lifestyle."
  },
  {
    title: "Secure Messaging",
    description: "Emphasize the secure messaging feature for users to communicate safely within the app."
  },
  {
    title: "Verified Profiles",
    description: "Showcase the app's verification process to establish trust among users."
  },
  {
    title: "Interactive Maps",
    description: "If applicable, feature the use of interactive maps to show available living spaces and their proximity to amenities."
  }
];



