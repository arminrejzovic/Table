import React, {useEffect, useState} from 'react';
import './App.css';
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableCell from "./components/TableCell";

interface User{
    id: number;
    name: string;
    surname: string;
    age: number;
}

function App() {
    const [selectedItem, setSelectedItem] = useState(0);
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        setData([
            {id: 1, name: "Mirel", surname: "Bajrić", age: 18},
            {id: 2, name: "Samir", surname: "Suljanović", age: 50},
            {id: 3, name: "Aid", surname: "Topalović", age: 18}
        ])
    }, [])

  return (
    <div className="App">
      <Table>
          <TableHead>
              <TableRow>
                  <TableCell>Select</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Surname</TableCell>
                  <TableCell>Age</TableCell>
              </TableRow>
              <div>VIOLATION</div>
          </TableHead>
          <TableBody>
              {
                  data.map((person) => {
                      return(
                          <TableRow selected={selectedItem === person.id}>
                              <TableCell align={"center"}>
                                  <input
                                      type={"checkbox"}
                                      checked={selectedItem === person.id}
                                      onChange={(e) => {
                                          if(e.target.checked){
                                              setSelectedItem(person.id);
                                          }
                                          else {
                                              setSelectedItem(0);
                                          }
                                      }}
                                  />
                              </TableCell>
                              <TableCell>{person.name}</TableCell>
                              <TableCell>{person.surname}</TableCell>
                              <TableCell align={"right"}>{person.age}</TableCell>
                              <TableCell>
                                  <button onClick={() => {
                                      setData(data.filter((item) => {
                                          return item.id !== person.id;
                                      }))
                                  }}>DELETE</button>
                              </TableCell>
                          </TableRow>
                      )
                  })
              }

          </TableBody>
      </Table>
    </div>
  );
}

export default App;
