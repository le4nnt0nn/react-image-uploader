import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FileUpload } from './components/FileUpload';
import './App.css'

function App() {
  return (
    <div className='root'>
      <h2 className='text-center m-5 text-light'>The File Uploader</h2>
      <p className='text-center m-5 text-light'>(With React.js, Express & Multer)</p>
      <div className='file-upload-wrapper'>
        <div className='result'></div>
        <FileUpload />
      </div>
    </div>
  );
}


export default App;
