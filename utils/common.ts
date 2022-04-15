import { useIntl } from "react-intl";
import { toast } from "react-hot-toast";
import SecureLS from "secure-ls";

let _timerId = null


export const subjects = {
  ordinaryGrammar : [
    {title: "Accounting"},
    {title: "Biology"},
    {title: "Chemistry"},
    {title: "Commerce"},
    {title: "Economics"},
    {title: "English Language"},
    {title: "Literature in English"},
    {title: "Food and Nutrition"},
    {title: "French"},
    {title: "Special Bilingual Education French"},
    {title: "Geography"},
    {title: "Geology"},
    {title: "History"},
    {title: "Citizenship Education"},
    {title: "Human Biology"},
    {title: "Mathematics"},
    {title: "Additional Mathematics"},
    {title: "Physics"},
    {title: "Religious Studies"},
    {title: "Logic"},
    {title: "Computer Science"},
  ],
  ordinaryCommercial : [
    {title: "OHADA Financial Reporting"},
    {title: "Computer Aided Accounting"},
    {title: "International Financial and Reporting"},
    {title: "International Financial and Reporting Standards"},
    {title: "Business Mathematics and Statistics"},
    {title: "Commerce and Finance"},
    {title: "Micro Economics"},
  ],
  advancedGrammar : [
    {title: "Accounting"},
    {title: "Biology"},
    {title: "Chemistry"},
    {title: "Economics"},
    {title: "English Language"},
    {title: "Literature in English"},
    {title: "Food Science and Nutrition"},
    {title: "French"},
    {title: "Special Bilingual Education French"},
    {title: "Geography"},
    {title: "Geology"},
    {title: "History"},
    {title: "Pure Mathematics With Mechanics"},
    {title: "Pure Mathematics With Statistics"},
    {title: "Further Mathematics"},
    {title: "Physics"},
    {title: "Religious Studies"},
    {title: "Philosophy"},
    {title: "Computer Science"},
    {title: "Information and Communication Technology"}
  ],
  advancedCommercial : [
    {title: "Corporate accounting"},
    {title: "Cost and Management Accounting"},
    {title: "Financial Accounting"},
    {title: "International Financial and Reporting Standards"},
    {title: "Business Mathematics and Statistics"},
    {title: "Commerce and Finance"},
    {title: "Macro Economics"},
  ],
}

export const subject = [
  {
    title: "Subject 1",
  },
  {
    title: "Subject 1",
  },
  {
    title: "Subject 1",
  },
  {
    title: "Subject 1",
  },
  {
    title: "Subject 1",
  },
]

// const ls = new SecureLS({encodingType: "aes"})

export const kidsVideosData = [
  {
      "id": "aEtWJ22CfY4",
      "title": "Little Nappy"
    },
    {
      "id": "kNw8V_Fkw28",
      "title": "Hair Love"
    },
    {
      "id": "wAypTgLVECg",
      "title": "Merida"
    },
    {
      "id": "Pp3AyxbN3zY",
      "title": "Recoiled"
    },
    {
      "id": "lyoaLway15g",
      "title": "Material Girl"
    },
    {
      "id": "tw_UPDI11zU",
      "title": "Love Is In The Hair"
    },
    {
      "id": "J3z1x9VreQ0",
      "title": "Spider-Man"
    },
]

export const paginationStyles = {
  active: {
    background: `#5BDAF5!important`,
    color: "#fff",
    height: "45px!important",
    width: "45px!important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "default",
    "@media (max-width: 600px)": {
        height: "35px!important",
        width: "35px!important",
    }
},
  pagination: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      padding: "5px",
      "@media (max-width: 600px)": {
          padding: "5px 0px",
          justifyContent: "flex-start",
      },
      "&>li": {
          height: 35,
          width: 35,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px 10px",
          listStyleType: "none",
          cursor: "pointer",
          userSelect: "none",
          padding: "2px 15px",
          // "& *:hover": {
          //     color: "#0a2d6b",
          // },
      },
  },
  content: {
      maxWidth: "1200px",
      margin: "auto",
  },
}

