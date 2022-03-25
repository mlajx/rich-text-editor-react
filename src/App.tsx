import Editor from './components/Editor/Editor'
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div className="container mx-auto my-8">
          <Editor id='editor' height={300} />
          <Footer />
      </div>
  )
}

export default App
