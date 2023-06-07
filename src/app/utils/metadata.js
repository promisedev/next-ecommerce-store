
export const subPages=()=>{
const data =[{name:"About us",link:"about"},{name:"Stocklists",link:"stocklist"},{name:"Journals",link:"journals"},{name:"FAQ",link:"faq"}]

    return data 
}

export const Socials =()=>{
    const data=[{link:"https://facebook.com"},{link:"https://twitter.com"},{link:"https://instagram.com"}]
    return data
}


export const Pages =()=>{
const data = [
  { name: "new", link: "new", pages: [] },
  { name: "clothing", link: "", pages: [
    {data:[
        {data:[{title:"shop all",link:""},{title:"new arrivals",link:""},{title:"best sellers",link:""}]},
        {data:[{title:"featured",data:[{title:"the dress edit",link:""},{title:"outwaer",link:""},{title:"conscious choice",link:""},{title:"winter sale",link:""}]}]}]},
    
    {data:[{title:"dresses",link:""},{title:"tops",link:""},{title:"bottoms",link:""},{title:"skirts",link:""},{title:"knitwear",link:""},{title:"rompers",link:""},{title:"outerwear",link:""}]}], image:"" },
  { name: "dresses", link: "", pages: [{title:"all dresses",link:""},{title:"bodycon",link:""},{title:"blazer dresses",link:""},{title:"midis",link:""},{title:"minis",link:""},{title:"skirts",link:""}], image:"" },
  { name: "tops", link: "new", pages: [] },
  { name: "bottoms", link: "new", pages: [] },
  { name: "sales", link: "new", pages: [] },
  { name: "lookbook", link: "new", pages: [] }
];

}