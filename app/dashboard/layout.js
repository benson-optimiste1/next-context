import CheckAuth from "./CheckAuth"

export default function DashboardLayout({ children }) {
    return (
        <main className="p-8">
        <h1 className="text-2xl font-bold">Dashboard Layout</h1>
        <CheckAuth/>
        { children }
         </main>
    )

}