import ItemApi from "./ItemApi"
// import Item from "./Item" item de matafuegos

const ItemList = ({products}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {
        products.map((product) => (
            // <Item product={product} key={product.id}/>
            <ItemApi product={product} key={product.id}/>
        ))
    }
    </div>
  )
}

export default ItemList
