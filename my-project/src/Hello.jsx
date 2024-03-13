function Hello(){
  let name='Raj';
  let fullname=()=>{
    return 'Sachin Kumar';
  }
  return <p>my name is {name} and my real name is {fullname()}</p>
}
export default Hello;