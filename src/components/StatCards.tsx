const StatsCards = () => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="text-sm text-gray-600 mb-1">Tổng số</div>
        <div className="text-2xl font-bold text-blue-600">6</div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="text-sm text-gray-600 mb-1">Live</div>
        <div className="text-2xl font-bold text-green-600">3</div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="text-sm text-gray-600 mb-1">Die</div>
        <div className="text-2xl font-bold text-red-600">3</div>
      </div>
    </div>
  );
};
export default StatsCards;