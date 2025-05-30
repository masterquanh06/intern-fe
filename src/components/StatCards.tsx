import { Card, Statistic } from "antd";

// Statistics Cards Component
const StatsCards = () => {
    const stats = [
        { title: 'Tổng số', value: 6, color: 'text-blue-500' },
        { title: 'Live', value: 3, color: 'text-green-500' },
        { title: 'Die', value: 3, color: 'text-red-500' }
    ];

    return (
        <div className="grid grid-cols-3 gap-4 mb-6">
            {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                    <Statistic
                        title={stat.title}
                        value={stat.value}
                        valueStyle={{ color: stat.color.replace('text-', '') }}
                    />
                </Card>
            ))}
        </div>
    );
};
export default StatsCards;