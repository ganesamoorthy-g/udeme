const contacts = [
    {
        id: 1,
      name: "Ganesh",
      imgURL:
        "data:image/jpeg;base64,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",
      phone: "+91 9791397379",
      email: "gane.com"
    },
    {
        id: 2,
      name: "Jeyasudha",
      imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2Ez3p6DN0pljjxTLNBbja7-ICYZarABgNLuLfTjqHg&s",
      phone: "+987 654 321",
      email: "jack@nowhere.com"
    },
    {
        id: 3,
      name: "Deeshna Sree",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5puJD3LxrkINGXj5leLTr00g1zG_weXgiAROS3yXd&s",
      phone: "+918 372 574",
      email: "gmail@chucknorris.com"
    }
  ];

export default contacts