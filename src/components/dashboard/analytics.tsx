'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import {
  Bar,
  BarChart as BarChartComponent,
  Line,
  LineChart as LineChartComponent,
  Pie,
  PieChart as PieChartComponent,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Sector
} from 'recharts';
import type { PieSectorDataItem } from 'recharts/types/polar/Pie';

const lineChartData = [
  { date: 'Jan', visitors: 4000 },
  { date: 'Feb', visitors: 3000 },
  { date: 'Mar', visitors: 5000 },
  { date: 'Apr', visitors: 4500 },
  { date: 'May', visitors: 6000 },
  { date: 'Jun', visitors: 5500 },
  { date: 'Jul', visitors: 7000 },
];

const barChartData = [
  { page: 'Home', views: 1200 },
  { page: 'Maquinaria', views: 950 },
  { page: 'Servicios', views: 700 },
  { page: 'Blog', views: 450 },
  { page: 'Contacto', views: 250 },
];

const pieChartData = [
  { device: 'Desktop', value: 55, fill: 'hsl(var(--chart-1))' },
  { device: 'Mobile', value: 35, fill: 'hsl(var(--chart-2))' },
  { device: 'Tablet', value: 10, fill: 'hsl(var(--chart-3))' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
    color: 'hsl(var(--chart-1))',
  },
  views: {
    label: 'Page Views',
    color: 'hsl(var(--chart-2))',
  },
};

const ActiveShape = (props: PieSectorDataItem) => {
    const RADIAN = Math.PI / 180;
    const { cx=0, cy=0, midAngle=0, innerRadius=0, outerRadius=0, startAngle, endAngle, fill, payload, percent=0, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.device}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Value ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
};
  

export default function AnalyticsDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Visitors</CardTitle>
          <CardDescription>Last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">12,345</p>
          <p className="text-sm text-green-500">+5.2% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Bounce Rate</CardTitle>
          <CardDescription>Last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">45.6%</p>
          <p className="text-sm text-red-500">+1.8% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>New Inquiries</CardTitle>
          <CardDescription>Last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">128</p>
          <p className="text-sm text-green-500">+15% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Avg. Session</CardTitle>
          <CardDescription>Last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">2m 34s</p>
          <p className="text-sm text-green-500">+12s from last month</p>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle>Website Visitors Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChartComponent data={lineChartData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="visitors" stroke="var(--color-visitors)" strokeWidth={2} />
            </LineChartComponent>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Top Pages by Views</CardTitle>
        </CardHeader>
        <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChartComponent data={barChartData} layout="vertical">
              <CartesianGrid horizontal={false} />
              <XAxis type="number" hide />
              <YAxis dataKey="page" type="category" width={80} />
              <Tooltip cursor={{fill: 'hsl(var(--muted))'}} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="views" fill="var(--color-views)" radius={4} />
            </BarChartComponent>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Traffic by Device</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-[300px] w-full">
            <PieChartComponent>
                <Pie 
                    data={pieChartData} 
                    cx="50%" 
                    cy="50%" 
                    labelLine={false}
                    outerRadius={80} 
                    fill="#8884d8"
                    dataKey="value"
                    activeIndex={0}
                    activeShape={ActiveShape}
                >
                </Pie>
                <ChartLegend content={<ChartLegendContent nameKey="device" />} />
            </PieChartComponent>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
