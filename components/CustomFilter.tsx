interface CustomFilterProps {
  title: string;
}

const CustomFilter = ({ title }: CustomFilterProps) => {
  return (
    <div>
      <h3>{title}</h3>
      {/* Add your filter UI here */}
    </div>
  );
};

export default CustomFilter;