export const toBase64 = (data: Blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        if(data instanceof Blob) {
          reader.readAsDataURL(data);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        }
    });
};

export const handleImages = (e:any, cb: Function) => {
  let fileArray = []
  for (const key in e.target.files) {
  if (Object.prototype.hasOwnProperty.call(e.target.files, key)) {
      const element = e.target.files[key];
      fileArray.push(element)
  }
  }
  fileArray.forEach(file => {
      toBase64(file)
          .then(data => {
              cb(data)
          })
  })
}

export const requestErrorHandler = (errorDispatch:any) => {
  toast("Une erreur est survenue");
  errorDispatch();
}

export const requestSuccessHandler = (status:number, detail:string, successDispatch: any, errorDispatch: any, doneType=false) => {
  if (status === 200 || status === 201) {
    successDispatch();
    doneType && toast("Fait");
  } else {
    toast(detail || "Une erreur est survenue");
    errorDispatch();
  }
}

// export const updateLocalStorage = (ItemName: string, itemObj: object) => {
//   ls.set(ItemName, JSON.stringify(itemObj))
// }

// export const getLocalStorageItem = (ItemName: string) => {
//   return ls.get(ItemName) ? JSON.parse(ls.get(ItemName)) : null
// }

export const sleep = (time:number, cb) => {
  if(typeof _timerId === "number") {
    clearTimeout(_timerId)
  }
  _timerId = setTimeout(() => {
    cb()
  }, time)
}

export const letCarlaTalk = (step, dialogItems, setCarlaIsTyping, setDialog, cb=() => undefined) => {
  setCarlaIsTyping(true)
  sleep(500, () => {
    setCarlaIsTyping(false)
    setDialog(state => {
      const newState = [
        ...state
      ]
      newState.push(dialogItems[step])
      return newState;
    })
    cb()
  })
}

export const T = (key: string) => {
  const intl = useIntl()
  return intl.formatMessage({id: key})
}

export const debounceFunction = (func, delay) => {
  let timer;
  return function () {
    const self = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(self, args);
    }, delay);
  };
};

export const cc_format = (value:string) => {
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/g, '')
  var matches = v.match(/\d{4,16}/g);
  var match = matches && matches[0] || ''
  var parts = []

  for (let i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
  }

  if (parts.length) {
      return parts.join(' ')
  } else {
      return value
  }
}

export const timeFormat = (string:string) => {
  return string
    .replace(
      /[^0-9]/g, '' // To allow only numbers
    )
    .replace(
        /^(\d{2})/, '$1:' // O0:
    );
}

export function validate_time(time){
  time.match(/(?:(?:0|1)[0-9]):[0-5][0-9]/)
}

export const astrosChecker = (day, month) => {
    const date = new Date(`2000-${month}-${day}`)
    let res = "belier"
    const astrosObj = {
        belierMin: new Date("2000-3-21"),
        belierSup: new Date("2000-4-20"),
        taureauMin: new Date("2000-4-21"),
        taureauSup: new Date("2000-5-20"),
        gemeauxMin: new Date("2000-5-21"),
        gemeauxSup: new Date("2000-6-21"),
        cancerMin: new Date("2000-6-22"),
        cancerSup: new Date("2000-7-22"),
        lionMin: new Date("2000-7-23"),
        lionSup: new Date("2000-8-22"),
        viergeMin: new Date("2000-8-23"),
        viergeSup: new Date("2000-9-22"),
        balanceMin: new Date("2000-9-23"),
        balanceSup: new Date("2000-10-22"),
        scorpionMin: new Date("2000-10-23"),
        scorpionSup: new Date("2000-11-22"),
        sagitaireMin: new Date("2000-11-23"),
        sagitaireSup: new Date("2000-12-21"),
        capriconeMin: new Date("2000-12-22"),
        capriconeSup: new Date("2000-1-20"),
        verseauMin: new Date("2000-1-21"),
        verseauSup: new Date("2000-2-18"),
        poissonMin: new Date("2000-2-19"),
        poissonSup: new Date("2000-3-20"),
    }

    Object.keys(astrosObj).forEach((key, i) => {
        if(i % 2 === 0) {
            if(date > astrosObj[key] && date < astrosObj[`${key.split("Min")[0]}Sup`]) {
                res = key.split("Min")[0]
              }
            }
          })
    return res
}

