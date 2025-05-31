const StatsCards = () => {
  return (
    <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-md w-full max-w-md mx-auto mb-4">
      <div className="flex flex-col items-center bg-blue">
        <span className="text-sm font-semibold text-blue-400 bg-blue-100">Tổng số</span>
        <span className="text-2xl font-bold text-blue-600">6</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold text-green-400 bg-green-100">Live</span>
        <span className="text-2xl font-bold text-green-600">3</span>
      </div>
      <div className="flex flex-col items-center ">
        <span className="text-sm font-semibold text-red-400 bg-red-100">Die</span>
        <span className="text-2xl font-bold text-red-600">3</span>
      </div>
    </div>
  );
};

export default StatsCards;
