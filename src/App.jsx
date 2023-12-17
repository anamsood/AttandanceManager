import Subject from "./components/Subject";
function App() {
  return (
    <>
      <main>
        <Subject title="ADI" total="44" attended={30} />
        <Subject title="BEE" total="34" attended={22} />
        <Subject title="SD" total="20" attended={14} />
        <Subject title="NALR" total="146" attended={106} />
      </main>
    </>
  );
}

export default App;
