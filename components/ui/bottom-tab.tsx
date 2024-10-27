/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LKY9I8hy0W5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { SVGProps } from "react";

export default function BottomTab() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-around border-t bg-white dark:border-gray-800 dark:bg-gray-950">
      <Link
        href="#"
        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        prefetch={false}
      >
        <HomeIcon className="h-6 w-6" />
        Home
      </Link>
      <Link
        href="#"
        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        prefetch={false}
      >
        <SearchIcon className="h-6 w-6" />
        Search
      </Link>
      <Link
        href="#"
        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        prefetch={false}
      >
        <BellIcon className="h-6 w-6" />
        Notifications
      </Link>
      <Link
        href="#"
        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        prefetch={false}
      >
        <UserIcon className="h-6 w-6" />
        Profile
      </Link>
    </div>
  );
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
