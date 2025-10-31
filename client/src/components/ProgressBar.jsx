export default function ProgressBar({ progressValue }) {
  return (
      <div className=' w-full flex flex-col gap-y-2.5 items-center justify-center text-sm font-medium text-gray-400'>
        {progressValue}%
        <div className="w-full border-2 border-dotted h-full border-sky-600">
          <div
            className=" bg-blue-500 border-2 border-dotted border-blue-500 px-0.5 py-2 h-full"
            style={{ width: `${progressValue}%` }}
          >
            </div>
        </div>
        <div className=' text-lg text-gray-400'>Loading...</div>
      </div>
  );
}