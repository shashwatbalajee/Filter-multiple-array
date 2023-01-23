import React,{useState} from 'react'
import  Table  from './Table' 

const user=[
    {
        id: '1',
        Name:'Rohan',
        Email:'rohan0219@gmail.com',
        Mobile:997812376
    },
    {
        id:'2',
        Name:'Shyam',
        Email:'Shyam45@gmail.com',
        Mobile:887124397
    },
    {
        id:'3',
        Name:'Shashwat',
        Email:'ss23@yahoo.com',
        Mobile:998712865
    },
    {
        id:'4',
        Name:'Saurav',
        Email:'lalbgp@gmail.com',
        Mobile:7761209452
    },
    {
        id:'5',
        Name:'Aiyush',
        Email:'Aiyush22@gmail.com',
        Mobile:8876124376
    },
    {
        id:'6',
        Name:'Samina',
        Email:'sarapeppy@gmail.com',
        Mobile:998512987
    },
    {
        id:'7',
        Name:'Anchal',
        Email:'anchal@yahoo.com',
        Mobile:6654091098
    }
]
function Filter() {
    const [search,setSearch] = useState('')
    const find = (data) =>{
        return data.filter(
            (item)=> item.Name.toLowerCase().includes(search)||
            item.Email.toLowerCase().includes(search))
    }

    
  return (
    <div>
        <div style={{width:'full', padding:'2%'}}>
            <h5 style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:'medium',textAlign:'left'}}>
                Hello Users
            </h5>
        </div>
        <div style={{width:'full',padding:'2%'}}>
            <input type='text' placeholder='hello people' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
        </div>
        <div>
          <Table data={find(user)}></Table>
        </div>
    </div>
  )
}

export default Filter