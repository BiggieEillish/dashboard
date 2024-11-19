'use client';

export default function Table({ orders }) {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-800 shadow">
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-900">
            <tr>
              <th
                scope="col"
                className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Purchase date
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Customer
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Amount
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Status
              </th>
              <th scope="col" className="relative py-3 px-4">
                <span className="sr-only">Options</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 bg-gray-800">
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-400">
                  {order.date}
                </td>
                <td className="whitespace-nowrap py-4 px-4 text-sm font-medium text-white flex items-center">
                  <img
                    className="h-8 w-8 rounded-full mr-3"
                    src={order.avatar}
                    alt={order.name}
                  />
                  {order.name}
                </td>
                <td className="whitespace-nowrap py-4 px-4 text-right text-sm text-gray-400">
                  {order.amount}
                </td>
                <td className="whitespace-nowrap py-4 px-4 text-right text-sm">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      order.status === 'Success'
                        ? 'bg-green-900 text-green-400'
                        : 'bg-red-900 text-red-400'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="whitespace-nowrap py-4 px-4 text-right text-sm text-gray-400">
                  <button className="text-gray-400 hover:text-gray-200">
                    <span className="sr-only">View options for {order.name}</span>
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
