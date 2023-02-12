import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = {
    name: "Half stack application developmant",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
