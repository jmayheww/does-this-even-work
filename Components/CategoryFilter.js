import React from "react";

function CategoryFilter({ categories, curCat, setCurCat }) {
  function handleSetCurCat({ target }) {
    const catName = target.textContent;

    setCurCat(catName);
  }

  const displayCategoryButtons = categories.map((category) => {
    const selected = category === curCat ? "selected" : null;
    return (
      <button key={category} className={selected} onClick={handleSetCurCat}>
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategoryButtons}
    </div>
  );
}

export default CategoryFilter;
