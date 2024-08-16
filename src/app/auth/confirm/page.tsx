import Link from 'next/link'
import React from 'react'

const ConfirmationPage = () => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center">
        <div className="px-6 py-12 lg:px-8 w-fit sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-2/6 m-auto rounded-xl bg-[#1e293b] shadow-[inset_0_0_0_1px_#ffffff1a]">
          <div className="w-full border-stroke dark:border-strokedark">
            <div className="w-full">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                You successfully confirmed your email let's sign in!
              </h2>
              <Link href="/admin/dashboard" className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmationPage