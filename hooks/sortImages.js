const sortImages = (docs) => {
  const sortedImages = [];
  const categories = [];
  docs.forEach((doc) => {
    const category = doc.category;
    console.log(category);
    if (!categories.includes(category)) {
      const catObj = { category: [] };
      categories.push(catObj);
    }

    // if (sortedImages.length = 0) {
    //   const firstCat = { doc.category : [ doc ]}
    //   sortedImages.push(firstCat)
    // } else {
    //   const category = doc.category;
    //   for (let i = 0; i < sortedImages.length; i++) {
    //     if (sortedImages[i].category) {
    //       sortedImages[i].category.push(doc);
    //     }
    //     if ( i = sortedImages.length -1 && !sortedImages[i].category) {
    //       const newCat = { category : [ doc ]}
    //       sortedImages.push()
    //     }
    //   }
    // }

    // if (!sortedImages[doc.category]) {
    //   sortedImages[doc.category] = [];
    //   sortedImages[doc.category].push(doc);
    // } else {
    //   sortedImages[doc.category].push(doc);
    // }
  });

  // console.log({ categories });

  return sortedImages;
};

export default sortImages;
