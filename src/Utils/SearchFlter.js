function Searchdata(searchinput,listofRestraunt){
    var datas=listofRestraunt.filter((ress)=>
        ress?.data?.name?.toLowerCase()?.includes(searchinput.toLowerCase())   
           
)
    return datas;
    
}
export default Searchdata;