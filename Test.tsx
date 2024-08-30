#import <React>

function MyButton ({title}:{title:string}){
  return (
    <button>{title}</button>
  );
}

export default function MyApp(){
  return(
    <div>
      <h1>Welcome to my App</h1>
    </div>
  );
}
