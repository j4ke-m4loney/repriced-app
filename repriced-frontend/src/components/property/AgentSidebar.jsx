const AgentSidebar = ({ realtor }) => (
  <div className="hidden md:block sticky top-[100px] self-start bg-gray-50 p-4 rounded-xl shadow-sm h-fit">
    <h3 className="text-lg font-semibold mb-2 text-center">
      Agency Business Logo
    </h3>
    <div className="flex items-center gap-4">
      <div className="w-[150px] h-[150px] bg-gray-200 flex items-center justify-center rounded-full text-gray-500 text-lg">
        Agent Image
      </div>
      <h3 className="text-xl font-semibold">Agent Name</h3>
    </div>
    <p className="text-sm text-gray-700 mb-1">
      <strong>Agency:</strong> {realtor}
    </p>
    <p className="text-sm text-gray-700 mb-1">
      <strong>Phone:</strong> 0412 345 678
    </p>
    <p className="text-sm text-gray-700 mb-4">
      <strong>Email:</strong> agent@{realtor?.toLowerCase().replace(/\s/g, "")}
      .com
    </p>
    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-sm w-full">
      Contact Agent
    </button>
  </div>
);
export default AgentSidebar;
