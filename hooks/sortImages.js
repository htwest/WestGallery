// Sorts Images retrived from DB and catagorizes

const sortImages = (docs) => {
  const sortedImages = [];
  const categories = [];
  docs.forEach((doc) => {
    const category = doc.category;
    if (!categories.includes(category)) {
      const newCat = {};
      newCat[category] = [doc];
      sortedImages.push(newCat);
      categories.push(category);
    } else {
      for (let i = 0; i < sortedImages.length; i++) {
        if (sortedImages[i][category]) {
          sortedImages[i][category].push(doc);
        }
      }
    }
  });

  return sortedImages;
};

export default sortImages;
