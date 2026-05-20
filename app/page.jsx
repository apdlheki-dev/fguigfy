
"use client";
import {useState} from "react";

export default function Home(){

const [login,setLogin] = useState(false);
const [user,setUser] = useState("");
const [pass,setPass] = useState("");

const [search,setSearch] = useState("");

const [person,setPerson] = useState({
name:"",
age:"",
city:"",
phone:"",
info:""
});

const [people,setPeople] = useState([]);

const enter = ()=>{
if(user==="112233" && pass==="20202020"){
setLogin(true);
}else{
alert("بيانات الدخول غير صحيحة");
}
}

const addPerson = ()=>{
if(!person.name)return;

setPeople([
{...person,id:Date.now()},
...people
]);

setPerson({
name:"",
age:"",
city:"",
phone:"",
info:""
});
}

const filtered = people.filter((p)=>
p.name.toLowerCase().includes(search.toLowerCase())
);

if(!login){
return(
<div className="container">
<div className="card login">
<h1 className="title">People Platform</h1>
<p className="sub">منصة احترافية حديثة</p>

<input className="input" placeholder="اسم المستخدم" onChange={(e)=>setUser(e.target.value)} />
<input className="input" type="password" placeholder="كلمة المرور" onChange={(e)=>setPass(e.target.value)} />

<button className="button" onClick={enter}>دخول</button>
</div>
</div>
)
}

return(
<div className="container">

<h1 className="title">لوحة التحكم</h1>
<p className="sub">عرض الأشخاص بشكل طولي احترافي</p>

<div className="stats">

<div className="stat">
<p>الأشخاص</p>
<h2>{people.length}</h2>
</div>

<div className="stat">
<p>البحث</p>
<h2>{filtered.length}</h2>
</div>

<div className="stat">
<p>المدن</p>
<h2>{new Set(people.map(p=>p.city)).size}</h2>
</div>

</div>

<div className="card">

<h2>إضافة شخص</h2>

<input className="input" placeholder="الاسم" value={person.name} onChange={(e)=>setPerson({...person,name:e.target.value})} />

<input className="input" placeholder="العمر" value={person.age} onChange={(e)=>setPerson({...person,age:e.target.value})} />

<input className="input" placeholder="المدينة" value={person.city} onChange={(e)=>setPerson({...person,city:e.target.value})} />

<input className="input" placeholder="الهاتف" value={person.phone} onChange={(e)=>setPerson({...person,phone:e.target.value})} />

<textarea className="textarea" placeholder="معلومات إضافية" value={person.info} onChange={(e)=>setPerson({...person,info:e.target.value})} />

<button className="button" onClick={addPerson}>حفظ</button>

</div>

<div className="card">

<h2>الأشخاص</h2>

<input className="input" placeholder="بحث..." value={search} onChange={(e)=>setSearch(e.target.value)} />

<div className="people">

{filtered.length===0 ? (
<p style={{color:"#94a3b8"}}>لا يوجد أشخاص حالياً</p>
) : (
filtered.map((p)=>(
<div className="person" key={p.id}>
<h3>{p.name}</h3>
<p>العمر: {p.age}</p>
<p>المدينة: {p.city}</p>
<p>الهاتف: {p.phone}</p>
<p style={{marginTop:"10px"}}>{p.info}</p>
</div>
))
)}

</div>

</div>

</div>
)
}
