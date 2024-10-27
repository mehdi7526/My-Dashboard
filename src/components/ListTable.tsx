import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

type ListTableProps = {
  data: Post[];
};

const ListTable: React.FC<ListTableProps> = ({ data }) => {
  return (
    <div className=" rounded-lg shadow-lg h-full"> 
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100 sticky -top-1 z-10"> 
          <tr>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              ID
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Title
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((post) => (
            <tr key={post.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {post.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-wrap text-sm text-gray-700">
                {post.title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;
