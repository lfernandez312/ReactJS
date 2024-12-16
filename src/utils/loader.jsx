import { SyncLoader } from 'react-spinners';

const Loader = ({ loading, style = {} }) => {
  if (!loading) return null; // No mostrar nada si no está cargando
  
  return (
    <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", ...style }}>
      <SyncLoader color="#ffffff" />
    </div>
  );
};

export default Loader;
