const sortDocs = (mobile, docs) => {
  if (mobile || docs === 1) {
    return 1;
  } else {
    return 3;
  }
};

export default sortDocs;
