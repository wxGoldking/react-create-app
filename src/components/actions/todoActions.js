export const getall =()=>async (dispatch) => {
  var result = await fetch("api/gettodo").then(data=>data.json());
  dispatch({
        type:"GETALL"
        ,
        result
  })
}
export const add =(title)=>async (dispatch) => {
  var result = await fetch("api/addtodo",{
      method : "POST" ,
      headers: {
          'Content-Type': 'application/json'
      },
      body : JSON.stringify({title})}).then(data=>data.json());
  dispatch({
        type:"ADD",
        result
  })
}
export const dele =(id)=>async (dispatch) => {
  var result = await fetch("api/deltodo",{
      method : "DELETE" ,
      headers: {
          'Content-Type': 'application/json'
      },
      body : JSON.stringify({id})}).then(data=>data.json());
  dispatch({
        type:"DELETE",
        result
  })
}
export const change =(id,k,v)=>async (dispatch) => {
  var result = await fetch("/api/changetodo",{
      method : "POST" ,
      headers: {
          'Content-Type': 'application/json'
      },
      body : JSON.stringify({id,k,v})}).then(data=>data.json());
  dispatch({
        type:"UPDATE",
        result
  })
}
