import Navbar from "./Navbar";
const OutletComponent = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <h1>My super cool footer</h1>
    </div>
  );
};
export default OutletComponent;