export function cc_expires_format(string) {
  return string
          .replace(
            /[^0-9]/, ""
          )
          .replace(
            /(^\d{2})/, "$1/"
          )
  // return string.replace(
  //     /[^0-9/]/g, '' // To allow only numbers
  // ).replace(
  //     /^([2-9])$/g, '0$1' // To handle 3 > 03
  // ).replace(
  //     /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
  // ).replace(
  //     /^0{1,}/g, '0' // To handle 00 > 0
  // ).replace(
  //     /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
  // );
}

export const checkWeek = (planning, t) => {
  let str = ""
  let str2 = ""
  let daysFromsIndex = 0

  const daysFroms = []

  if(planning instanceof Array) {
      planning.forEach((item, i) => {
          if(item.hours?.start_time){
            if((item.hours?.start_time !== daysFroms[daysFromsIndex]?.start_time) && daysFroms[daysFromsIndex]?.type !== "from") {
              daysFroms.push({
                ...item,
                type: "from"
              })
              daysFromsIndex = daysFromsIndex + 1
          } else {
            daysFroms[i] = {
              ...item,
              type: "to"
            }
          }}
      })
  }
  daysFroms.forEach(item => {
    str = str + item.type === "from" ? `${t(item.day)}` : `- ${t(item.day)} `
    str2 = str2 + item.type === "from" ? ` ${t(item.hours?.start_time.replace(":", "h"))}` : ` - ${t(item.hours.end_time.replace(":", "h"))} `
  })
  return str ? `(${str})` + str2 : ""
}

export function haversine_distance(mk1, mk2) {
  var R = 3958.8; // Radius of the Earth in miles
  var rlat1 = mk1.lat * (Math.PI/180); // Convert degrees to radians
  var rlat2 = mk2.lat * (Math.PI/180); // Convert degrees to radians
  var difflat = rlat2-rlat1; // Radian difference (latitudes)
  var difflon = (mk2.lng-mk1.lng) * (Math.PI/180); // Radian difference (longitudes)

  var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
  return d.toFixed(2);
}

