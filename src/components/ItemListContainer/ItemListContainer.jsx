const ItemListContainer = ({ greeting }) => {
  return (
    <div className="bg-blue-500 p-6 text-center">
      <h2 className="text-white text-xl font-semibold">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
