import { useIntl } from "react-intl";
import { toast } from "react-hot-toast";
import SecureLS from "secure-ls";

let _timerId:(NodeJS.Timeout | null) = null


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

export interface RegionOption {
  label: string,
  value: string
}

export const regionOptions:RegionOption[] = [
  {
    label: "Adamawa",
    value: "adamawa"
  },
  {
    label: "Central",
    value: "central"
  },
  {
    label: "East",
    value: "east"
  },
  {
    label: "Far North",
    value: "far_north"
  },
  {
    label: "Littoral",
    value: "littoral"
  },
  {
    label: "North",
    value: "north"
  },
  {
    label: "Northwest",
    value: "northwest"
  },
  {
    label: "South",
    value: "south"
  },
  {
    label: "Southwest",
    value: "southwest"
  },
  {
    label: "West",
    value: "west"
  },
]

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

export const sleep = (time:number, cb:Function) => {
  if(typeof _timerId === "number") {
    clearTimeout(_timerId)
  }
  _timerId = setTimeout(() => {
    cb()
  }, time)
}

export const debounceFunction = (func: Function, delay:number) => {
  let timer:NodeJS.Timeout;
  return function () {
    // @ts-ignore
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