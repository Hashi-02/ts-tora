//optional
export const isUserSignedIn = (userId: string, username?:string): boolean => {
  if(userId == "ABC"){
    console.log('functional parameters sample 1: User is signed in! Username is', username)
    return true
  }else{
    console.log('functional parameters sample 2: User is not signed in!')
    return false
  }
}
//default
export const isUserSignedIn2 = (userId: string, username:string = "NoName"): boolean => {
  if(userId == "ABC"){
    console.log('functional parameters sample 3: User is signed in! Username is', username)
    return true
  }else{
    console.log('functional parameters sample 4: User is not signed in!')
    return false
  }
}
//rest
export const sumPrice = (...productsPrice:number[]):number =>{
  return productsPrice.reduce((prevTotal:number, productPrice:number)=>{
    return prevTotal + productPrice
  },0)
}