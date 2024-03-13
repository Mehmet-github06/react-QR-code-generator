
import QRCode from "react-qr-code";


function App() {
  return (
    <div>
    <header>
      <h1>
       😎 MEHMET DOĞAN
      </h1>
      <QRCode 
      size={256}
      style={{height:"auto",maxWidth:"200px",width:"200px"}}
      />
    </header>
    </div>
  );
}

export default App;
