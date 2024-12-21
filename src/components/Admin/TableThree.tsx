import Link from "next/link";

export async function TableThree({title = "", btn, tableHead, tableBody} : {title: String, btn: React.ReactNode, tableHead: React.ReactNode, tableBody: React.ReactNode}) {
  
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between mb-5">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        List
      </h4>
      {btn}
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>{tableHead}</thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TableThree;
