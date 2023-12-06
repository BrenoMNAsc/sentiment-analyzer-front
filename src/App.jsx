import './App.css';
import Button, { buttonTypes } from './elements/components/button';
import FileUploader from './elements/fragments/fileuploader';
import Textfield from './elements/components/textfield';

function App() {
  return (
    <div className="bg-home">
      <Textfield/>
      <FileUploader />
    </div>

  );
}

export default App;
