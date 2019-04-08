const officialsName = [
  {
    photo:
      "http://dallascityhall.com/government/PublishingImages/mayor-rawlings.jpg",
    title: "Mayor",
    name: "Mike Rawlings",
    email: "mike.rawlings@dallascityhall.com",
    phoneNumber: "214.670.0646",
    region: "local"
  },
  {
    photo: "https://dallascityhall.com/government/citycouncil/district2/PublishingImages/Pages/default/Adam%20Medrano%20District%202.JPG",
    title: "Deputy Mayor",
    name: "Adam Moreno",
    email: "adam.moreno@dallascityhall.com",
    phoneNumber: "214.670.4048",
    region: "local"
  },
  {
    photo: "https://s3.amazonaws.com/ballotpedia-api/storage/uploads/thumbs/200/300/crop/best/Casey_Thomas_II.png",
    title: "City Council Chairman",
    name: "Casey Thomas",
    email: "casey.thomas@dallascityhall.com",
    phoneNumber: "214.670.0772",
    region: "local"
  },
  {
    photo: "https://dallascityhall.com/government/PublishingImages/tc-broadnax.jpg",
    title: "City Manager",
    name: "T.C. Broadnax",
    email: "tc.broadnax@dallascityhall.com",
    phoneNumber: "214.670.3297",
    region: "local"
  },
  {
    photo: "https://pbs.twimg.com/media/Dn8j_31U4AALUUe.jpg",
    title: "Chief of Police",
    name: "Renee Hall",
    email: "dpd@dallascityhall.com",
    phoneNumber: "214.670.4420",
    region: "local"
  },
  {
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Greg_Abbott_2015.jpg/220px-Greg_Abbott_2015.jpg",
    title: "Govenor",
    name: "Greg Abbott",
    email: "govenor@govenor.texas.gov",
    phoneNumber: "512.463.2000",
    region: "state"
  },
  {
    photo: "https://www.gannett-cdn.com/presto/2018/12/17/PCCT/6552a1fc-8882-4e45-8391-2fbaaa8e68c2-David_Whitley.jpg?crop=298,170,x0,y25?width=1200",
    title: "Secretary of State",
    name: "David Whitley",
    email: "secretary@sos.texas.gov",
    phoneNumber: "512.463.5770",
    region: "state"
  },
  {
    photo:
      "https://static.politico.com/dims4/default/46a29d0/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fs3-origin-images.politico.com%2F2013%2F09%2F27%2F132713_ted_cruz_john_cornyn_aps_605.jpg",
    title: "United States Senator",
    name: "Ted Cruz & John Cornyn",
    email: "ted.cruz@mail.senate.gov,john.cornyn@mail.senate.gov",
    phoneNumber: "214.599.8749 ,202.224.2934",
    region: "state"
  }
];

const favOfficals = [
  {
    name: "",
    office: ""
  }
];

const receiveAllOfficialsName = (req, res) => {
  res.json(officialsName);
};

const receiveAllWishlist = (req, res) => {
  res.json(favOfficals);
};

const enter = (req, res) => {
  let NewOfficalNames = officialsName.filter(Element => {
    return (
      Element.title.toLowerCase() === req.params.title.toLowerCase() &&
      Element.region === "local"
    );
  });
  console.log(NewOfficalNames);
  res.json(NewOfficalNames);
};

const clearwishlist = (req, res) => {
  const index = wishlist;
};

function clear(req, res) {
  let NewOfficalNames = officialsName.filter(Element => {
    return (
      Element.title.toLowerCase() === req.params.title.toLowerCase() &&
      Element.region === "state"
    );
  });
  console.log(NewOfficalNames);
  res.json(NewOfficalNames);
}
module.exports = {
  receiveAllOfficialsName,
  receiveAllWishlist,
  enter,
  clear
};
