import Item from "./Item";

const ItemList = ({products}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => {
        <Item product={product} key={product.id} />
    })}
    </div>
  )
}

export default ItemList
