const HeadTitle = ({ headTitle }) => {
  return (
    <main className=' flex flex-col items-center justify-center mx-auto'>
        {headTitle.title && <div className={` flex items-center justify-center text-sm font-medium gap-x-1.5 px-3.5 py-1.5 rounded-full border-[1.5px] border-solid  ${headTitle.title === "Processus Simple" ? ' border-green-200 bg-teal-50 text-green-500' : ' border-blue-200 bg-sky-100 text-blue-500'}`}>
            {headTitle.icon}
            {headTitle.title}
        </div>}
        <br />
        <h2 className=' text-5xl text-gray-950 font-extrabold text-center max-w-2xl w-full'>
          {headTitle.subtitle} {headTitle.spanElement ? headTitle.spanElement : ""}
        </h2>
        <br />
        <p className=' max-w-3xl w-full text-xl text-[#7588A3] text-center'>
          {headTitle.description}
        </p>
    </main>
  )
}

export default HeadTitle