export const globalDataFallback = {
  roles: [
    {
      title_en: 'Administrator',
      id: 1,
      title_fr: 'Administrateur'
    },
    {
      title_en: 'Customer',
      id: 2,
      title_fr: 'Client'
    },
    {
      title_en: 'Professional',
      id: 3,
      title_fr: 'Professionnel'
    }
  ],
  hair_types: [
    {
      id: 1,
      code: '1A',
      url: 'https://files.carlaplus.com/production/1A.jpg'
    },
    {
      id: 2,
      code: '1B',
      url: 'https://files.carlaplus.com/production/1B.jpg'
    },
    {
      id: 3,
      code: '1C',
      url: 'https://files.carlaplus.com/production/1C.jpg'
    },
    {
      id: 4,
      code: '2A',
      url: 'https://files.carlaplus.com/production/2A.jpg'
    },
    {
      id: 5,
      code: '2B',
      url: 'https://files.carlaplus.com/production/2B.jpg'
    },
    {
      id: 6,
      code: '2C',
      url: 'https://files.carlaplus.com/production/2C.jpg'
    },
    {
      id: 7,
      code: '3A',
      url: 'https://files.carlaplus.com/production/3A.jpg'
    },
    {
      id: 8,
      code: '3B',
      url: 'https://files.carlaplus.com/production/3B.jpg'
    },
    {
      id: 9,
      code: '3C',
      url: 'https://files.carlaplus.com/production/3A.jpg'
    },
    {
      id: 10,
      code: '4A',
      url: 'https://files.carlaplus.com/production/4A.jpg'
    },
    {
      id: 11,
      code: '4B',
      url: 'https://files.carlaplus.com/production/4B.jpg'
    },
    {
      id: 12,
      code: '4C',
      url: 'https://files.carlaplus.com/production/4C.jpg'
    }
  ],
  categories: [
    {
      subs: [],
      category: {
        id: 2,
        title_fr: 'Outils',
        title_en: 'Tools'
      }
    },
    {
      subs: [],
      category: {
        id: 3,
        title_fr: 'Accessoires',
        title_en: 'Accessories'
      }
    },
    {
      subs: [],
      category: {
        id: 4,
        title_fr: 'Soin pour enfants',
        title_en: 'Care for children'
      }
    },
    {
      subs: [
        {
          id: 1,
          title_en: 'Shampoo',
          title_fr: 'Shampoing',
          category_id: 1
        },
        {
          id: 2,
          title_en: 'Conditioner',
          title_fr: 'Après-shampoing',
          category_id: 1
        },
        {
          id: 3,
          title_en: 'Mask',
          title_fr: 'Masque',
          category_id: 1
        }
      ],
      category: {
        id: 1,
        title_fr: 'Soin des cheveux',
        title_en: 'Hair care'
      }
    }
  ],
  prestations: [
    {
      title_en: 'Extensions',
      id: 1,
      title_fr: 'Extentions'
    },
    {
      title_en: 'Pigtails',
      id: 2,
      title_fr: 'Nattes'
    },
    {
      title_en: 'Wah\'n\'Go',
      id: 3,
      title_fr: 'Wah\'n\'Go'
    },
    {
      title_en: 'Hair care',
      id: 4,
      title_fr: 'Soin de cheveux'
    },
    {
      title_en: 'Wigs',
      id: 5,
      title_fr: 'Perruques'
    },
    {
      title_en: 'Coloring',
      id: 6,
      title_fr: 'Coloration'
    },
    {
      title_en: 'Locs',
      id: 7,
      title_fr: 'Locs'
    },
    {
      title_en: 'Styling',
      id: 8,
      title_fr: 'Mise en plis'
    },
    {
      title_en: 'Permanent smoothing',
      id: 9,
      title_fr: 'Lissages permanents'
    },
    {
      title_en: 'Permanent curls',
      id: 10,
      title_fr: 'Boucles permanentes'
    },
    {
      title_en: 'Twists',
      id: 11,
      title_fr: 'Twists'
    },
    {
      title_en: 'Cornrows',
      id: 12,
      title_fr: 'Cornrows'
    },
    {
      title_en: 'haircut',
      id: 13,
      title_fr: 'Coupe de cheveux'
    }
  ],
  people_types: [
    {
      title_en: 'Man',
      id: 1,
      title_fr: 'Homme'
    },
    {
      title_en: 'Woman',
      id: 2,
      title_fr: 'Femme'
    },
    {
      title_en: 'Other',
      id: 3,
      title_fr: 'Autre'
    }
  ],
  status: [
    'UNVALIDATED',
    'ACTIVED',
    'UNACTIVED',
    'DELETED'
  ],
  delivery_type: [
    'HOME',
    'STORE'
  ],
  payment_type: [
    'STRIPE',
    'APPLE_PAY',
    'GOOGLE_PAY',
    'PAYPAL'
  ],
  order_status: [
    'PENDING',
    'BOOK',
    'IN_PROGRESS',
    'ACCEPTED'
  ]
}


export const lastday = (y, m) => new Date(y, m + 1, 0).getDate();