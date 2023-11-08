import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const VariablesGraph = (props) => {
  const lines = [];

  // Generiranje 20 različitih boja koristeći HSV sistem boja
  const colors = [];
  for (let i = 0; i < 20; i++) {
    const hue = (i * 360) / 20;
    const saturation = 90;
    const value = 70; 
    const color = `hsl(${hue}, ${saturation}%, ${value}%)`;
    colors.push(color);
  }

  if (props.variables.hourly) {
    Object.keys(props.variables.hourly).forEach((key, index) => {
      if (key !== "time") {
        const data = props.variables.hourly.time.map((time, dataIndex) => ({
          x: time,
          [key]: props.variables.hourly[key][dataIndex],
        }));

        const color = colors[index % colors.length];

        lines.push(
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            name={key}
            data={data}
            stroke={color}
          />
        );
      }
    });
  }

  if (props.variables.daily) {
    Object.keys(props.variables.daily).forEach((key, index) => {
      if (key !== "time") {
        const data = props.variables.daily.time.map((time, dataIndex) => ({
          x: time,
          [key]: props.variables.daily[key][dataIndex],
        }));

        const color = colors[(index + lines.length) % colors.length];

        lines.push(
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            name={key}
            data={data}
            stroke={color}
          />
        );
      }
    });
  }

  return (
    <div
      style={{ display: "flex", textAlign: "center", marginTop: "10px" }}
    >
      <ResponsiveContainer width="90%" height={500}>
        <LineChart data={props.variables.hourly.time}>
          <XAxis dataKey="x" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          {lines}
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VariablesGraph;
