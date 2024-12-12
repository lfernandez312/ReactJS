const ItemListContainer = ({ greeting }) => {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-6 text-center bg-red-600 dark:bg-red-800">
        <h2 className="text-white text-xl font-semibold dark:text-white">{greeting}</h2>
      </div>
    );
};
  
export default ItemListContainer;

  