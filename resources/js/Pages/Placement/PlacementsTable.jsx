import Pagination from "@/Components/Pagination";
import { Link, router } from "@inertiajs/react";

export default function PlacementsTable({
    placements,
    success,
    queryParams = null,
}) {

    queryParams = queryParams || {}

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value
        } else {
            delete queryParams[name]
        }

        router.get(route('placement.index'), queryParams);
    }

    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return;
        searchFieldChanged(name, e.target.value);
    }

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }

        router.get(route('placement.index'), queryParams);
    }

    return (
        <>
            {success && (
                <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
                    {success}
                </div>
            )}
            <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                        <tr className="text-nowrap">
                            <th className="px-3 py-3">ID</th>
                            <th className="px-3 py-3">NIK</th>
                            <th className="px-3 py-3">Full Name</th>
                            <th className="px-3 py-3">Branch Name</th>
                            <th className="px-3 py-3">Kas Code</th>
                            <th className="px-3 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {placements.data.map((placement) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={placement.id}>
                                <td className="px-3 py-2">{placement.id}</td>
                                <td className="px-3 py-2 text-nowrap">{placement.employee.nik}</td>
                                <td className="px-3 py-2 text-nowrap">{placement.employee.name}</td>
                                <td className="px-3 py-2">{placement.branch.name}</td>
                                <td className="px-3 py-2">{placement.kas.name}</td>
                                <td className="px-3 py-2 text-nowrap">
                                    <Link href=""
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                                        Edit
                                    </Link>
                                    <button
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination links={tasks.meta.links} />
        </>
    )
}
