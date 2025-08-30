import { useEffect, useState } from "react";
import ThemeToggle from "../../layout/ThemeToggle";
import { useNavigate } from "react-router-dom";

const tabs = ["Attendance", "Payroll", "Assignment", "Leaves", "Employees", "Reports"];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Attendance");
 const Navigate = useNavigate();
 const token = localStorage.getItem("token");
 
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col">
        <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">EMS Admin</h1>
          <ThemeToggle />
        </div>

        <nav className="flex-1 px-4 py-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`w-full text-left px-4 py-2 rounded-md mb-2 
                ${
                  activeTab === tab
                    ? "bg-red-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          {activeTab}
        </h2>

        {/* Content for each tab */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md min-h-[300px]">
          {activeTab === "Attendance" && <p>Attendance Dashboard Content...</p>}
          {activeTab === "Payroll" && <p>Payroll Dashboard Content...</p>}
          {activeTab === "Assignment" && <p>Assignment Dashboard Content...</p>}
          {activeTab === "Leaves" && <p>Leaves Dashboard Content...</p>}
          {activeTab === "Employees" && <p>Employees Dashboard Content...</p>}
          {activeTab === "Reports" && <p>Reports Dashboard Content...</p>}
        </div>
      </main>
    </div>
  );
}
