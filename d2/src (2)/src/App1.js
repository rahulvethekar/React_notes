function App() {
  let title="Neosoft Technologies";
  let description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:";
  let technologies=["Java","php",".net","Javascript"];
  let data=[
    {"id":1,"name":"A","age":23,"city":"noida"},
    {"id":2,"name":"B","age":23,"city":"noida"},
    {"id":3,"name":"C","age":23,"city":"noida"},
    {"id":4,"name":"D","age":23,"city":"noida"}
  ]
  return (
    <div>
      <h2> {title}</h2>
      <p> {description}</p>
      {technologies.length>0 ?
      <div>
         <h5> Technologies</h5>
          <ul>
         {technologies.map((tech,ind)=>
            <li key={ind}>{tech}</li>
         )}
         </ul>
      </div>:null}
    </div>
  );
}

export default App;
