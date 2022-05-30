import "./categories.menu.style.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoryMenu = ({ categories }) => {
  return (
    <div>
      <div className={"categories-container"}>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};
export default CategoryMenu;
