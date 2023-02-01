const { db, Student, Campus } = require("../server/db");

const seed = async () => {
  try {
    // sync the database
    await db.sync({ force: true });
    // seed the database with some initial data
    const [
      Marven,
      James,
      Cory,
      Donaugh,
      Kiri,
      Jamie,
      Shell,
      Kacy,
      Kinsley,
      Glenine,
      Chester,
      Ludvig,
      Hilliard,
      Rubia,
      Walt,
      Allegra,
      Katleen,
      Josee,
      Elvera,
      Brandi,
      Pen,
      Anastasie,
      Jasmine,
      Austina,
      Robinet,
      Belinda,
      Tiffany,
      Deny,
      Belia,
      Curcio,
      Tonnie,
      Hamilton,
      Augy,
      Judie,
      Bradan,
      Miltie,
      Jordon,
      Dani,
      Maurits,
      Orazio,
      Amalita,
      Loydie,
      Caroljean,
      Agata,
      Winfred,
      Hermy,
      Vyky,
      Robby,
      Horace,
      Annamaria,
      Josepha,
      Granville,
      Barby,
      Connor,
      Bree,
      Ardra,
      Clareta,
      Worthington,
      Evangelin,
      Aldus,
      Richmound,
      Quent,
      Dukey,
      Hillie,
      Jazmin,
      Aloysia,
      Dillie,
      Arnold,
      Janice,
      Bevan,
      Elvin,
      Caterina,
      Patton,
      Averil,
      Katie,
      Gweneth,
      Muriel,
      Louie,
      Maridel,
      Olivie,
      Mahmud,
      Tilly,
      Zondra,
      Glyn,
      Rita,
      Dal,
      Magdaia,
      Luther,
      Adriena,
      Angeline,
      Franny,
      Neale,
      Kimberlyn,
      Malachi,
      Estrella,
      Alwyn,
      Albertine,
      Elsbeth,
    ] = await Promise.all([
      Student.create({
        firstName: "Marven",
        lastName: "Mathelier",
        email: "mmathelier@gmail.com",
        imageUrl:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGg6Ku6TEYqsg/profile-displayphoto-shrink_800_800/0/1633735682108?e=1676505600&v=beta&t=XP2pajpQxOzEUtO45RJ8k7q4QKSLnHrfeD4mgRQJxLs",
        gpa: 4.0,
      }),
      Student.create({
        firstName: "James",
        lastName: "Yeates",
        email: "jamesye@gmail.com",
        imageUrl:
          "https://media-exp1.licdn.com/dms/image/C5603AQHjYgOLycqQ3w/profile-displayphoto-shrink_800_800/0/1580874517151?e=1676505600&v=beta&t=_V1gOrIfzmR1KN9aur6AKhT9zBfhTpdx4Ohtby9xQuU",
        gpa: 3.4,
      }),
      Student.create({
        firstName: "Cory",
        lastName: "Gold",
        email: "goldminecory@gmail.com",
        imageUrl:
          "https://media-exp1.licdn.com/dms/image/C4E03AQFPJ4W5KPQKtQ/profile-displayphoto-shrink_800_800/0/1637612893766?e=1676505600&v=beta&t=CNxAyN0VvqCJoGoYQ9PgvMhxmvZGRFKqGjx47BrDALg",
        gpa: 3.6,
      }),
      Student.create({
        firstName: "Donaugh",
        lastName: "Whittles",
        email: "dwhittles0@1688.com",
        imageUrl:
          "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
        gpa: 2.57,
      }),
      Student.create({
        firstName: "Kiri",
        lastName: "Maffi",
        email: "kmaffi0@ycombinator.com",
        imageUrl:
          "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
        gpa: 3.84,
      }),
      Student.create({
        firstName: "Jamie",
        lastName: "Clulow",
        email: "jclulow1@youtu.be",
        imageUrl:
          "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
        gpa: 3.74,
      }),
      Student.create({
        firstName: "Shell",
        lastName: "Edeson",
        email: "sedeson2@ucla.edu",
        imageUrl:
          "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
        gpa: 2.75,
      }),
      Student.create({
        firstName: "Kacy",
        lastName: "Garlicke",
        email: "kgarlicke3@slate.com",
        imageUrl:
          "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
        gpa: 1.51,
      }),
      Student.create({
        firstName: "Kinsley",
        lastName: "Filintsev",
        email: "kfilintsev4@webs.com",
        imageUrl:
          "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
        gpa: 3.85,
      }),
      Student.create({
        firstName: "Glenine",
        lastName: "Maskill",
        email: "gmaskill5@huffingtonpost.com",
        imageUrl:
          "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
        gpa: 2.35,
      }),
      Student.create({
        firstName: "Chester",
        lastName: "Arndtsen",
        email: "carndtsen6@clickbank.net",
        imageUrl:
          "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
        gpa: 3.02,
      }),
      Student.create({
        firstName: "Ludvig",
        lastName: "Espina",
        email: "lespina7@ucoz.com",
        imageUrl:
          "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
        gpa: 1.68,
      }),
      Student.create({
        firstName: "Hilliard",
        lastName: "Brainsby",
        email: "hbrainsby8@blinklist.com",
        imageUrl:
          "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
        gpa: 1.58,
      }),
      Student.create({
        firstName: "Rubia",
        lastName: "Roblin",
        email: "rroblin9@smh.com.au",
        imageUrl:
          "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
        gpa: 2.57,
      }),
      Student.create({
        firstName: "Walt",
        lastName: "Renshaw",
        email: "wrenshawd@wikispaces.com",
        imageUrl: "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
        gpa: 2.78,
      }),
      Student.create({
        firstName: "Allegra",
        lastName: "Fisbey",
        email: "afisbeye@over-blog.com",
        imageUrl: "http://dummyimage.com/209x100.png/ff4444/ffffff",
        gpa: 3.84,
      }),
      Student.create({
        firstName: "Katleen",
        lastName: "Cucinotta",
        email: "kcucinottaf@livejournal.com",
        imageUrl: "http://dummyimage.com/243x100.png/dddddd/000000",
        gpa: 2.22,
      }),
      Student.create({
        firstName: "Josee",
        lastName: "Dracksford",
        email: "jdracksfordg@baidu.com",
        imageUrl: "http://dummyimage.com/181x100.png/ff4444/ffffff",
        gpa: 1.57,
      }),
      Student.create({
        firstName: "Elvera",
        lastName: "Halligan",
        email: "ehalliganh@nytimes.com",
        imageUrl: "http://dummyimage.com/244x100.png/5fa2dd/ffffff",
        gpa: 3.9,
      }),
      Student.create({
        firstName: "Brandi",
        lastName: "Presslie",
        email: "bpressliei@spiegel.de",
        imageUrl: "http://dummyimage.com/131x100.png/cc0000/ffffff",
        gpa: 1.99,
      }),
      Student.create({
        firstName: "Pen",
        lastName: "MacCourt",
        email: "pmaccourtj@usda.gov",
        imageUrl: "http://dummyimage.com/146x100.png/ff4444/ffffff",
        gpa: 1.39,
      }),
      Student.create({
        firstName: "Anastasie",
        lastName: "McCreery",
        email: "amccreeryk@networksolutions.com",
        imageUrl: "http://dummyimage.com/151x100.png/cc0000/ffffff",
        gpa: 2.76,
      }),
      Student.create({
        firstName: "Jasmine",
        lastName: "Morrish",
        email: "jmorrishl@narod.ru",
        imageUrl: "http://dummyimage.com/198x100.png/5fa2dd/ffffff",
        gpa: 3.28,
      }),
      Student.create({
        firstName: "Austina",
        lastName: "Bugdell",
        email: "abugdellm@booking.com",
        imageUrl: "http://dummyimage.com/148x100.png/5fa2dd/ffffff",
        gpa: 1.76,
      }),
      Student.create({
        firstName: "Robinet",
        lastName: "Ogg",
        email: "roggn@cbslocal.com",
        imageUrl: "http://dummyimage.com/113x100.png/cc0000/ffffff",
        gpa: 1.16,
      }),
      Student.create({
        firstName: "Belinda",
        lastName: "Rochelle",
        email: "brochelleo@oakley.com",
        imageUrl: "http://dummyimage.com/223x100.png/ff4444/ffffff",
        gpa: 1.6,
      }),
      Student.create({
        firstName: "Tiffany",
        lastName: "Comley",
        email: "tcomleyp@addtoany.com",
        imageUrl: "http://dummyimage.com/210x100.png/ff4444/ffffff",
        gpa: 1.16,
      }),
      Student.create({
        firstName: "Deny",
        lastName: "Mateescu",
        email: "dmateescuq@uol.com.br",
        imageUrl: "http://dummyimage.com/232x100.png/cc0000/ffffff",
        gpa: 3.31,
      }),
      Student.create({
        firstName: "Belia",
        lastName: "Light",
        email: "blightr@gravatar.com",
        imageUrl: "http://dummyimage.com/228x100.png/cc0000/ffffff",
        gpa: 1.07,
      }),
      Student.create({
        firstName: "Curcio",
        lastName: "Ellcome",
        email: "cellcomes@amazon.co.uk",
        imageUrl: "http://dummyimage.com/238x100.png/dddddd/000000",
        gpa: 3.64,
      }),
      Student.create({
        firstName: "Tonnie",
        lastName: "Catton",
        email: "tcattont@altervista.org",
        imageUrl: "http://dummyimage.com/206x100.png/cc0000/ffffff",
        gpa: 2.72,
      }),
      Student.create({
        firstName: "Hamilton",
        lastName: "Sperwell",
        email: "hsperwellu@plala.or.jp",
        imageUrl: "http://dummyimage.com/128x100.png/5fa2dd/ffffff",
        gpa: 2.65,
      }),
      Student.create({
        firstName: "Augy",
        lastName: "Sandwith",
        email: "asandwithv@alexa.com",
        imageUrl: "http://dummyimage.com/203x100.png/cc0000/ffffff",
        gpa: 2.47,
      }),
      Student.create({
        firstName: "Judie",
        lastName: "Madelin",
        email: "jmadelinw@stanford.edu",
        imageUrl: "http://dummyimage.com/121x100.png/cc0000/ffffff",
        gpa: 3.34,
      }),
      Student.create({
        firstName: "Bradan",
        lastName: "Ickovitz",
        email: "bickovitzx@google.com",
        imageUrl: "http://dummyimage.com/148x100.png/5fa2dd/ffffff",
        gpa: 2.02,
      }),
      Student.create({
        firstName: "Miltie",
        lastName: "Garfield",
        email: "mgarfieldy@miitbeian.gov.cn",
        imageUrl: "http://dummyimage.com/250x100.png/cc0000/ffffff",
        gpa: 1.03,
      }),
      Student.create({
        firstName: "Jordon",
        lastName: "Bridewell",
        email: "jbridewellz@goodreads.com",
        imageUrl: "http://dummyimage.com/250x100.png/ff4444/ffffff",
        gpa: 2.28,
      }),
      Student.create({
        firstName: "Dani",
        lastName: "Fish",
        email: "dfish10@smh.com.au",
        imageUrl: "http://dummyimage.com/242x100.png/cc0000/ffffff",
        gpa: 2.82,
      }),
      Student.create({
        firstName: "Maurits",
        lastName: "Weatherley",
        email: "mweatherley11@theguardian.com",
        imageUrl: "http://dummyimage.com/238x100.png/5fa2dd/ffffff",
        gpa: 2.66,
      }),
      Student.create({
        firstName: "Orazio",
        lastName: "Baroc",
        email: "obaroc12@liveinternet.ru",
        imageUrl: "http://dummyimage.com/199x100.png/5fa2dd/ffffff",
        gpa: 2.71,
      }),
      Student.create({
        firstName: "Amalita",
        lastName: "Hamments",
        email: "ahamments13@ted.com",
        imageUrl: "http://dummyimage.com/198x100.png/5fa2dd/ffffff",
        gpa: 2.84,
      }),
      Student.create({
        firstName: "Loydie",
        lastName: "Kitchingman",
        email: "lkitchingman14@scientificamerican.com",
        imageUrl: "http://dummyimage.com/149x100.png/dddddd/000000",
        gpa: 2.52,
      }),
      Student.create({
        firstName: "Caroljean",
        lastName: "Balfre",
        email: "cbalfre15@dion.ne.jp",
        imageUrl: "http://dummyimage.com/137x100.png/ff4444/ffffff",
        gpa: 3.36,
      }),
      Student.create({
        firstName: "Agata",
        lastName: "De Bernardis",
        email: "adebernardis16@yahoo.com",
        imageUrl: "http://dummyimage.com/248x100.png/dddddd/000000",
        gpa: 1.52,
      }),
      Student.create({
        firstName: "Winfred",
        lastName: "Fairlie",
        email: "wfairlie17@home.pl",
        imageUrl: "http://dummyimage.com/201x100.png/5fa2dd/ffffff",
        gpa: 3.31,
      }),
      Student.create({
        firstName: "Hermy",
        lastName: "Rowlands",
        email: "hrowlands18@google.co.uk",
        imageUrl: "http://dummyimage.com/124x100.png/dddddd/000000",
        gpa: 3.37,
      }),
      Student.create({
        firstName: "Vyky",
        lastName: "Heningham",
        email: "vheningham19@gmpg.org",
        imageUrl: "http://dummyimage.com/195x100.png/dddddd/000000",
        gpa: 2.69,
      }),
      Student.create({
        firstName: "Robby",
        lastName: "Crosetto",
        email: "rcrosetto1a@marriott.com",
        imageUrl: "http://dummyimage.com/110x100.png/5fa2dd/ffffff",
        gpa: 1.28,
      }),
      Student.create({
        firstName: "Horace",
        lastName: "Simione",
        email: "hsimione1b@xing.com",
        imageUrl: "http://dummyimage.com/103x100.png/dddddd/000000",
        gpa: 1.39,
      }),
      Student.create({
        firstName: "Annamaria",
        lastName: "Simko",
        email: "asimko1c@kickstarter.com",
        imageUrl: "http://dummyimage.com/200x100.png/5fa2dd/ffffff",
        gpa: 1.45,
      }),
      Student.create({
        firstName: "Josepha",
        lastName: "Ace",
        email: "jace1d@last.fm",
        imageUrl: "http://dummyimage.com/103x100.png/ff4444/ffffff",
        gpa: 2.41,
      }),
      Student.create({
        firstName: "Granville",
        lastName: "Hopkyns",
        email: "ghopkyns1e@mtv.com",
        imageUrl: "http://dummyimage.com/183x100.png/dddddd/000000",
        gpa: 2.98,
      }),
      Student.create({
        firstName: "Barby",
        lastName: "Conlon",
        email: "bconlon1f@berkeley.edu",
        imageUrl: "http://dummyimage.com/188x100.png/5fa2dd/ffffff",
        gpa: 1.67,
      }),
      Student.create({
        firstName: "Connor",
        lastName: "Coghlin",
        email: "ccoghlin1g@pcworld.com",
        imageUrl: "http://dummyimage.com/246x100.png/ff4444/ffffff",
        gpa: 1.44,
      }),
      Student.create({
        firstName: "Bree",
        lastName: "Reneke",
        email: "breneke1h@miitbeian.gov.cn",
        imageUrl: "http://dummyimage.com/250x100.png/5fa2dd/ffffff",
        gpa: 3.99,
      }),
      Student.create({
        firstName: "Ardra",
        lastName: "Imm",
        email: "aimm1i@oaic.gov.au",
        imageUrl: "http://dummyimage.com/216x100.png/ff4444/ffffff",
        gpa: 1.48,
      }),
      Student.create({
        firstName: "Clareta",
        lastName: "Hagston",
        email: "chagston1j@archive.org",
        imageUrl: "http://dummyimage.com/196x100.png/cc0000/ffffff",
        gpa: 1.95,
      }),
      Student.create({
        firstName: "Worthington",
        lastName: "Wermerling",
        email: "wwermerling1k@meetup.com",
        imageUrl: "http://dummyimage.com/159x100.png/cc0000/ffffff",
        gpa: 2.89,
      }),
      Student.create({
        firstName: "Evangelin",
        lastName: "Giametti",
        email: "egiametti1l@slashdot.org",
        imageUrl: "http://dummyimage.com/162x100.png/ff4444/ffffff",
        gpa: 1.52,
      }),
      Student.create({
        firstName: "Aldus",
        lastName: "McReidy",
        email: "amcreidy1m@qq.com",
        imageUrl: "http://dummyimage.com/120x100.png/dddddd/000000",
        gpa: 2.32,
      }),
      Student.create({
        firstName: "Richmound",
        lastName: "Hazelgreave",
        email: "rhazelgreave1n@illinois.edu",
        imageUrl: "http://dummyimage.com/219x100.png/ff4444/ffffff",
        gpa: 3.38,
      }),
      Student.create({
        firstName: "Quent",
        lastName: "Hitcham",
        email: "qhitcham1o@nyu.edu",
        imageUrl: "http://dummyimage.com/200x100.png/5fa2dd/ffffff",
        gpa: 1.64,
      }),
      Student.create({
        firstName: "Dukey",
        lastName: "Leason",
        email: "dleason1p@altervista.org",
        imageUrl: "http://dummyimage.com/147x100.png/ff4444/ffffff",
        gpa: 1.69,
      }),
      Student.create({
        firstName: "Hillie",
        lastName: "Sunshine",
        email: "hsunshine1q@google.com.au",
        imageUrl: "http://dummyimage.com/110x100.png/dddddd/000000",
        gpa: 2.52,
      }),
      Student.create({
        firstName: "Jazmin",
        lastName: "Kliemke",
        email: "jkliemke1r@imageshack.us",
        imageUrl: "http://dummyimage.com/108x100.png/dddddd/000000",
        gpa: 2.75,
      }),
      Student.create({
        firstName: "Aloysia",
        lastName: "Keilloh",
        email: "akeilloh1s@homestead.com",
        imageUrl: "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
        gpa: 2.48,
      }),
      Student.create({
        firstName: "Dillie",
        lastName: "Fleet",
        email: "dfleet1t@livejournal.com",
        imageUrl: "http://dummyimage.com/158x100.png/dddddd/000000",
        gpa: 3.52,
      }),
      Student.create({
        firstName: "Arnold",
        lastName: "Checcucci",
        email: "acheccucci1u@auda.org.au",
        imageUrl: "http://dummyimage.com/155x100.png/cc0000/ffffff",
        gpa: 1.19,
      }),
      Student.create({
        firstName: "Janice",
        lastName: "Mollatt",
        email: "jmollatt1v@ihg.com",
        imageUrl: "http://dummyimage.com/150x100.png/5fa2dd/ffffff",
        gpa: 3.67,
      }),
      Student.create({
        firstName: "Bevan",
        lastName: "Lavarack",
        email: "blavarack1w@purevolume.com",
        imageUrl: "http://dummyimage.com/224x100.png/cc0000/ffffff",
        gpa: 2.93,
      }),
      Student.create({
        firstName: "Elvin",
        lastName: "Fossey",
        email: "efossey1x@usgs.gov",
        imageUrl: "http://dummyimage.com/201x100.png/dddddd/000000",
        gpa: 1.08,
      }),
      Student.create({
        firstName: "Caterina",
        lastName: "Curzey",
        email: "ccurzey1y@icq.com",
        imageUrl: "http://dummyimage.com/149x100.png/ff4444/ffffff",
        gpa: 2.05,
      }),
      Student.create({
        firstName: "Patton",
        lastName: "Planks",
        email: "pplanks1z@dion.ne.jp",
        imageUrl: "http://dummyimage.com/153x100.png/5fa2dd/ffffff",
        gpa: 3.84,
      }),
      Student.create({
        firstName: "Averil",
        lastName: "Pisculli",
        email: "apisculli20@dyndns.org",
        imageUrl: "http://dummyimage.com/246x100.png/dddddd/000000",
        gpa: 1.02,
      }),
      Student.create({
        firstName: "Katie",
        lastName: "Phetteplace",
        email: "kphetteplace21@examiner.com",
        imageUrl: "http://dummyimage.com/228x100.png/5fa2dd/ffffff",
        gpa: 3.43,
      }),
      Student.create({
        firstName: "Gweneth",
        lastName: "Goncaves",
        email: "ggoncaves22@ebay.co.uk",
        imageUrl: "http://dummyimage.com/233x100.png/cc0000/ffffff",
        gpa: 1.67,
      }),
      Student.create({
        firstName: "Muriel",
        lastName: "Tosney",
        email: "mtosney23@istockphoto.com",
        imageUrl: "http://dummyimage.com/250x100.png/ff4444/ffffff",
        gpa: 1.34,
      }),
      Student.create({
        firstName: "Louie",
        lastName: "Tavener",
        email: "ltavener24@zdnet.com",
        imageUrl: "http://dummyimage.com/110x100.png/cc0000/ffffff",
        gpa: 1.86,
      }),
      Student.create({
        firstName: "Maridel",
        lastName: "Abramov",
        email: "mabramov25@newsvine.com",
        imageUrl: "http://dummyimage.com/156x100.png/ff4444/ffffff",
        gpa: 1.79,
      }),
      Student.create({
        firstName: "Olivie",
        lastName: "Armell",
        email: "oarmell26@networkadvertising.org",
        imageUrl: "http://dummyimage.com/229x100.png/dddddd/000000",
        gpa: 2.8,
      }),
      Student.create({
        firstName: "Mahmud",
        lastName: "Manchett",
        email: "mmanchett27@archive.org",
        imageUrl: "http://dummyimage.com/237x100.png/cc0000/ffffff",
        gpa: 2.39,
      }),
      Student.create({
        firstName: "Tilly",
        lastName: "Kraft",
        email: "tkraft28@thetimes.co.uk",
        imageUrl: "http://dummyimage.com/195x100.png/cc0000/ffffff",
        gpa: 3.85,
      }),
      Student.create({
        firstName: "Zondra",
        lastName: "Ridewood",
        email: "zridewood29@seattletimes.com",
        imageUrl: "http://dummyimage.com/160x100.png/cc0000/ffffff",
        gpa: 1.02,
      }),
      Student.create({
        firstName: "Glyn",
        lastName: "Lancastle",
        email: "glancastle2a@indiatimes.com",
        imageUrl: "http://dummyimage.com/236x100.png/5fa2dd/ffffff",
        gpa: 3.79,
      }),
      Student.create({
        firstName: "Rita",
        lastName: "Dallas",
        email: "rdallas2b@ucoz.com",
        imageUrl: "http://dummyimage.com/238x100.png/dddddd/000000",
        gpa: 1.91,
      }),
      Student.create({
        firstName: "Dal",
        lastName: "Casburn",
        email: "dcasburn2c@about.com",
        imageUrl: "http://dummyimage.com/176x100.png/5fa2dd/ffffff",
        gpa: 1.49,
      }),
      Student.create({
        firstName: "Magdaia",
        lastName: "Poznan",
        email: "mpoznan2d@examiner.com",
        imageUrl: "http://dummyimage.com/195x100.png/5fa2dd/ffffff",
        gpa: 1.75,
      }),
      Student.create({
        firstName: "Luther",
        lastName: "Fogg",
        email: "lfogg2e@prnewswire.com",
        imageUrl: "http://dummyimage.com/226x100.png/cc0000/ffffff",
        gpa: 3.31,
      }),
      Student.create({
        firstName: "Adriena",
        lastName: "Burt",
        email: "aburt2f@uol.com.br",
        imageUrl: "http://dummyimage.com/152x100.png/cc0000/ffffff",
        gpa: 2.96,
      }),
      Student.create({
        firstName: "Angeline",
        lastName: "Oland",
        email: "aoland2g@huffingtonpost.com",
        imageUrl: "http://dummyimage.com/185x100.png/cc0000/ffffff",
        gpa: 1.66,
      }),
      Student.create({
        firstName: "Franny",
        lastName: "Izzat",
        email: "fizzat2h@mozilla.org",
        imageUrl: "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
        gpa: 1.8,
      }),
      Student.create({
        firstName: "Neale",
        lastName: "MacLleese",
        email: "nmaclleese2i@symantec.com",
        imageUrl: "http://dummyimage.com/249x100.png/ff4444/ffffff",
        gpa: 3.21,
      }),
      Student.create({
        firstName: "Kimberlyn",
        lastName: "Eade",
        email: "keade2j@wp.com",
        imageUrl: "http://dummyimage.com/112x100.png/ff4444/ffffff",
        gpa: 2.47,
      }),
      Student.create({
        firstName: "Malachi",
        lastName: "Cherry",
        email: "mcherry2k@bigcartel.com",
        imageUrl: "http://dummyimage.com/226x100.png/dddddd/000000",
        gpa: 1.94,
      }),
      Student.create({
        firstName: "Estrella",
        lastName: "Bussens",
        email: "ebussens2l@feedburner.com",
        imageUrl: "http://dummyimage.com/202x100.png/5fa2dd/ffffff",
        gpa: 3.51,
      }),
      Student.create({
        firstName: "Alwyn",
        lastName: "Bollen",
        email: "abollen2m@telegraph.co.uk",
        imageUrl: "http://dummyimage.com/133x100.png/5fa2dd/ffffff",
        gpa: 1.93,
      }),
      Student.create({
        firstName: "Albertine",
        lastName: "Gristhwaite",
        email: "agristhwaite2n@shutterfly.com",
        imageUrl: "http://dummyimage.com/206x100.png/5fa2dd/ffffff",
        gpa: 3.56,
      }),
      Student.create({
        firstName: "Elsbeth",
        lastName: "Wearing",
        email: "ewearing2o@biglobe.ne.jp",
        imageUrl: "http://dummyimage.com/205x100.png/ff4444/ffffff",
        gpa: 1.47,
      }),
    ]);

    const [stanford, harvard] = await Promise.all([
      Campus.create({
        name: "Stanford",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png",
        address: "450 Serra Mall, Stanford, CA 94305",
        description:
          "Stanford University, officially Leland Stanford Junior University, is a private research university in Stanford, California.",
      }),
      Campus.create({
        name: "Harvard",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png",
        address: "117 Western Ave, Boston, MA 02163",
        description:
          "Harvard University is a private Ivy League research university in Cambridge, Massachusetts.",
      }),
    ]);

    console.log(`Seeding successful!!!`);
    // associate the students with the campus
    await Marven.setCampus(stanford);
    await Cory.setCampus(harvard);
    await James.setCampus(harvard);
    await Donaugh.setCampus(stanford);
    await Kiri.setCampus(harvard);
    await Jamie.setCampus(harvard);
    await Shell.setCampus(harvard);
    await Kacy.setCampus(harvard);
    await Kinsley.setCampus(stanford);
    await Glenine.setCampus(stanford);
    await Chester.setCampus(stanford);
    await Hilliard.setCampus(harvard);
    await Ludvig.setCampus(harvard);
    await Rubia.setCampus(harvard);
    await Walt.setCampus(harvard);
    await Allegra.setCampus(harvard);
    await Katleen.setCampus(harvard);
    await Josee.setCampus(harvard);
    await Elvera.setCampus(stanford);
    await Brandi.setCampus(stanford);
    await Pen.setCampus(stanford);
    await Anastasie.setCampus(harvard);
    await Jasmine.setCampus(harvard);
    await Austina.setCampus(harvard);
    await Robinet.setCampus(harvard);
    await Belinda.setCampus(harvard);
    await Tiffany.setCampus(harvard);
    await Deny.setCampus(harvard);
    await Belia.setCampus(stanford);
    await Curcio.setCampus(stanford);
    await Tonnie.setCampus(stanford);
    await Hamilton.setCampus(harvard);
    await Augy.setCampus(harvard);
    await Judie.setCampus(harvard);
    await Bradan.setCampus(harvard);
    await Miltie.setCampus(harvard);
    await Jordon.setCampus(harvard);
    await Dani.setCampus(harvard);
    await Maurits.setCampus(stanford);
    await Orazio.setCampus(stanford);
    await Amalita.setCampus(stanford);
    await Loydie.setCampus(harvard);
    await Caroljean.setCampus(harvard);
    await Agata.setCampus(harvard);
    await Winfred.setCampus(harvard);
    await Hermy.setCampus(harvard);
    await Robby.setCampus(harvard);
    await Vyky.setCampus(harvard);
    await Horace.setCampus(stanford);
    await Annamaria.setCampus(stanford);
    await Josepha.setCampus(stanford);
    await Granville.setCampus(harvard);
    await Barby.setCampus(harvard);
    await Connor.setCampus(harvard);
    await Bree.setCampus(harvard);
    await Ardra.setCampus(harvard);
    await Clareta.setCampus(harvard);
    await Evangelin.setCampus(harvard);
    await Worthington.setCampus(stanford);
    await Aldus.setCampus(stanford);
    await Richmound.setCampus(stanford);
    await Quent.setCampus(harvard);
    await Dukey.setCampus(harvard);
    await Hillie.setCampus(harvard);
    await Jazmin.setCampus(harvard);
    await Aloysia.setCampus(harvard);
    await Dillie.setCampus(harvard);
    await Arnold.setCampus(harvard);
    await Janice.setCampus(stanford);
    await Bevan.setCampus(stanford);
    await Elvin.setCampus(stanford);
    await Caterina.setCampus(harvard);
    await Patton.setCampus(harvard);
    await Averil.setCampus(harvard);
    await Katie.setCampus(harvard);
    await Gweneth.setCampus(harvard);
    await Muriel.setCampus(harvard);
    await Louie.setCampus(harvard);
    await Maridel.setCampus(stanford);
    await Olivie.setCampus(stanford);
    await Mahmud.setCampus(stanford);
    await Tilly.setCampus(harvard);
    await Zondra.setCampus(harvard);
    await Glyn.setCampus(harvard);
    await Rita.setCampus(harvard);
    await Dal.setCampus(harvard);
    await Magdaia.setCampus(harvard);
    await Luther.setCampus(harvard);
    await Adriena.setCampus(stanford);
    await Angeline.setCampus(stanford);
    await Franny.setCampus(stanford);
    await Neale.setCampus(harvard);
    await Kimberlyn.setCampus(harvard);
    await Malachi.setCampus(harvard);
    await Estrella.setCampus(harvard);
    await Alwyn.setCampus(harvard);
    await Albertine.setCampus(harvard);
    await Elsbeth.setCampus(harvard);
  } catch (error) {
    console.error("Error syncing and seeding database:", error);
  }
};

seed();
