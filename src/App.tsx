import { InfoContext, InfoProvider } from "./Context/Context";
import { Album } from "./pages/Album";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <header className="p-4 bg-slate-700 text-white flex justify-center w-auto h-20">
        <div className="max-w-4xl w-full flex justify-center text-4xl font-bold">PhotoGallery</div>
      </header>
      <div className="bg-slate-500 w-auto h-full p-5">
        <InfoProvider>
          <MainRoutes />
        </InfoProvider>
      </div>
      <footer className="p-4 bg-slate-700 text-white flex justify-center w-auto h-15">Made by Samuel Tomaselli</footer>
    </div>
  );
}

export default App;
